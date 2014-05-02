---
layout: post
title: "Authentication choices: WSSE vs JWT"
description: ""
category: symfony2
tags: [wsse, jwt, authentication]
---

In order to keep our application's backend API RESTful and stateless and securing it in a proper way I've been looking into some authentication methods. The API in question was written with PHP Symfony2. My prerequisites for the authentication were for it to be token based, stateless so no sessions, preferably as little passwords over the wire as possible. After some research I found basic authentication, WSSE and JWT to be the most likely candidates for this use case and after some experiments I stuck with JWT.

In Symfony2's documentation WSSE was described as the preferred way to do secure authentication. (WSSE)[] is an authentication method in which the client generates a token for every request based on a random nonce, a timestamp and th user's secret. .. While implementing JSSE using the (Symfony2 custom authenticator guide)[]

Basic authentication
+simple to implement
+very easy integration
-unencrypted password over the wire on every request
-client side storage of unencrypted passwords

WSSE
+repudiation
+no password over the wire
-old school (soap)
-need access to salt on client side
-heavy hashing on clientside (5000 sha512 in symfony)

JWT
+modern
-replay vulnerable
-password over the wire

{% include JB/setup %}
