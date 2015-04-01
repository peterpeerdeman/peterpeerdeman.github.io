---
layout: post
title: "protect meteor routes and forward to login with iron router"
description: ""
category: 
tags: []
---
{% include JB/setup %}

{% highlight js %}
/*************************************************************/
/* Routing */
/*************************************************************/
Router.route('/start', {
    name: 'start',
    where: 'client',
    layoutTemplate: 'LayoutsMain',
    yieldRegions: {
        'PagesModal': { to: 'page' },
        'PagesStartPartupIntro': { to: 'modal-page' }
    }
});

/*************************************************************/
/* Route protection */
/*************************************************************/

var partupRouterHooks = {
    loginRequired: function() {
        if (!Meteor.userId()) {
            Router.go('login');
        }
        else {
            this.next();
        }
    }
}

Router.onBeforeAction(partupRouterHooks.loginRequired, {
    only: [
        'start',
        'start-details',
        'start-activities',
        'start-contribute',
        'start-promote',
        'register-details',
    ]
});

{% endhighlight %}

[Tong Du's comment on login Manuel Schoebel's blog](http://www.manuel-schoebel.com/blog/login-required-for-an-url-done-right#comment-1703568960)