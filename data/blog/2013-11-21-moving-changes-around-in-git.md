---
title: 'Moving changes around in git'
date: '2013-11-21'
category: devops
tags: ['git']
draft: false
---

Sometimes, you are working in a branch and find yourself working on something that should be committed to a different branch or a new branch. Sometimes I even find I've got pending changes that belong in several different branches. In this case I use "git stash" to put the current changes away temporarily.

Now the working directory is clean and I can switch to any other branch, create new branches, even pull some recent changes from an origin. When I'm ready, I run `git stash pop` to re-apply my pending changes over the current branch and commit the parts that belong to this branch. I repeat the proces until all my changes are committed.

Bonus tip: If you have created some new files during your modifications, be sure to first git add these changes before stashing to make sure they are taken along the ride as well.
