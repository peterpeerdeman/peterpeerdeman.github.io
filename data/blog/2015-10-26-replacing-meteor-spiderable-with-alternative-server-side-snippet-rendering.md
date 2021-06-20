---
date: '2015-10-26'
layout: post
title: 'Replacing meteor spiderable with alternative server side snippet rendering'
description: 'Replacing meteor spiderable with alternative server side snippet rendering'
category: meteor
tags: ['meteor']
draft: false
---

After getting fed up with meteor's spiderable spawning phantomjs instances all over the place when receiving a couple of concurrent requests for different resources we decided to switch to a different strategy to support spiders/crawlers.

Instead of using the spiderable package to fully render the application including all the logic and data in the blaze template we decided to serve alternative snippets for our SEO heavy content whenever google, facebook or another crawler hits the application server with specific user agent.

To achieve this we have used [the meteorhacks:picker package](https://github.com/meteorhacks/picker) along with [the meteorhacks:ssr package](https://github.com/meteorhacks/meteor-ssr) to handle each incoming request, detect the user agent and render a specific html snippet on the server when a crawler is detected.

The following piece of meteor backend code shows how to create a router that is activated triggered when the botagent or google's "unescaped fragment" query param is detected.

```javascript
var SeoRouter = Picker.filter(function (request, response) {
    var botAgents = [
        /^facebookexternalhit/i, // Facebook
        /^linkedinbot/i, // LinkedIn
        /^twitterbot/i, // Twitter
        /^slackbot-linkexpanding/i, // Slack
    ];

    var userAgent = request.headers['user-agent'];
    var botIsUsed = false;

    botAgents.forEach(function (botAgent) {
        if (botAgent.test(userAgent)) botIsUsed = true;
    });

    var escapedFragmentIsUsed = /_escaped_fragment_/.test(request.url);

    return escapedFragmentIsUsed || botIsUsed;
});
```

The `SeoRouter` can then be configured to match specific request urls. This example shows matching a profile url, retrieve a user profile and use the `SSR.compileTemplate` method to render the specified blaze template to an html string. Please note that the helpers used in this template should also be defined here.

```javascript
/\*\*

-   SEO Route for the Profile detail page
    \*/
    SeoRouter.route('/profile/:id', function(params, request, response) {
    var userId = params.id;
    var user = Meteor.users.findOne(userId);

        if (!user) {
            response.statusCode = 404;
            return response.end();
        }

        var image = Images.findOne(user.profile.image);

        SSR.compileTemplate('seo_profile', Assets.getText('private/templates/seo/profile.html'));

        Template.seo_profile.helpers({
            getProfileUrl: function() {
                return Meteor.absoluteUrl() + 'profile/' + user._id;
            },
            getImageUrl: function() {
                if (!image) return Meteor.absoluteUrl() + 'images/partup-logo.png';

                return image.url()
            }
        });

        var html = SSR.render('seo_profile', user);

        response.setHeader('Content-Type', 'text/html');
        response.end(html);

    });
```

The last example shows the actual html template, which is a stripped down html page containing just the SEO meta tags, a heading and a paragraph.

```html
<html lang="en">
    <head>
        <meta charset="utf-8" />

        <title>{{name}}</title>
        <meta name="description" content="{{profile.description}}" />
        <meta name="image" content="{{getImageUrl}}" />

        <meta property="og:title" content="{{profile.name}}" />
        <meta property="og:site_name" content="Part-up" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="{{getProfileUrl}}" />
        <meta property="og:description" content="{{profile.description}}" />
        <meta property="og:image" content="{{getImageUrl}}" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="Part-up" />
        <meta property="twitter:creator" content="@Partupcom" />
        <meta property="twitter:url" content="{{getProfileUrl}}" />
        <meta property="twitter:title" content="{{profile.name}}" />
        <meta property="twitter:description" content="{{profile.description}}" />
        <meta property="twitter:image" content="{{getImageUrl}}" />
    </head>

    <body>
        <h1>{{profile.name}}</h1>
        <p>{{profile.description}}</p>
        <img src="{{getImageUrl}}" alt="{{profile.name}}" />
    </body>
</html>
```

Please note that this method of search engine optimalization is called "[Cloaking](https://en.wikipedia.org/wiki/Cloaking)" and could be considered as "Black hat SEO" if the content you are serving in the snippet is completely different from the content you would be serving in the single page application. In our case it has proven to be a scalable and effective method of solving the seo problem in our meteor application.
