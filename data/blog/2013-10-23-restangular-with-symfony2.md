---
title: Restangular and validations while POST'ing to Symfony2
date: '2013-10-23'
category: symfony2
tags: ['php']
draft: false
---

After struggling for a couple of hours I found out why my Restangular POST call to our Symphony2 backend were not working. Symfony2 expects resources to wrapped with an entity object while sending a POST or PUT.

```javascript
{
    "customer" {
        "name":"test",
        "number" "a001"
    }
}
```

I found this out by rendering a form as per [Symfony's tutorial](http://symfony.com/doc/current/book/forms.html) and watching how the POST was constructed.

By default, restangular always PUTs objects without wrapping. If you request a single object through a GET with an id, Restangular uses the 'id' field in all subsequent requests such as posts or puts. This means that if you would wrap the customer object in the single resource GET request, restangular will not find the id.

I solved this dillema by making the backend return a non wrapped resource so the id is parsed correctly and using a requestInterceptor to wrap the outgoing POST / PUT request with the object name:

```javascript
RestangularProvider.setRequestInterceptor(function (elem, operation, what) {
    if (operation === 'post' || operation === 'put') {
        var wrapper = {};
        var singularizedResourceName = what.substring(0, what.length - 1);
        wrapper[singularizedResourceName] = elem;
        return wrapper;
    }
    return elem;
});
```

credits for this solution go to the [issue](https://github.com/mgonto/restangular/issues/109) raised and closed on github.
