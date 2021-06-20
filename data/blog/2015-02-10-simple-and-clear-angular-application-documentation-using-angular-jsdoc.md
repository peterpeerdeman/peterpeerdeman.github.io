---
layout: post
title: 'Simple and clear Angular application documentation using angular-jsdoc'
category: angular
tags: [documentation, angular, javascript]
---

While looking for a good way to document our AngularJS codebase I stumbled upon the ["Sigh, AngularJS Documentation"](http://allenhwkim.tumblr.com/post/92161523693/sigh-angularjs-documentation) by Allan Kim. His quest for simple Angular documentation ended in the creation of [angular-jsdoc](https://github.com/allenhwkim/angular-jsdoc), his own Angular Template for JSDoc. I completely agree with his decision and found his template to be perfectly suited for our goals (using common js doc blocks, no server for browsing documentation).

Using the template is incredibly easy and only requires you to add a single `@ngdoc` attribute in your JSDoc to group the angular files together:

{% highlight js%}
/\*\*

-   @ngdoc factory
-   @name Auth
-   @description
-   Handles application authentication and authorization.
    \*/
    app.factory('Auth', function(Restangular, $q) {
    var Auth = {};

        /**
        * check if the user is authenticated.
        * @memberof Auth
        * @returns {Promise} session details
        */
        Auth.check = function() {
            //code
        }

        return Auth;

    })
    {% endhighlight %}

We document every exposed function in a module with regular JSDoc blocks. In this example we specify that the function belongs to the `Auth` module using the `@memberof` attribute.

To generate the docs automatically with each build I used [grunt-jsdoc](https://github.com/krampstudio/grunt-jsdoc) with the following configuration:

{% highlight js%}
grunt.initConfig({
jsdoc : {
dist: {
src: [
'src/scripts/app/**/*.js',
'FRONTEND-GUIDE.md'
],
options: {
destination: '../docs/client-jsdocs',
configure: 'node_modules/angular-jsdoc/conf.json',
template: 'node_modules/angular-jsdoc/template'
}
}
}
});
{% endhighlight%}

Running the grunt jsdoc task generates the simple, basic and clear html documentation:

![jsdoc screenshot]({{ site.url }}/assets/images/2015-02-10-jsdoc-01.png)

As an added bonus in addition to all the docblocks defined in the javascript files of our project, the markdown frontend guide we've created will automatically be rendered as the intro page as well.
