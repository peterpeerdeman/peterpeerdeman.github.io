---
layout: post
title: "exception in queued task error unknown id for changed after meteor upgrade 1.4"
description: ""
category: 
tags: []
---
{% include JB/setup %}

```
I20160817-13:28:05.847(2)? Exception in queued task: Error: Unknown id for changed: AzNZo2diKZyDicsRX
I20160817-13:28:05.848(2)?     at self.applyChange.changed (packages/minimongo/observe.js:65:1)
I20160817-13:28:05.848(2)?     at packages/mongo/observe_multiplex.js:183:30
I20160817-13:28:05.848(2)?     at Array.forEach (native)
I20160817-13:28:05.848(2)?     at Function._.each._.forEach (packages/underscore/underscore.js:105:1)
I20160817-13:28:05.849(2)?     at Object.task (packages/mongo/observe_multiplex.js:177:9)
I20160817-13:28:05.849(2)?     at [object Object]._.extend._run (packages/meteor/fiber_helpers.js:147:1)
I20160817-13:28:05.849(2)?     at packages/meteor/fiber_helpers.js:125:1
```

upgrade database to wiredtiger, from mongo 2.6 to mongo 3.2.8
