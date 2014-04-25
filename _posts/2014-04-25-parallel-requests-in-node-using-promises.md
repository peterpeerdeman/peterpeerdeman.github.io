---
layout: post
title: "Parallel requests in node using promises"
description: "While developing my first node applications I rediscovered the power of promises in javascript. In one recent project I built a proxy application that aggregates some data from different resources, bundles it and serves it in one single json to the frontend."
category: node
tags: [q, promises, proxy, javascript]
---

While developing my first node applications I rediscovered the power of promises in javascript. In one recent project I built a proxy application that aggregates some data from different resources, bundles it and serves it in one single json to the frontend. 

Using the q library for promises, the following snippet fetches multiple urls simultaneously and builds the response when all calls are finished.

{% highlight javascript %}

var q = require('q');
var request = require('request');

exports.get = function(req, res){
    var promises = [
        getUrl('http://example.com/api/feed'),
        getUrl('http://differentexample.com/api/feed')
    ];
    q.allSettled(promises)
    .then(function(results) {
        var body = []
        results.forEach(function(result) {
            if (result.state === 'fulfilled') {
                //promise was resolved, push the data
                var item = result.value;
                body.push({
                    'data': item.data,
                    'statuscode' : 200
                });
            } else {
                //promise was rejected, push the statuscode
                body.push({
                    'statuscode': result.reason.statusCode,
                });
            };
        })
        res.send(body);
    });
}

function getUrl(url) {
    var deferred = q.defer(); 
    request.get(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body);
            deferred.resolve(result);
        } else {
            deferred.reject(response);
        }
    })
    return deferred.promise;
}

{% endhighlight %}

The fun part of implementing promises is shown in the ```getUrl``` method, where I demonstrate how to create a promise yourself using the q library. You can make any function asynchronous by first declaring the deferred object, doing some stuff that might take a while and then immediately returning the deferred's promise.

{% include JB/setup %}
