---
layout: post
title: 'Creating router independant blaze components for Meteor'
description: 'Creating router independant blaze components for Meteor'
category: meteor
tags: [meteor, javascript, blaze]
---

After Meteor allowed us to create [template level subscriptions](https://www.discovermeteor.com/blog/template-level-subscriptions/) we decided to decouple our blaze components from the router. By parsing the params on router level and passing in the parameters to the component templates as data context, the components become responsible for loading their required data instead of the router. Take a look at this snippet of iron router route:

{% highlight javascript %}
//routes.js

Router.route('/profile/:\_id', {
name: 'profile',
where: 'client',
yieldRegions: {
'app_profile': {to: 'app'},
},
data: function() {
return {
profileId: this.params.\_id
};
}
});
{% endhighlight %}

Here we can see we define a route and a parameter `_id`, which we add as data context to the template region that we render here (check [this post](http://stackoverflow.com/questions/22585645/yield-templates-with-meteor-and-iron-router) for more information on region rendering). The `app_profile` javascript looks like this:

{% highlight javascript %}
//app_profile.js

Template.app_profile.onCreated(function() {
var tpl = this;
var profileId = Template.currentData().profileId;

    tpl.subscribe('profiles.one', profileId);

});
{% endhighlight %}

We retrieve the profile id from the current data that was passed in the route configuration and subscribe to a subscription using this id. Because we use template level subscriptions, the subscription will automatically be unsubscribed once this template is destroyed.

We have now created an app_profile component that could run anywhere in the application and only needs a profileId to be initialized, independent of the router that collects the parameters.
