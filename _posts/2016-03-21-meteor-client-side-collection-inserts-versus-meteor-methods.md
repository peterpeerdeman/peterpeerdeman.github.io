---
layout: post
title: "Meteor client side collection inserts versus meteor methods"
description: "Meteor client side collection inserts versus meteor methods"
category: meteor
tags: [meteor]
---
{% include JB/setup %}

Even though it is pretty handy and quick getting started in meteor to run client side insert methods in front-end code, we decided to step away from this paradigm completely

Imagine a blaze helper method, that inserts an activity in an activy:

{% highlight javascript %}
Template.addactivity.events({
  'submit .pu-addactivity': function (event) {
    Activities.insert({
      name: event.target.name.value,
      createdAt: new Date(),
      groupId: this._id
    });
  }
})
{% endhighlight %}

The createdAt value is decided from the front-end, and no check whatsoever is made as whether this date is correct, that a proper date is supplied or that the group this activity is added to even exists. We have experimented with authorization hooks to check basic behavior, but found that creating your own meteor methods to check the incoming parameters and all the edge cases is the way to go, and allows you to document your method in the process as well:

{% highlight javascript %}
Meteor.methods({
    /**
     * Insert an Activity
     *
     * @param {string} groupId
     * @param {mixed[]} fields
     */
    'activities.insert': function(groupId, fields) {
        check(groupId, String);
        check(fields, Partup.schemas.forms.startActivities);
        var user = Meteor.user();
        var group = Groups.findOneOrFail({_id: groupId});

        if (!group.hasMember(user._id)) throw new Meteor.Error(401, 'unauthorized');

        var id = Activities.insert(fields);

        return {
            _id: id
        };
    }
}
{% endhighlight %}
