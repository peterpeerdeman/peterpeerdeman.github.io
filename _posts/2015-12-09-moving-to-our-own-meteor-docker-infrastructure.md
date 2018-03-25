---
layout: post
title: "Moving to our own Meteor Docker infrastructure"
category: presentations
tags: [meteor, docker]
---


After working with a meteor hosting provider for a while we decided to move our meteor applications to our own hosted environments. In this presentation I explain why and how we did this.

Why?

- application portability
- availability problems
- slow support response
- control over servers and expenses
- scalability and reproducability

How?

- Docker
- Jenkins
- DigitalOcean

Disadvantages?

- Ops experience required
- Plenty of alternatives (modulus, scalingo, galaxy)
- Image building lengthens deploy loop cycle
- Own loadbalancing required when scaling

Advantages

- Hassle free instance creation
- Full control over servers/ instances
- Portability of application
- Cheaper than hosted alternatives

The slides and materials can be found on [github](http://peterpeerdeman.github.io/moving-to-our-own-meteor-docker-infrastructure)

This talk was given on 09-12-2015 at the ["Migrating to Meteor meetup", hosted by Lifely in Amsterdam](http://www.meetup.com/Meteor-NL/events/226833769/)
