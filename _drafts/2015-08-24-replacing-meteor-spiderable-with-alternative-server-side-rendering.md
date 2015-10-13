---
layout: post
title: "Replacing meteor spiderable with alternative server side rendering"
description: "Replacing meteor spiderable with alternative server side rendering"
category: meteor
tags: [meteor, javascript]
---
{% include JB/setup %}

After getting fed up with meteor's spiderable spawning phantomjs instances all over the place when receiving a couple of concurrent requests for different resources we decided to switch to a different strategy to support spiders/crawlers.

Instead of using the spiderable package to fully render the application including all the logic and data in the blaze template we decided to serve alternative snippets for our SEO heavy content whenever google, facebook or another crawler hits the application server.

To achieve this we have used [the meteorhacks:picker package](https://github.com/meteorhacks/picker) along with [the meteorhacks:ssr package](https://github.com/meteorhacks/meteor-ssr)

{% highlight javascript %}
var SeoRouter = Picker.filter(function(request, response) {
    // TODO: Add more checks to see if we should render a snippet

    var botAgents = [
        /^facebookexternalhit/i, // Facebook
        /^linkedinbot/i, // LinkedIn
        /^twitterbot/i, // Twitter
        /^slackbot-linkexpanding/i // Slack
    ];

    var userAgent = request.headers['user-agent'];
    var botIsUsed = false;

    botAgents.forEach(function(botAgent) {
        if (botAgent.test(userAgent)) botIsUsed = true;
    });

    var escapedFragmentIsUsed = /_escaped_fragment_/.test(request.url);

    return escapedFragmentIsUsed || botIsUsed;
});
{% endhighlight %}

{% highlight javascript %}
/**
 * SEO Route for the Profile detail page
 */
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

            var url = image.url().substr(1);

            return Meteor.absoluteUrl() + encodeURIComponent(url).replace(/%2F/g, '/');
        }
    });

    var html = SSR.render('seo_profile', user);

    response.setHeader('Content-Type', 'text/html');
    response.end(html);
});
{% endhighlight %}

{% highlight html %}
{% raw %}
<html lang="en">
    <head>
        <meta charset="utf-8">

        <title>{{name}}</title>
        <meta name="description" content="{{profile.description}}">
        <meta name="image" content="{{getImageUrl}}">

        <meta property="og:title" content="{{profile.name}}">
        <meta property="og:site_name" content="Part-up">
        <meta property="og:type" content="article">
        <meta property="og:url" content="{{getProfileUrl}}">
        <meta property="og:description" content="{{profile.description}}">
        <meta property="og:image" content="{{getImageUrl}}">

        <meta property="twitter:card" content="summary">
        <meta property="twitter:site" content="Part-up">
        <meta property="twitter:creator" content="@Partupcom">
        <meta property="twitter:url" content="{{getProfileUrl}}">
        <meta property="twitter:title" content="{{profile.name}}">
        <meta property="twitter:description" content="{{profile.description}}">
        <meta property="twitter:image" content="{{getImageUrl}}">
    </head>

    <body>
        <h1>{{profile.name}}</h1>
        <p>{{profile.description}}</p>
        <img src="{{getImageUrl}}" alt="{{profile.name}}">
    </body>
</html>
{% endraw %}
{% endhighlight %}
