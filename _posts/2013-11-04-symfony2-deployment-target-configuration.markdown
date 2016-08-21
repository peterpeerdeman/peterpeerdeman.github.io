---
layout: post
title:  "Symfony2 deployment target configuration"
category: symfony2
tags: [symfony2, deployment, server]
---

A checklist for the things that need to be configured in our Symfony2 deploy target

<!--more-->

1. Rent VPS solution
1. Install ubuntu 12.04 with LAMP and SSH server
1. Upgrade PHP to PHP5.4
    1. add php5 repository  
        * sudo apt-get install python-software-properties
        * sudo add-apt-repository  ppa:ondrej/php5
    1. apt-get upgrade
    1. apt-get dist-upgrade
    1. restart apache2
1. install node and less
    apt-add-repository ppa:chris-lea/node.js
    apt-get update
    apt-get install nodejs
    sudo npm install less
1. sudo apt-get install openjdk-7-jre (for yuicompressor)
1. sudo apt-get install php5-intl (for lib-icu)
1. sudo apt-get install git
1. sudo apt-get install acl
1. configure mysql user, password and db
        mysql -u root -p
        create database dbname;
        grant all privileges on dbname.* to username@localhost identified by 'password';
1. create unix deploy user and set password
    * sudo useradd -m deploy
    * sudo passwd deploy
1. put in "acl,defaults" into /etc/fstab , then mount -a to remount it. 
1. set permissions on cache and logs folder 
    * setfacl -R -m u:www-data:rwX -m u:`whoami`:rwX app/cache app/logs
    * setfacl -dR -m u:www-data:rwX -m u:`whoami`:rwX app/cache app/logs
1. configure apache2 to load /var/www/deployname/current/web in /etc/apache2/sites-available/000-default.conf
1. enable mod_rewrite
        sudo a2enmod rewrite
1. set timezone in /etc/php5/apache2/php.ini
        date.timezone = "Europe/Amsterdam" 
1. set AllowOverride All in /etc/apache2/apache2.conf
1. ensure authorization is rewritten:
        RewriteEngine on
        RewriteCond %{HTTP:Authorization} ^(.*)
        RewriteRule .* - [e=HTTP_AUTHORIZATION:%1]
1. configure capifony deploy script

{% include JB/setup %}
