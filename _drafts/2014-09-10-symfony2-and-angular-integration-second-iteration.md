---
layout: post
title: "Deploying an Angular web application alongside Symfony2 backend"
description: ""
category: devops 
tags: [devops, angular, symfony2]
---
{% include JB/setup %}

then
- first setups rendered less using php
- assetic used for image pipeline
- index page rendered with symfony

now
- client files moved to separate client folder
- client files built with grunt to build folder
- only /api routes rendered by backend
- nginx configured to serve static files
