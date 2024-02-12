---
title: 'Analyzing HTTPS traffic on android mobile apps using Charles proxy'
date: '2016-04-10'
category: android
tags: ['mobile']
draft: false
---

While trying to reverse engineer some https calls being made from an android app I remembered a tool in the Kali security toolkit that setup a "man-in-the-middle" attack for https traffic using arpspoofing. Since we control the android phone in question, we don't have to perform any arpspoofing but we can just configure our workstation as a proxy, manually trust our own SSL certificate, decrypt the traffic and send it through to the original server using the original SSL certificate without the original server ever knowing about it.

## setup Charles and get the home made SSL certificate

1. Install the Charles proxy https://www.Charlesproxy.com
2. Check your network ip address using `ifconfig` or equivalent, and ensure your firewalls are turned off
3. Start Charles, and go to proxy / ssl proxy settings
4. add host `*` and port `443`
5. Export the Charles root certificate through `help / SSL Proxying / Export Charles Root Certificate`

## trust the home made SSL certificate on android device

1. go to the directory you exported the certificate to
2. run a tool such as `http-server` on mac to host a file-server
3. use android device to go to the webserver
4. install and trust the certificate on android device

## configure proxy on android device

1. on the android device, go to wifi connection / modify network
2. go to advanced options
3. configure "proxy manual"
4. fill hostname with workstation ip address
5. fill port 8888

you can now start Charles and watch the decrypted SSL traffic to debug or reverse engineer your application!
