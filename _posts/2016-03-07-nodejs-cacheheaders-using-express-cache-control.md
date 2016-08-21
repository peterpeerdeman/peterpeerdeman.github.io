---
layout: post
title: "NodeJS cacheheaders using express-cache-control"
description: "NodeJS cacheheaders using express-cache-control"
category: node
tags: [node]
---
{% include JB/setup %}

In one of our NodeJS backend projects we used a nice little module called "[express-cache-control](https://github.com/idottv/express-cache-control/blob/master/cache.js)" that calculates the number of cache seconds for you and sets the cache header on a request accordingly:

{% highlight javascript %}
// express-cache-control.js
"use strict";

module.exports = function() {

    let units = {};
    units.second = 1;
    units.minute = units.second * 60;
    units.hour = units.minute * 60;
    units.day = units.hour * 24;
    units.week = units.day * 7;
    units.month = units.day * 30;
    units.year = units.day * 365;

    function calculateMaxAge(unit, value) {
        if (unit === 0 || value === 0 || unit === false) return 0;

        var unitValue = units[unit];

        if (! unitValue) throw new Error("CacheControl unknown unit " + unit);

        if (! value) value = 1;

        return unitValue * value;
    };

    return function(unit, value) {
        return function(request, response, next) {
            let cacheSeconds = calculateMaxAge(unit, value);

            if (cacheSeconds === 0) {
                response.setHeader('Cache-Control', 'no-cache');
            } else {
                response.setHeader('Cache-Control', 'public, max-age=' + cacheSeconds, ' + mustRevalidateKey');
            }

            next();
        };
    };

};

{% endhighlight %}

This snippet can then be used to set the cacheheader on certain pieces of express routes with clear english time unit description:

{% highlight javascript %}
var CacheControl = require("express-cache-control")

app.get('/api/bundles', CacheControl('second', 3), function(request, response) {
    // handle request that is cached for 3 seconds
}
{% endhighlight %}
