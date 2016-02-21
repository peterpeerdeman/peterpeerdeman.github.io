---
layout: post
title: "Upgrading old ruby 2.0.0 app to 2.2.4 for heroku deployment"
description: ""
category: 
tags: []
---
{% include JB/setup %}

So heroku urged me to update my old ruby project [Wisdoms](http://www.wisdoms.nl) from version 2.0.0 to 2.2.4. Should be as easy as updating the `Gemfile` with the new version of ruby:

```
ruby "2.2.4"
```

but unfortunately it wasn't. I kept getting errors about json 1.8.0 not being able to install, and that I had to get `gem install json -v '1.8.0'` running before I could finish the bundle update that would properly update the `Gemfile.lock` file.

After searching online for a while I found a number of suggestions about upgrading the version of json to 1.8.1. While that didn't work, upgrading the version to 1.8.3 did the trick and allowed me to run a `bundle update` command without failures. I had added the following line to my `Gemfile` to make it work:

```
gem 'json', '1.8.3'
```
