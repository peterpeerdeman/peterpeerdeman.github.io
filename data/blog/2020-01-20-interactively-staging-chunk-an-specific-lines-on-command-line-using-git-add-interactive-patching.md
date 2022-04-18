---
title: Interactively staging chunks and specific lines on command line using git add interactive patching
date: '2020-01-20'
tags: ['git']
draft: false
---

As I'm trying to become less dependant on (otherwise excellent) visual git tools such as [sourcetree](https://www.sourcetreeapp.com/) or [fork](https://git-fork.com/) to work easily from within server environments, I ventured into the world of git commit crafting within the command line.

The most exciting command I stumbled upon is the `git add --interactive` feature that enters a quite daunting menu showing you which files are staged and unstaged and what you want to do with them. Using the `patch` command here you can mark the files you want to (partially) stage for a commit. After marking the files, hit enter again to enter into the chunk based staging questions.

Here you can slam the `y` key to stage the whole hunk, use the `s` key to split the chunk in smaller chunks or go completely nuts and use the `e` key to edit the chunk by hand. I found the following blog very useful explaining the specifics of the chunk editing view: [nuclearsquid - git add --patch and --interactive](https://nuclearsquid.com/writings/git-add/).
