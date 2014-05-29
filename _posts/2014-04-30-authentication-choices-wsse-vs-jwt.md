---
layout: post
title: "Authentication choices: WSSE vs JWT"
description: ""
category: symfony2
tags: [wsse, jwt, authentication]
---

In order to keep our application's backend API RESTful and stateless and securing it in a proper way I've been looking into some authentication methods. The API in question was written with PHP Symfony2. My prerequisites for the authentication were for it to be token based, stateless (no sessions), preferably as little passwords over the wire as possible. After some research I found basic authentication, WSSE and JWT to be the most likely candidates for this use case and after some experiments and weighing pros and cons I decided to stick with JWT.

Basic authentication

* pros
    * simple to implement
    * very easy integration
* cons
    * unencrypted password over the wire on every request
    * client side storage of unencrypted passwords

WSSE

* pros
    * repudiation
    * no password over the wire
* cons
    * old school (soap legacy stuff)
    * need access to salt on client side
    * heavy hashing on clientside (5000 sha512 in symfony)

JWT

* pros
    * modern
    * easy integration
    * well maintained packages available for all platforms
* cons
    * replay vulnerable
    * password over the wire

In Symfony2's documentation WSSE was described as the preferred way to do secure authentication. [WSSE](http://en.wikipedia.org/wiki/WS-Security) is an authentication method in which the client generates a token for every request based on a random nonce, a timestamp and the user's secret. While implementing WSSE using the [Symfony2 custom authenticator guide](http://symfony.com/doc/master/cookbook/security/custom_authentication_provider.html) I found out the default password encryption in Symfony2 hashes the user password with the salt 5000 times. This means that the client has to know the salt ánd has to hash the password and salt 5000 times on each request. Even though I found some [resources online](http://obtao.com/blog/2013/09/how-to-use-wsse-in-android-app/) explaining how they have exposed the salt using a public API These 2 issues felt as too much of a hassle so I decided to move on.

Implementing JWT for Symfony2 was a breeze using the [Lexik JWT AuthenticationBundle](https://github.com/lexik/LexikJWTAuthenticationBundle). After locking down the API and configuring the firewall, we used the examples from ["Cookies vs Tokens. Getting auth right with Angular.JS"](https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/) to acquire the token in our AngularJS application and supply it with each request. One thing to note is that the JWT token is not repudiable. For our case this was no problem but if this is something you are worried about, stateless tokens might not be the right solution for you.

{% include JB/setup %}
