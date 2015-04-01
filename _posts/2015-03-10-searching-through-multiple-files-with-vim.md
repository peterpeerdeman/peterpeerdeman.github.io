---
layout: post
title: "searching through multiple files with vim"
category: development
tags: [development, vim, editor]
---
{% include JB/setup %}

Just as a reminder to myself and to everyone looking for a short and easy answer:

`:vimgrep <searchterm> **/*.<fileextension>` 

- e.g. `:vimgrep TIMESTAMP *.*` to find the word TIMESTAMP in any file in the current directory
- e.g. `:vimgrep /\v\d{5}/g **/*.md` to recursively find all 5 number strings in any markdown file in the current project
- `:cn` for next and `:cp` for previous hit
- install [vim-unimpaired](https://github.com/tpope/vim-unimpaired) for access to shortkeys `[q` and `]q` for jumping through hits
