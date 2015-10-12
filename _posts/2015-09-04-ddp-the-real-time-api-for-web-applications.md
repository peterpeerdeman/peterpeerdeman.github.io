---
layout: post
title: "DDP: The real time api for web applications"
description: "DDP: The real time api for web applications, a conference talk given at Endpointcon 2015"
category: meteor
tags: [meteor, conference, javascript]
---
{% include JB/setup %}

![Peter speaking at Endpointcon 2015](https://farm1.staticflickr.com/764/20579039463_a99dd24f21_z_d.jpg)

On the 4th of September 2015 I spoke at [Endpoint 2015](http://www.endpointcon.com/). I gave a conference talk on the specifics of the DDP protocol, on which the Meteor framework was built.

The slides can be found on [http://peterpeerdeman.github.io/ddp-the-real-time-api-for-web-applications](http://peterpeerdeman.github.io/ddp-the-real-time-api-for-web-applications) and the example material on [https://github.com/peterpeerdeman/ddp-the-real-time-api-for-web-applications](https://github.com/peterpeerdeman/ddp-the-real-time-api-for-web-applications)

DDP, or the "Distributed Data Protocol" was coined by Matt DeBergalis to provide a new standard for communication over websockets. Instead of using a request / response protocol such as rest over HTTP, DDP describes a JSON protocol over bi-directional websockets using the pub/sub and RPC paradigms.

The four main parts the DDP spec focuses are the connection, managing data, remote procedure calls and errorhandling. During the conference talk I've demonstrated all of the following examples by opening the chrome inspector and inspecting the traffic on the [endpointcon map demonstration application](http://endpoint15.meteor.com).

### Connection

After opening the websocket connecting, the client sends out a `connect` message, to which the server responds with either a `connected` message or a `failed` message. Both parties are able to send out a `ping` message, to which the receiving will reply with a `pong` message.

{% highlight bash %}
CLIENT          SERVER

=> connect
                <= connected
                <= failed

=> ping
                <= pong
{% endhighlight %}

### Managing Data

After connecting to the server, the client describes its interest in certain documents by sending a `sub` message, containing the name of the publication. The server will respond with a series of `added` messages for each requested document, followed by a `ready` message to indicate all initial data has been sent. If a document changes on the server, `changed` and/or `removed` messages are sent out to each subscribed client. This means that clients no longer have to poll for data, but will be automatically updated once a document changes on the server side. If a client is no longer interested in receiving updates on a description, an `unsub` message can be sent.

{% highlight bash %}
CLIENT          SERVER

=> sub
                <= added
                <= added
                <= ready
                <= changed
                <= removed
=> unsub
                <= nosub
{% endhighlight %}

### Remote Procedure Calls

The RPC paradigm is used to manipulate data on the backend. At any given time, the client is able to send `method` messages to the server, containing the method name that has to be exectued and optional arguments for that method. The server responds with a `result` message, containing either a response value or an error. If certain documents the user was subscribed to were changed due to the execution of the method, these changes are sent with similar `changed` messages as we have seen in the previous diagram. After all the `changed` messages have been sent, an `updated` message is sent used to signal the end of the incoming changes.
 
{% highlight bash %}
CLIENT          SERVER
=> method
                <= result
                <= changed
                <= updated
{% endhighlight %}
### Errors

When a method is sent and incurs an error on the server, a result containing an error is returned. A result containing an error will look like this:

{% highlight json %}
{
    "msg": "result",
    "id": "1",
    "error": {
        "error": 404,
        "reason": "Method not found",
        "message": "Method not found [404]",
        "errorType": "Method.Error"
    }
}
{% endhighlight %}

I've created several examples to display the use of DDP. The first example is the [endpointcon map](https://github.com/peterpeerdeman/ddp-the-real-time-api-for-web-applications/tree/gh-pages/examples/endpointcon-map), a small meteor application that shows avatars of the speakers of endpointcon that are draggable around a map of amsterdam. The javascript for this example is only 77 lines long describing both the frontend and the balong describing both the frontend and the backend.

The second example is a nodejs javascript DDP server, called [endpointcon-server](https://github.com/peterpeerdeman/ddp-the-real-time-api-for-web-applications/tree/gh-pages/examples/endpointcon-server). It utilizes the `ddp-server-reactive` npm module to create a simple sensor server without the need for the full meteor framework.

The last example is a vanilla javascript DDP client example application called [endpointcon-client](https://github.com/peterpeerdeman/ddp-the-real-time-api-for-web-applications/tree/gh-pages/examples/endpointcon-client) which uses the `ddp-client` npm module to connect to the endpointcon-server application, subscribe to the described publications and reactively update the dom without the need for the full meteor framework.

DDP is a great way to expose real-time data over websockets. By having all real-time API's adhere to a communication standard such as DDP we are able to push tooling forward and easily tie different realtime API's together, as REST did for HTTP. I highly recommend giving DDP a try if you are sending data over websockets instead of inventing your own websockets protocol and let me know what you think!
