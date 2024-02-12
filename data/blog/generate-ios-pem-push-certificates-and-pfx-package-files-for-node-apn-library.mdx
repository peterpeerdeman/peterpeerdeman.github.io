---
title: 'generate iOS pem push certificates and pfx package files for node apn library'
date: '2016-06-12'
tags: ['mobile', 'node']
draft: false
---

As a future reference to myself, this is how we transformed iOS pem certificates into PFX packages for use with nodes apn library

1. Use this guide by [Ray Wnederlich](https://www.raywenderlich.com/123862/push-notifications-tutorial) to create the push certificates
    - create keys through app id preferences screen in [https://developer.apple.com](https://developer.apple.com) interface.
    - export certificate and keys to `.p12` from keychain using following commands
        - `openssl pkcs12 -in PushProdKeys.p12 -out PushProdKeys.pem -nodes -clcerts`
        - `openssl pkcs12 -in PushDevKeys.p12 -out PushDevKeys.pem -nodes -clcerts`
2. Test the prod certificates with `openssl s_client -connect gateway.push.apple.com:2195 -cert PushProd.pem -key PushProdKeys.pem`
3. Prepare `.pem` certificates using the guide at [node-apn github](https://github.com/argon/node-apn/wiki/Preparing-Certificates)
    - `openssl x509 -in aps.cer -inform DER -outform PEM -out PushProduction.pem`
    - `openssl x509 -in aps_development.cer -inform DER -outform PEM -out PushDev.pem`
4. Create pfx package by following this guide on [stackoverflow](http://stackoverflow.com/questions/6307886/how-to-create-pfx-file-from-certificate-cer-pem-crt-and-private-key)
    - `openssl pkcs12 -export -out pushprod.pfx -in PushProd.pem -inkey PushProdKeys.pem`
    - `openssl pkcs12 -export -out pushdev.pfx -in PushDev.pem -inkey PushDevKeys.pem`
5. Create base64 pfx package for use in env vars:
    - `cat pushprod.pfx | base64 > pushprod.pfx.txt`
    - `cat pushdev.pfx | base64 > pushdev.pfx.txt`
