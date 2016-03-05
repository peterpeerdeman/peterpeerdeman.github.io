---
layout: post
title: "Looking into Meteor: our experiences with real-time web applications"
description: "Looking into Meteor: our experiences with real-time web applications"
category: technology
tags: [meteor, real-time, webapplications]
---
{% include JB/setup %}

I've had a couple of run-ins with [Meteor]() while it was in development. Several times I've given the framework a shot to see if their promises (developer delight, fraction of development time needed plus scalable and robust real-time data) were met and ready for production. As of version 1.0, I think they are.

So I started listening to some podcasts ([Crater podcast](http://podcast.crater.io/) and [Meteor Interviews](http://www.meteorinterviews.com/) and visited some dutch [Meteor Meet-ups](www.meetup.com/Meteor-NL/). We got a chance to work with meteor for a big client project, so we decided to go for it.

## Reactive templates

In comparison with our previous experiences with angular, Blaze templates felt quite magical at the start. Where angular would present you with magical two-way binding, Meteor and Blaze would go one step further and even take care of updating the data when it was updated on the back-end. We have found that in the start, this magical data binding is quite delightful. In later stages of development, it simply means that you have to start understanding the magic and intervening with it when your templates become "too reactive".

## Kick start / Mash-up

The case where Meteor is most suitable for me, is the "kick start" or mash-up. Getting a functional web application running with the most important features is fast, and delivers business value early in the process. When the budget is low, or the time frame is short, Meteor provides an excellent shortcut to get something up and running quickly.

## Full stack isomorphic Javascript

Sharing a programming language and code between front- and back-end has been a very valuable experience for us. Meteor has reduced the gap between our front-end and back-end team by sharing the same programming language and being very tightly integrated. Cross-overs during development between the front-end and back-end expertises are more approachable than we've seen in other projects. The absence of a complicated build tool also helps less acquainted developers get to developing stuff quickly.

Sharing for instance helper methods and schema has been a great plus. Syncing models between back-end and front-end is always an issue, and is very solvable within Meteor. Stuff like i18n translation keys that are available in both front- and back-end is a great relief as well.

## Scaling

Even in the longer term, Meteor holds up quite well when scaling up concurrent users. We have solved most problems by optimizing / minimizing the amount of subscriptions on active data and throwing in more application instances when the app gets more widely used.

The hardest part is dealing with flash crowds, e.g. when sending out newsletters or getting featured and getting a lot of users at the same time. For the pages that are publicly available and heavily visited by non-users, we have switched to retrieving data through cached REST requests instead of DDP, and reserve the precious, non cachable active web socket connections for the heart of the application.

## Conclusion

Even though Meteor is most suited for quick kick starts, we are not ruling out Meteor for medium sized and heavier projects. With recent developments in Meteor 1.3 in code structure and solidifying the testing story, to the Galaxy platform and hosted solutions such as modulus.io that allow you to scale more easily Meteor is an interesting way of developing applications in full stack Javascript.
