---
layout: post
title: "Deploy different environment variable configurations with the same docker image using combine in ansible 2.0"
description: ""
category: 
tags: []
---
{% include JB/setup %}

```
- name: docker | start application
  docker:
    name: app
    image: "{{ docker.registry.organization }}/{{ docker.registry.project }}:{{ tag }}"
    username: "{{ docker.registry.username }}"
    email: "{{ docker.registry.email }}"
    password: "{{ docker.registry.password }}"
    state: reloaded
    restart_policy: always
    pull: always
    ports:
      - "{{ansible_eth1.ipv4.address}}:3000:3000"
    env: "{{ app.env|combine({'CRON_ENABLED': 0}) }}"
  when: "'appservers' in group_names"
  tags: app

- name: docker | start application
  docker:
    name: app
    image: "{{ docker.registry.organization }}/{{ docker.registry.project }}:{{ tag }}"
    username: "{{ docker.registry.username }}"
    email: "{{ docker.registry.email }}"
    password: "{{ docker.registry.password }}"
    state: reloaded
    restart_policy: always
    pull: always
    ports:
      - "{{ansible_eth1.ipv4.address}}:3000:3000"
    env: "{{ app.env|combine({'CRON_ENABLED': 1}) }}"
  when: "'cronservers' in group_names"
  tags: app
```
