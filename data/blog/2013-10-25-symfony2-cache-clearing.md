---
title: Symfony2 cache clearing problems
date: '2013-10-25'
category: symfony2
tags: ['php']
draft: false
---

After refactoring the structure and folders of javascript files included by the twig files, my phpunit tests started to fail and give unexplained 500 status messages. After a lot of fiddling around and trying to clear the cache using the "php app/console cache:clear --env=dev" command I found out that the cache wasn't beeing cleared properly.

After full removing everything in the app/cache folder through the filesystem, the template files were correctly reloaded.
