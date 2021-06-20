---
layout: post
title: 'Deploying an Angular web application alongside Symfony2 back-end'
category: devops
tags: [devops, angular, symfony2]
---

When I started building web applications with Symfony2 and Angular I've tried a couple of different ways of integrating these two properly.

### Setup then: Angular served through Symfony2

The first setup closely resembled the configuration that is shown in most Symfony2 tutorials: A controller renders the homepage, assetic renders and minifies the less and javascript files and the rest of the Angular views are loaded through the Symfony2 public folder.

The biggest advantage of this configuration is that there is no separate pipeline for the back-end and front-end functionality. This also means that when deploying the application, there is no need to run any extra commands to get the front-end built. However, modern front-end development pipelines using grunt and gulp offer a whole lot of extra flexibility in preparing assets, running tests and much more.

### Setup now: Angular and Symfony2 served separately through nginx

This led us to a cleaner separation between the front-end and back-end application. In our new configuration we separate server, client and devops code in separate folders, which makes files a lot easier to find instead of nesting them deep within the public folder of the Symfony2 application.

The client folder has its own Gruntfile that is capable of doing a multitude of front-end tasks such compiling and minimizing our assets, creating icon fonts from svg files, running unit tests, creating front-end documentation and many others. All of the production assets are written to a special "build" folder.

The files in this build folder are now being served directly from nginx. Only server calls made to `/api` are routed to Symfony2. This decouples the front-end and back-end even better than before and allows us to heavily cache all of the static files or even serve the static files through Amazon S3 buckets directly.

### Getting started

If you are still using the old setup for your web application, I'd strongly advise you to give the separated setup a try. Getting started with a grunt front-end pipeline and angular is very easy with some example scaffolds such as the [Yeoman Angular generator](https://github.com/yeoman/generator-angular). To serve the built folder, we've used an nginx configuration similar to this one:

{% highlight nginx %}
server {
location / {
access_log off;

        expires 1w;

        try_files /client/build/$uri /client/build/$uri/ /client/build/index.html =404;
    }

    location /api {

        fastcgi_pass unix:/var/run/php5-fpm.sock;
        include fastcgi_params;

        fastcgi_param SCRIPT_FILENAME $document_root/server/web/app.php;

    }

}
{% endhighlight %}
