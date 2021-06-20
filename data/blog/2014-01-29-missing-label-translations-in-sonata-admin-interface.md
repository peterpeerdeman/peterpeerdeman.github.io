---
date: '2014-01-29'
title: 'Missing label translations in Sonata admin interface'
category: symfony2
tags: ['php']
draft: false
---

Somehow, no translations seemed to be loaded in the sonata admin interface. After a while I found out that our locale was defaulted to a 'nl' while there are no available standard translations for dutch. Adding the fallback to the config file solved the problem, now showing english button labels.

```yaml
# /app/config/config.yml

framework:
translator:
fallback: en
```
