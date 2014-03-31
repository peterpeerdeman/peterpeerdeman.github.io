---
layout: post
title:  "Restangular and POST'ing / PUT'ing to symfony2"
date:   2013-10-22 
categories: symfony2
tags: [symfony2, angular, rest]
---

Symfony expects resources to be POST'ed / PUT'ed wrapped in their entity name to identify which entity to use:

<!--more-->

{% highlight javascript %}
{
    "customer" {
        "name":"test",
        "number" "a001" 
    }
}
{% endhighlight %}

by default, restangular always puts the object without wrapping. If you request a single object through a GET with an id, restangular uses the 'id' field in all subsequent requests such as posts or puts. This means that if you would wrap the customer object in the single resource GET request, restangular will not find the id.

I solved this dillema by making the backend return a non wrapped resource so the id is parsed correctly and using a requestInterceptor to wrap the outgoing POST / PUT request with the object name:

{% highlight javascript %}
RestangularProvider.setRequestInterceptor(function(elem, operation, what) {
        if (operation === 'post' || operation === 'put') {
          var wrapper = {};
          var singularizedResourceName = what.substring(0, what.length -1)
          wrapper[singularizedResourceName] = elem; 
          return wrapper;
        }
        return elem;
    });
{% endhighlight %}

credits go to the [issue](https://github.com/mgonto/restangular/issues/109) raised and closed on github 

{% include JB/setup %}