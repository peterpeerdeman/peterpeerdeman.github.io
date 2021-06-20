---
date: '2015-07-01'
title: 'Part up: a Meteor Production Story, at the Meteor Meet-up hosted by Lifely'
category: meteor
tags: ['presentations', 'meteor']
draft: false
---

On the 1st of July 2015 [Lifely](http://lifely.nl) hosted the dutch [Meteor meetup](http://www.meetup.com/Meteor-NL/events/223096911/). I gave a presentation about our experiences during the "Part-up" project, a web-based startup product that we built in Meteor.

During the presentation I give some insights on how we weighed the pro's and con's while deciding to use Meteor for this project. After this I address 4 specific challenges we faced during development.

The slides and code can be found at [Part-up: a Meteor Production Story](http://hashbang.nl/partup-a-meteor-production-story/)

<iframe src="https://player.vimeo.com/video/134308969" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="https://vimeo.com/134308969">Part-up, MeteorJS - Peter Peerdeman</a> from <a href="https://vimeo.com/lifely">Lifely</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

### Teamwork -> Component directory structure

We made heavy use of components to split up the functionality of the web application. This allowed the team to work on isolated pieces of functionality without running into loads of merge conflicts while working in the same files. We documented all of the components API's so it would be clear for every team member how to use the re-usable blaze components and how to set each of the parameters.

This first snippet shows the top level of our application, with the packages folder containing all of the separate components and the `client-pages` packages containing all of the page templates that are used in the routing

    .. (up a dir)
    /Users/peter/development/partup/
    ▾ app/
    ▸ client/
    ▸ i18n/
    ▸ lib/
    ▾ packages/
        ▸ cfs:file/
        ▸ partup:client-activity/
        ▸ partup:client-base/
        ▸ partup:client-columns-layout/
        ▸ partup:client-commentfield/
        ▸ partup:client-contribution/
        ▸ partup:client-copy-to-clipboard/
        ▸ partup:client-dropdowns/
        ▸ partup:client-focuspoint/
        ▸ partup:client-forgotpassword/
        ▸ partup:client-gallery/
        ▸ partup:client-invite-to-partup/
        ▸ partup:client-loader/
        ▸ partup:client-location-autocomplete/
        ▸ partup:client-login/
        ▸ partup:client-network-settings/
        ▸ partup:client-pages/
        ▸ partup:client-partup-tile/
        ▸ partup:client-partupsettings/
        ▸ partup:client-popup/
        ▸ partup:client-rating/
        ▸ partup:client-ratings/
        ▸ partup:client-resetpassword/
        ▸ partup:client-spinner/
        ▸ partup:client-update/
        ▸ partup:client-usercard/
        ▸ partup:client-widget-spinner/
        ▸ partup:lib/
        ▸ partup:meteor-bender/
        ▸ partup:newrelic/
        ▸ partup:server-base/
        ▸ partup:server/
    ▸ private/
    ▸ public/
    ▸ server/
    ▸ tests/
    ▸ uploads/
        package.json
        scss.json
    ▸ backups/
    ▸ bin/
    ▸ config/
    ▸ devops/
    ▸ docs/
    CHANGELOG.md
    ERROR.md
    methods_documentation*
    README.md

This second snippet shows the directory structure of the Activity component.

    ▾ partup:client-activity/
        ▾ i18n/
            en.i18n.json
            nl.i18n.json
        ▾ templates/
            ActivityForm.html
            ActivityForm.js
            ActivityFormPlaceholders.js
            ActivityView.html
            ActivityView.js
        Activity.html
        Activity.js
        package-tap.i18n
        package.js

`Activity.js` is the entrypoint for the component, which also contains API documentation how to use the component:

{% highlight js %}
/\*\*
_ Widget to render a single activity
_
_ You can pass the widget a few options which enable various functionalities
_
_ @param {Object} activity The activity to render
_ @param {Function} createCallback A function which is executed after a new activity has been added
_ @param {String} contribution_id Contribution id to render, if only one should be rendered
_ @param {Boolean} COMMENTS*LINK Whether the widget should display the link to comments
* ...
\_/

    // snip

    /*************************************************************/
    /* Widget helpers */
    /*************************************************************/
    Template.Activity.helpers({
        showForm: function() {
            return !this.READONLY && (!!this.CREATE || Template.instance().edit.get());
        }
    });

    // snip

{% endhighlight %}

### Code reuse -> Lib package with namespaced functionality

To share common code between client and server in an organized fashion we used a lib package that registered a global namespace variable. This namespace is then used to store Javascript functions that are callable from both the front- and back end. We also created model and collection helpers for our entities that help us find certain documents in our collections and group re-usable business logic on the model.

The following snippet shows the directory structure of the lib package

    ▾ partup:lib/
        ▸ collections/
        ▸ helpers/
        ▸ private/
        ▸ schemas/
        ▸ services/
        ▸ startup/
        ▸ transformers/
        error.js
        namespace.js
        package.js

The functionality in the lib package would be defined in separate files adding functionality to the namespace object:

{% highlight js %}
/**
@namespace Tags helper service
@name Partup.services.tags
@memberOf partup.services
\*/
Partup.services.tags = {
/**
_ Transform a comma separated string into an array of tags
_
_ @memberOf services.tags
_ @param {String} tags_input
\*/
tagInputToArray: function(tags_input) {
if (!tags_input) return [];

        var _tags = tags_input.split(',');

        if (_tags.length === 0) return [];

        return _tags.map(function(elem) {
            return elem.trim();
        }).filter(function(elem) {
            return !!elem;
        });
    },
    // snip

}
{% endhighlight %}

The following snippet shows our use of collection helpers and specific model helpers that operate on the document instances

{% highlight js %}
/\*\*

-   Network model
    \*/
    var Network = function(document) {
    \_.extend(this, document);
    };

/\*\*

-   Leave network
-
-   @return {Boolean}
    \*/
    Network.prototype.leave = function(upperId) {
    Networks.update(this.\_id, {$pull: {uppers: upperId}});
    Meteor.users.update(upperId, {$pull: {networks: this.\_id}});
    };

/\*_
@namespace Networks
@name Networks
_/
Networks = new Mongo.Collection('networks', {
transform: function(document) {
return new Network(document);
}
});

/\*\*

-   Networks collection helpers
    \*/
    Networks.findByFilter = function(options) {
    var options = {
    // snip
    };
    var complicatedQuery = {
    // snip
    };
    return this.find(complicatedQuery, options);
    };
    {% endhighlight %}

### Micro service integration -> Event based meteor methods

To allow external micro services outside of the meteor system to hook into functionality from our main meteor application, we have introduced an event pattern. This pattern consists of emitting an event after each meteor method call, such as `partups.inserted` or `partups.updated`. The events are emitted with [EventEmitter2](https://github.com/asyncly/EventEmitter2) package and all include the details of the document that was inserted or updated. These events are broadcast both internally and externally.

The events would be triggered in a method as follows:

{% highlight js %}
Meteor.methods({
/\*\*
_ Archive an Activity
_
_ @param {string} activityId
_/
'activities.archive': function(activityId) {
var upper = Meteor.user();
var activity = Activities.findOneOrFail(activityId);

        if (!upper || activity.creator_id !== upper._id) {
            throw new Meteor.Error(401, 'Unauthorized.');
        }

        try {
            Activities.update(activityId, {$set: {archived: true}});

            Event.emit('partups.activities.archived', upper._id, activity);

            return {
                _id: activity._id
            };
        } catch (error) {
            Log.error(error);
            throw new Meteor.Error(500, 'Activity [' + activityId + '] could not be archived.');
        }
    }

});
{% endhighlight %}

Internally we use the events to trigger the creation of updates, notifications and emails, as seen in the following example:

{% highlight js %}
/\*\*

-   Generate a Partup update when an activity is archived
    \*/
    Event.on('partups.activities.archived', function(userId, activity) {
    if (!userId) return;
    if (!activity.update_id) return;

        var set = {
            upper_id: userId,
            type: 'partups_activities_archived',
            updated_at: new Date()
        };

        Updates.update({_id: activity.update_id}, {$set: set});

    });
    {% endhighlight %}

Externally the events are submitted to a message bus, such as [RabbitMQ](https://www.rabbitmq.com/), that allows outside systems to listen to the stream of events and react on updates in the system. For instance, the micro service containing the recommendation engine could use these events to build its recommendation graph and emit recommendation events on the message bus. These recommendation events can then be used by the meteor application to store recommendations on meteor collection documents and present these recommendations to the user.

### Scaling meteor -> modulus.io, compose.io and wercker

In our deployment setup we use [modulus.io](modulus.io) as an auto scaling application server, [compose.io](compose.io) as scalable MongoDB host and [wercker.com](wercker.com) as a continuous delivery platform to run unit tests and automatically deploy builds to acceptance environments.
