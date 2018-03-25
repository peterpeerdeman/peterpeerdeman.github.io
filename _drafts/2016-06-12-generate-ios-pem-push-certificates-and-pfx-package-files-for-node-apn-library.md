---
layout: post
title: "generate iOS pem push certificates and pfx package files for node apn library"
description: ""
category: 
tags: []
---


- follow guide https://www.raywenderlich.com/123862/push-notifications-tutorial
    - create keys through app id preferences screen in developer.apple.com
    - export certificate and keys to .p12 from keychain
    - `openssl pkcs12 -in PartupPushProdKeys.p12 -out PartupPushProdKeys.pem -nodes -clcerts`
    - `openssl pkcs12 -in PartupPushDevKeys.p12 -out PartupPushDevKeys.pem -nodes -clcerts`
- prepare .pem certificates https://github.com/argon/node-apn/wiki/Preparing-Certificates
    - `openssl x509 -in aps.cer -inform DER -outform PEM -out PartupPushProduction.pem`
    - `openssl x509 -in aps_development.cer -inform DER -outform PEM -out PartupPushDev.pem`
    - test with `openssl s_client -connect gateway.push.apple.com:2195 -cert PartupPushProd.pem -key PartupPushProdKeys.pem`
- creating pfx package http://stackoverflow.com/questions/6307886/how-to-create-pfx-file-from-certificate-cer-pem-crt-and-private-key
    - `openssl pkcs12 -export -out partuppushprod.pfx -in PartupPushProd.pem -inkey PartupPushProdKeys.pem`
    - `openssl pkcs12 -export -out partuppushdev.pfx -in PartupPushDev.pem -inkey PartupPushDevKeys.pem`
- base64 pfx package for use in env vars:
    - `cat partuppushprod.pfx | base64 > partuppushprod.pfx.txt`
    - `cat partuppushdev.pfx | base64 > partuppushdev.pfx.txt`
