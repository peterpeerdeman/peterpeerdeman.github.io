---
layout: post
title:  "Moving uncommitted changes to different branch"
date:   2013-11-21 
categories: devops
tags: [git]
---

Sometimes, you are working in a branch and find yourself working on something that should be committed to a different branch, or even a new branch. In this case I use "git stash" to put the current changes away temporarily, switch to the branch I want the changes to be in and run "git stash pop".

If you have created new files during your modifications, be sure to first git add these changes before stashing to make sure they are transferred as well.

{% include JB/setup %}