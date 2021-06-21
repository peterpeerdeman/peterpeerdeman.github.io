---
date: '2016-08-01'
layout: post
title: 'using gitstats to get an overview of git activity in a repository'
description: 'using gitstats to get an overview of git activity in a repository'
category: git
tags: ['git']
draft: false
---

I was recently interested to get some more info on a git project that has been running for a long time. There is a tool that creates some nice stats such as busiest commit moments, amount of commits per user and others called [gitstats](http://gitstats.sourceforge.net/). The documentation is a bit finicky, but you can easily install it via homebrew:

`brew install gitstats`

and run it from inside a git repository folder as follows:

`gitstats . gitstats`

now open the `index.html` inside the freshly created gitstats folder and watch the juicy git stats in glorious web1.0 fashion.

![gitstats](http://softwarepassion.s3.amazonaws.com/wp-content/uploads/gitstats_authors.png)
