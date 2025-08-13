---
title: 'backing up longhorn volumes to minio'
date: '2024-06-05'
category: devops
tags: ['docker', 'devops', 'kubernetes']
draft: false
---

- installing longhorn
- volumes replicated but if cluster goes down, data is gone

- need for place to store objects, minio
    - docker compose
      - running minio on nas
    - or kubernetes helm

- minio create access token
- configure secrets and url in kubrnetes secrets
- configure backuptarget in longhorn


refrences
- https://medium.com/@randy.hamzah.h/running-minio-server-with-docker-compose-54bab3afbe31
- https://blog.min.io/s3-security-access-control/
