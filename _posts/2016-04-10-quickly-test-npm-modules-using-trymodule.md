---
layout: post
title: "quickly test npm modules using trymodule"
description: "quickly test npm modules using trymodule"
category: node
tags: [node, npm]
---
{% include JB/setup %}

Just a quick little tip: try npm installing [trymodule](https://github.com/VictorBjelkholm/trymodule). It is a fun little cli app that lets you quickly try out an npm module:

`npm install -g trymodule`

You can now use the following command to try out any npm module. Using the following command you are dropped in a node shell that has the chosen module exported in the current context:

`trymodule colors lodash`

![trymodule preview](https://github.com/VictorBjelkholm/trymodule/raw/master/preview.gif)
