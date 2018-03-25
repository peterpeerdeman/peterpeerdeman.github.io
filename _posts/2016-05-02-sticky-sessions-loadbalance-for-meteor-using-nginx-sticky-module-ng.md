---
layout: post
title: "Sticky sessions loadbalancing for meteor using nginx-sticky-module-ng"
category: nginx
tags: [nginx, meteor, performance, loadbalancing]
---


We found that the third party [nginx-sticky-module-ng](https://bitbucket.org/nginx-goodies/nginx-sticky-module-ng) plugin did quite a good job distributing the load among servers per specific user session. Unfortunately, this means you have to install nginx on the loadbalancer from source, and install the [nginx-sticky-module-ng](https://bitbucket.org/nginx-goodies/nginx-sticky-module-ng) during the installation. We use the following ansible step to install nginx including the sticky module:

{% highlight yaml %}
- name: nginx | install from source
  shell: |-
    wget http://nginx.org/download/nginx-1.8.0.tar.gz
    tar -xzf nginx-1.8.0.tar.gz
    cd nginx-1.8.0
    wget https://bitbucket.org/nginx-goodies/nginx-sticky-module-ng/get/1.2.6.tar.gz
    tar -xzf 1.2.6.tar.gz
    ./configure --prefix=/etc/nginx \
        --sbin-path=/usr/sbin/nginx \
        --conf-path=/etc/nginx/nginx.conf \
        --error-log-path=/var/log/nginx/error.log \
        --http-log-path=/var/log/nginx/access.log \
        --pid-path=/var/run/nginx.pid \
        --lock-path=/var/run/nginx.lock \
        --http-client-body-temp-path=/var/cache/nginx/client_temp \
        --http-proxy-temp-path=/var/cache/nginx/proxy_temp \
        --http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp \
        --http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp \
        --http-scgi-temp-path=/var/cache/nginx/scgi_temp \
        --user=www-data \
        --group=www-data \
        --with-http_ssl_module \
        --with-http_realip_module \
        --with-http_addition_module \
        --with-http_sub_module \
        --with-http_dav_module \
        --with-http_flv_module \
        --with-http_mp4_module \
        --with-http_gunzip_module \
        --with-http_gzip_static_module \
        --with-http_random_index_module \
        --with-http_secure_link_module \
        --with-http_stub_status_module \
        --with-mail \
        --with-mail_ssl_module \
        --with-file-aio \
        --with-http_spdy_module \
        --with-cc-opt='-g -O2 -fstack-protector --param=ssp-buffer-size=4 -Wformat -Werror=format-security -Wp,-D_FORTIFY_SOURCE=2' \
        --with-ld-opt='-Wl,-z,relro -Wl,--as-needed' \
        --with-ipv6 \
        --add-module=nginx-goodies-nginx-sticky-module-ng-c78b7dd79d0d
    make
    checkinstall --install=no -y
    mkdir -p /var/cache/nginx /tmp/nginx /etc/nginx/sites-enabled
  args:
    chdir: /usr/src
  tags: nginx
{% endhighlight %}

The `sticky secure` module can then be enabled in your nginx config with the `sticky secure` tag in the nginx upstream configuration:

{% highlight bash %}
# nginx vhost file

proxy_cache_path /tmp/nginx/myappname levels=1:2 keys_zone=myappname:8m max_size=100m inactive=10m;

upstream myappname {
    sticky secure;

    server <host1iphere>:3000;
    server <host2iphere>:3000;
    server <host3iphere>:3000;
}

server {
    listen 443 ssl spdy;

    ## ... rest of nginx ssl config ...

    location / {
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $http_host;

        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Nginx-Proxy true;

        proxy_http_version 1.1;
        proxy_redirect off;

        proxy_ignore_headers Set-Cookie;
        proxy_hide_header Cache-Control;

        proxy_cache myappname;
        proxy_cache_key $host$uri$is_args$args;
        proxy_cache_valid 200 1m;
        proxy_cache_bypass $http_cache_control;
        add_header X-Proxy-Cache $upstream_cache_status;

        add_header X-Upstream $upstream_addr;

        proxy_pass http://myappname;
    }
}
{% endhighlight %}
