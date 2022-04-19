---
date: '2021-06-13'
title: 'Build raspberry pi arm64 docker images faster on desktop using buildx'
tags: ['raspberry', 'docker']
draft: false
---

So apparently, it was already possible for quite a while to build docker images cross platform , but I only recently found out. This is extremely useful to create docker images for raspberry pi's because building docker images on the device itself takes a really long time. Docker uses the buildx command, with the x behind build referring to "experimental".

You can create and switch to the experimental builder with these commands

```
docker buildx create --name mybuilder
docker buildx use mybuilder
```

After switching you can use the buildx build command and specify the platform using `--platform linux/arm64` to build an image for that specific platform. In this example, I tag and push the image to the repository in the same command:

`docker buildx build --platform linux/arm64 -t peterpeerdeman/docker-prophet-arm:1.0.0-slim --push .`
