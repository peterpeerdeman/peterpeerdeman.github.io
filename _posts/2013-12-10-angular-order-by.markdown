---
layout: post
title:  "Angular orderBy in object"
date:   2013-12-10 16:46:42
categories: angular
tags: [angular, sorting]
---
So apparently, orderBy only works on arrays. To properly sort objects, use following filter

```js
app.filter('orderObjectBy', function(){
 return function(input, attribute, reverse) {
    if (!angular.isObject(input)) return input;

    var array = [];
    for(var i=0; i<input.length;i++) {
        array.push(input[i]);
    }

    array.sort(function(a, b){
        a = parseInt(a[attribute]);
        b = parseInt(b[attribute]);
        if(reverse) {
        return b - a;
        } else {
            return a - b;
        }
    });
    return array;
 }
});
```

{% include JB/setup %}