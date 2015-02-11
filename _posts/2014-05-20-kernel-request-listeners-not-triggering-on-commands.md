---
layout: post
title: "Kernel request listeners not triggering on commands"
category: symfony2
tags: [symfony2, events]
---

It turns out kernel events are not sent when executing a Symfony2 command instead of sending a request through the browser. I found out because our custom kernel event listener to overwrite twig's default number_template was not working when using a php console command to launch some functionality. If you add the console.command tag to the listener in addition to the kernel.request, the listener gets called when using both methods.

{% highlight php %}
    #in app/config/services.yml
    twignumber.listener.request:
        class: BNP\ApiBundle\Service\TwigNumberRequestListener
        arguments: [@twig]
        tags:
            - { name: kernel.event_listener, event: kernel.request, method: onKernelRequest }
            - { name: kernel.event_listener, event: console.command, method: onKernelRequest }
{% endhighlight %}

{% include JB/setup %}
