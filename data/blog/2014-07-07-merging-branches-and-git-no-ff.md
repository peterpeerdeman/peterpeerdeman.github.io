---
date: '2014-07-07'
title: 'merging branches and git --no-ff'
category: git
tags: ['git']
draft: false
---

There is a lot of debate on the web about whether you should use `git merge branch` or `git merge branch --no-ff` when merging a branch. Personally, I tend to use git merge branch whenever this is possible to avoid merge commits cluttering the log. However, there is one case in which I always use the `--no-ff`: when integrating features to the development branch. Let me stress that again:

**please use git merge branch --no-ff when delivering your feature to the main development branch**

Even if you are the only one committing, you get a tidy grouping of commits that belong to the merged feature branch. This greatly simplifies reading back the development branch and seeing which features were added when, which is great for writing changelogs and feature lists.
