---
layout: post
title: "improving performance, loading speed and scalability of a large meteor application"
category: meteor
tags: [meteor, performance]
---
{% include JB/setup %}

- reduce distance between db and appservers
- load images from S3 directly
- load balance with nginx `ip_hash`
- create cacheable REST endpoints for common data on home page
- separate background jobs from client facing nodes
