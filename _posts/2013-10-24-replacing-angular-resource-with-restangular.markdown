---
layout: post
title:  "Replacing angular $resource with restangular"
categories: angular
tags: [angular, restangular]
---

Due to the lack of configurability of the angular $resource I decided to replace it with restangular, a highly configurable alternative for REST consuming from an angular application.

My main reasons to switch were:

* $resource doesn't handle sub resources
* $resource requires full url in each object
* $resource doesn't support all REST methods
* Restangular creates reusable base objects that can be used multiple times for retrieving, posting and digging deeper into the url.
* Restangular allows you to preconfigure all REST calls, for instance wrapping or unwrapping requests and prefixing the url with customizable variables.

I really hope that the extra features and configurability of Restangular get replicated / merged into Angulars resource library! 

By the way, I've given a talk about this topic during the Javascript MVC Meetup in Amsterdam on the 5th of August 2013 called [Consuming RESTful Resources with AngularJS](http://peterpeerdeman.github.io/consuming-restful-resources-with-angularjs/). Please see the slides for more details and examples of $resource vs Restangular

{% include JB/setup %}