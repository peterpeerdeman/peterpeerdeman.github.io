---
layout: post
title: "My view on Android development in 2015"
category: android
tags: [android, java, mobile, apps]
---
{% include JB/setup %}

Recently we've done an android project in which we developed a simple app with extensive documentation on how to re-create the app. This allowed me to get reacquainted with Android after a couple of years. In 2009 I had created my first [Android application](http://www.niftysystems.nl/xbox-live-stats-widget) using the [Android 1.5 SDK](http://developer.android.com/about/versions/android-1.5.html) and dear me, a lot has changed in the mean time.

Android has really grown to be a mature platform for software development. Even though it was built on Java, which ofcourse was already battletested, the API's to the Android internals were still quite rough. As an added disadvantage resources on this new platform were very slim, everyone basically had to reinvent the wheel for themselves.

One of the biggest improvements that came to my attention is the [Android Studio](http://developer.android.com/tools/studio/index.html). Switching from eclipse to IntelliJ's IDEA environment really helps take Android development to the next level. The installation is painless and the base set of SDK packages get installed automatically. Integration with the [ADB / DDMS debugging and logcat](http://developer.android.com/tools/debugging/index.html) is very well done which gives you a lot more grip on development than in the olden days.

In between my Android 1.5 and Android 5.0 time I've spent a lot of time with Composer (PHP) and NPM (Javascript). Finally, Android has the package manager it deserves, which is called [Gradle](https://gradle.org/gradle-the-new-android-build-system/). Even though it was already possible to include third party jars before, projects were always scattered all over maven / google code / random svn downloads. 

The new centralized way of adding dependencies to your projects makes it much more fun to work with and helps you focus on stuff that is unique for your application instead of doing the same thing others have done before. Want to integrate with REST API? Grab [the Retrofit library](https://github.com/square/retrofit). Quickly load an image into your image view? Let [universal-image-loader](https://github.com/nostra13/Android-Universal-Image-Loader) do the heavy lifting for you. 

All in all developing in Android was quite a lot more fun than I anticipated before and I can definitely recommend giving it another shot if you are interested in doing the stuff that is not quite available in hybrid apps such as integrations with wearables, ibeacons, nfc and other types of new mobile technologies.
