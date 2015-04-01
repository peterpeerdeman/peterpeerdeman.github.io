---
layout: post
title: "Force cache miss on Javascript / CSS assets after deploy with grunt-replace"
category: devops
tags: [devops, angular, grunt]
---
{% include JB/setup %}

After deploying our AngularJS / Symfony2 application we found that the user's browser would load cached assets from the previous deployment. The user would have to empty the cache / perform a hard refresh before the new version would be shown. 

By adding a timestamp to the url of the application Javascript / CSS assets, we can ensure that a "cache miss" will occur (because the url has changed) while we still maintain the advantage of caching the resources.

To do this we used [grunt-replace](https://github.com/outaTiME/grunt-replace) to replace a placeholder value (`@@TIMESTAMP@@`) in the html file with a timestamp during the build of our frontend assets.

{% highlight js %}

grunt.initConfig({
    replace : {
        cache_bust: {
            src: ['src/index.html'],
            dest: 'build/',
            replacements: [{
                from: '@@TIMESTAMP@@',
                to: function (matchedWord) {
                    return new Date().getTime();
                }
            }]
        }
    }
});
{% endhighlight %}

The snippet from `index.html` where the assets are loaded would unsurprisingly look something like:

{% highlight html %}
<head>
    <!-- Load document styling -->
    <link rel="stylesheet" type="text/css" href="/css/vendor.css?v=@@TIMESTAMP@@">
    <link rel="stylesheet" type="text/css" href="/css/f.css?v=@@TIMESTAMP@@">
    <script type="text/javascript" src="/js/vendor.js?v=@@TIMESTAMP@@"></script>
    <script type="text/javascript" src="/js/f.js?v=@@TIMESTAMP@@"></script>
</head>
{% endhighlight %}

