---
date: '2016-06-27'
layout: post
title: 'Deploy different environment variable configurations with the same docker image using combine in ansible 2.0'
description: 'Deploy different environment variable configurations with the same docker image using combine in ansible 2.0'
category: devops
tags: [devops, ansible, docker]
draft: false
---

As described in an earlier post about [improving performance in meteor applications]({% post_url 2016-04-01-improving-performance-loading-speed-and-scalability-of-a-large-meteor-application %}), we separated synchedcron jobs out of a meteor application docker image using two deployments of the same image using a special environment variable.

In the ansible file below we can see two ansible docker tasks that both run a specific docker image. The environment settings are loaded from the `app.env` groupvar. Using the ansible `combine` functionthat was introduced in ansible 2.0, we are now able to combine the configured groupvars with one special environment variable `CRON_ENABLED`, which is set to 0 or 1, depending on wether we are deploying a cron instance, or a webserver instance of the same docker container. The ansible `when` configuration ensures that only one of these 2 tasks is ran for each individual server.

```yaml
-   name: docker | start application
    docker:
    name: app
    image: "{{ docker.registry.organization }}/{{ docker.registry.project }}:{{ tag }}"
    username: "{{ docker.registry.username }}"
    email: "{{ docker.registry.email }}"
    password: "{{ docker.registry.password }}"
    state: reloaded
    restart_policy: always
    pull: always
    ports: - "{{ansible_eth1.ipv4.address}}:3000:3000"
    env: "{{ app.env|combine({'CRON_ENABLED': 0}) }}"
    when: "'appservers' in group_names"
    tags: app

-   name: docker | start application
    docker:
    name: app
    image: "{{ docker.registry.organization }}/{{ docker.registry.project }}:{{ tag }}"
    username: "{{ docker.registry.username }}"
    email: "{{ docker.registry.email }}"
    password: "{{ docker.registry.password }}"
    state: reloaded
    restart_policy: always
    pull: always
    ports: - "{{ansible_eth1.ipv4.address}}:3000:3000"
    env: "{{ app.env|combine({'CRON_ENABLED': 1}) }}"
    when: "'cronservers' in group_names"
    tags: app
```
