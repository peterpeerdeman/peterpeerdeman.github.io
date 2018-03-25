---
layout: post
title: "Symfony2 continuous integration and deployment with Wercker"
description: "Symfony2 continuous integration and deployment with Wercker"
category: devops
tags: [symfony2, devops]
---

To continuously integrate and deploy our Symfony2 applications we I the cloud application [Wercker](http://wercker.com). It has a very quick setup, is free during beta period and has a nice web interface that allows you to inspect builds and deploys.

I have created the [peterpeerdeman/symfony2-angular@0.0.2](https://app.wercker.com/#applications/5279508609b5e6377c00195f/tab/details) Wercker box specifically for these builds, which include node, composer, phpunit, mysql and karma.

To configure the steps, we use the following wercker.yml config:

{% highlight ruby %}
box: peterpeerdeman/symfony2-angular@0.0.2
services:
      - wercker/mysql
build:
  steps:
    - script:
        name: update composer executable
        code: |-
            sudo composer self-update
    - script:
        name: install composer dependencies
        code: |-
            composer install --no-interaction --prefer-source
    - script:
        name: install npm dependencies
        code: |-
            npm install
    - script:
        name: configure and initialize the db
        code: |-
            sed -i.bak -e "s/database_host: .*/database_host: $WERCKER_MYSQL_HOST/" -e "s/database_port: .*/database_port: $WERCKER_MYSQL_PORT/" -e "s/database_name: .*/database_name: $WERCKER_MYSQL_DATABASE/" -e "s/database_user: .*/database_user: $WERCKER_MYSQL_USERNAME/" -e "s/database_password: .*/database_password: $WERCKER_MYSQL_PASSWORD/" app/config/parameters.yml
            ./post-install.sh
    - script:
        name: PHPUnit integration tests
        code: phpunit --configuration app/phpunit.xml.dist
    - script:
        name: frontend integration tests
        code: |-
            npm test
  after-steps:
    - kobim/slack-post:
        subdomain: lifely
        token: $SLACK_TOKEN
        channel: notifications

deploy:
  steps:
    - script:
        name: install capifony
        code: |-
            sudo gem install capifony
    - add-ssh-key:
        keyname: WERCKER_CAPIFONY_KEY
    - script:
        name: set known host for bitbucket
        code: |-
            ssh-keyscan -t rsa bitbucket.org > ~/.ssh/known_hosts
    - script:
        name: deploy with capifony
        code: |-
            cap $WERCKER_DEPLOY_TARGET -S revision=$WERCKER_GIT_COMMIT deploy
  after-steps:
    - kobim/slack-post:
        subdomain: lifely
        token: $SLACK_TOKEN
        channel: notifications

{% endhighlight %}

Some notable details:

* composer and npm are updated on each build
* the database info is replaced with wercker sql details
* slack notifications are triggered after each build and deploy, don't forget to configure the slack token through wercker interface
* before deployment, the known host for bitbucket has to be set.


