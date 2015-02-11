---
layout: post
title:  "Angular orderBy in object"
categories: angular
tags: [angular, sorting]
---
So apparently, orderBy only works on arrays. If you want to sort an object, you can use the following filter which transforms the object into an array and sorts it.

<!--more-->

{% highlight js %}
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
{% endhighlight %}

{% include JB/setup %}