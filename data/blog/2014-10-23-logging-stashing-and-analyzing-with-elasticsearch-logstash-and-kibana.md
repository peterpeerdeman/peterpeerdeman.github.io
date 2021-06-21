---
date: '2014-10-23'
title: 'Big data experiment with Elasticsearch, Logstash and Kibana'
category: devops
tags: ['devops']
draft: false
---

After hearing [Michael Heap's talk](http://endpointcon.com/posts/2014/07/01/michael-heap/) on Endpoint 2014 about doing more useful stuff with your logfiles I got inspired to start experimenting with big data: Elastiscsearch, Logstash and Kibana.

I started the experiment by creating my source of "big data". As Michael had shown during his talk, I added some "info" level log lines to a backend application that logged certain events with some metadata to the log file.

I've found a very helpful guide to [setup the ELK stack by DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-logstash-and-kibana-to-centralize-and-visualize-logs-on-ubuntu-14-04) which I can wholeheartedly recommend. The only thing missing were the ansible scripts to provision your server quickly, which I found on [valentinogagliardi's githubproject ansible-logstash](https://github.com/valentinogagliardi/ansible-logstash)

Once setup, the logs are collected through logstash, stored in elasticsearch and can get queried with a nice dashboard frontend with Kibana. It takes a while to get Kibana to display the information you want to see but it surely beats creating a custom dashboard from scratch. Look at those pretty graphs!

![kibana in all its graphy glory](../assets/images/2014-10-23-kibana.png)
