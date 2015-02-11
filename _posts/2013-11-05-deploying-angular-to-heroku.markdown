---
layout: post
title:  "Deploying Angular to Heroku"
categories: angular
tags: [angular, heroku]
---

A couple of simple steps to quickly create a nodejs angular application and host it on heroku.

<!--more-->

1. `npm install -g yo`
1. `yo angular`
1. develop the app
1. use `grunt` to build the dist folder
1. `heroku create`
1. set buildpack:

{% highlight bash %}
heroku config:add BUILDPACK_URL=https://github.com/mbuchetics/heroku-buildpack-nodejs-grunt.git
heroku labs:enable user-env-compile
heroku config:set NODE_ENV=production
{% endhighlight %}

1. `heroku push`

{% include JB/setup %}