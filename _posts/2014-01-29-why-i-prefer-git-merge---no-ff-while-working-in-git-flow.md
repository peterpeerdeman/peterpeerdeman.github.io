---
layout: post
title: "Small featurebranches and git merge --no-ff"
description: ""
category: 
tags: []
---

By doing your feature merges to the develop branch with --no-ff, you ensure proper history and visibly group the commits that belong to a feature together.

I believe that when using a proper git flow and working with feature branches, you should force yourself to think in smaller features each time you create and merge a branch. When thinking in the smallest possible but still complete featurebranch you avoid conflicts with teammates, get a feeling of accomplishment and avoid the "empty develop branch" syndrome. 

The empty develop branch syndrome occurs when the team is working on a feature that turns out to be far too big. Meanwhile the develop branch is abandoned, the unit tests are not being run for this branch and the staging envrionment does not get automatically deployed to.

{% include JB/setup %}
