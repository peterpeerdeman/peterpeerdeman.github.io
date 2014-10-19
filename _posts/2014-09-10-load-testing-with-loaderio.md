---
layout: post
title: "Load testing with loader.io"
description: ""
category: devops
tags: [devops, loadtesting, cache]
---

While developing webapplications I'm always trying to keep a close watch on performance and reliability, especially when working on web applications that are facing a broad audience. To test whether the site is able to withstand big crowds of visitors you can easily test your webapplication with some online tools.

I've been looking around for a while found [loader.io](http://loader.io) to be a very suitable option for online load testing. It is free for up to 10.000 hits per test, which is ideal to start off with. It allows you to enter any of your urls and even configure basic authentication to allow testing on protected sites such as your acceptance environments.

In this case, we saw that the application was facing major issues when ramping up users, causing load times to increase above 10 seconds and dropping about 10% of the requests completely.

After enabling the applications cache configuration, we can clearly see the big improvement in load times and stability, staying below 100ms on average.

Before:
![loader io screenshot - before]({{ site.url }}/assets/images/2014-09-10-loaderio-01.png)

After:
![loader io screenshot - after]({{ site.url }}/assets/images/2014-09-10-loaderio-02.png)

{% include JB/setup %}
