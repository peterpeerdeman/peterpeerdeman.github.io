---
date: '2014-03-23'
title: 'Flash HTC-One to Google Play edition'
category: android
tags: ['mobile']
draft: false
---

After an exciting day of fiddling with roms for HTC one I was able to get rid of the HTC sense rom and create a clean Google Play device running the latest version of Android (4.4.2 as time of speaking) which also receives OTA (over the air) updates when Google releases a new version.

An interesting details is that I was able perform this feat using mac osx 10.9, without using any of the Windows tools that are usually used to perform this operation.

N.B. Please take a look at the XDA thread I link to at the bottom of this blog before starting this procedure and only continue if you are willing to risk bricking your phone.

1. [Flash clockworkmod recovery](http://www.theandroidroot.com/how-to-install-clockworkmod-custom-recovery-on-htc-one/) to your phone
2. Flash an Android 4.2.2 rom that is capable of running revone, I used

    `adb sideload HTC_One_-MaximusHD_11.0.0.zip`

3. [Unlock the bootloader](http://www.htcdev.com/bootloader) through htc website registration and unlock code
4. Boot the device into android, [push and run revone on the device](http://forum.xda-developers.com/showthread.php?t=2314582) to get "s-off", also known as "your-phone-will-not-check-whether-the-rom-is-compatible-with-your-phone trick".
5. Update the CID to match the google phone, I used CID GOOGL001 e.g.

    `fastboot oem writecid GOOGL001`

6. use fastboot to flash clean google edition rom, e.g.

    `fastboot flash zip RUU-HTC_One_GE-4.4.2-3.62.1700.1-original.zip`

My process was loosely based on the [Google Edition Converstion for HTC One XDA thread](http://forum.xda-developers.com/showthread.php?t=2358781) but I did not found it very clear / concise.
