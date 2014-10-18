---
layout: post
title: "Small featurebranches and the empty develop branch syndrome"
description: ""
category: git
tags: [git]
---

Whhen using a proper git flow and working with feature branches, you should force yourself to always think in smaller features, to promote rapid branching and merging. When working with the smallest possible feature branches which contain a single feature you avoid conflicts with teammates, often get the feeling of accomplishment when merging your feature and avoid the "empty develop branch" syndrome. 

The "empty develop branch syndrome" occurs when the team is working on a feature that turns out to larger than expected. Meanwhile the develop branch is abandoned, the unit tests are not being run for the develop branch and the staging envrionment does not get automatically deployed to. We could ofcourse configure the feature branches to get the same continuous treatment but I'd rather see smaller features get integrated into the main development branch more often.

{% include JB/setup %}
