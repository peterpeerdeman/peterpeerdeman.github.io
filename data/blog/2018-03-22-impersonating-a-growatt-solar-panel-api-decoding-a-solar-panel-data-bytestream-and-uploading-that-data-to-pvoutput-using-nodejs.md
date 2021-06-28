---
title: Impersonating a growatt solar panel API, decoding a solar panel data bytestream and uploading that data to pvoutput using nodejs
date: '2018-03-22'
tags: ['iot', 'node']
draft: false
---

Gosh this was such a fun engineering project in so many different ways: Building a man in the middle server, reverse engineering a handshake protocol, decrypting a byte stream and storing data in a public API: Let's get into it.

My solar panels send their data through a WiFi module to an obscure Chinese server IP. The app was not very user friendly and had very limited ways of interacting with the data. I found out about [pvoutput.org](https://pvoutput.org) which is a site that stores solar panel data from installations all around the world and has a nice API. After googling a bunch and reading [Edwin Ligthart's UPLOAD GROWATT DATA TO PVOUTPUT WITH RASPBERRY PI blog](https://tech.ligthartnet.nl/upload-growatt-data-to-pvoutput-with-raspberry-pi://tech.ligthartnet.nl/upload-growatt-data-to-pvoutput-with-raspberry-pi/) my interest was more than piqued.

In this blog, Edwin sets up a raspberry pi to act as a "man-in-the-middle" to eavesdrop on the data packets being sent from the growatt module to the growatt server. The data packets are captured and routinely uploaded to pvoutput. But in this scenario, the datapackets still get uploaded to the chinese web server, which I would rather not do.

By analysing the data stream from and to the API server I was able to figure out that the growatt wifi module only produced its data packet if a handshake was performed. This consisted of a [`PING` message](https://github.com/peterpeerdeman/raspsolar/blob/master/raspsolar.js#L36), an [`ACK 03` message](https://github.com/peterpeerdeman/raspsolar/blob/master/raspsolar.js#L41) or the [`DATA` message](https://github.com/peterpeerdeman/raspsolar/blob/master/raspsolar.js#L45) that contains the actual solar panel status data. Johan Vromans did an excellent [writeup](https://www.vromans.org/johan/software/sw_growatt_wifi_protocol.html) on the data protocol. It seemed quite reproducible to emulate the communication handshake in a node script, and we can then decide for ourself what we want to do with the data.

By setting up a socket connection on port 5279 and distinguishing the incoming packages using the data length we can reply with the right encoded acknowledgement using the `socket.write` and log the incoming data:

```javascript
const net = require('net');
net.createServer(function (socket) {
    socket.on('data', function (data) {
        if (data.length == 18) {
            //this is the client PING, we need to echo the server PING back
            console.log('sending ping');
            socket.write(data);
            return;
        } else if (data.length == 223) {
            //this is the client announcement or valid datapack, we need to reply with ACK 03 packet
            console.log('sending ack to announcement');
            socket.write(Buffer.from('000100020003010300', 'hex'));
        } else {
            // this is a normal data packet, send ACK 04 packet back
            console.log('sending ack to data');
            socket.write(Buffer.from('000100020003010400', 'hex'));
            console.log(data);
        }
    });
}).listen(5279);
```

Now we have a raw bytestream of the encoded growatt data. Fortunately, the encoding is documented quite well by growatt in a [modbus technical specification document](https://github.com/ardexa/growatt-inverters/blob/master/docs/Growatt%20PV%20Inverter%20Modbus%20RS485%20RTU%20Protocol.pdf) and because there was no NPM module decoding the bytestream yet, I decided to explore the world of open source project maintenance and create [growatt-data-parser](https://github.com/peterpeerdeman/growatt-data-parser), an NPM module that _"Parses growatt solar inverter data and returns the data in a structured readable json object."_. I even added some tests and capture files, if you are interested in looking at some of the different scenarios that have data packets with different values. The package is built on top of the `binary-parser` NPM module that produces very elegant readable code:

```javascript
const Parser = require('binary-parser').Parser;
const growattSolarByteData = new Parser()
    .skip(skipBytes) //unknown header bytes before serialnumber
    .string('wifimoduleserial', {
        length: 10,
    })
    .string('inverterserial', {
        length: 10,
    })
    .skip(12) //skip unknown data bytes
    .uint8('inverterstatus')
    .skip(2) //skip unknown data bytes
    .uint16('ppv', {
        formatter: divideBy10,
    })
    .uint16('vpv1', {
        formatter: divideBy10,
    })
    .uint16('ipv1', {
        formatter: divideBy10,
    })
    .skip(2) //skip unknown data bytes
    .uint16('ppv1', {
        formatter: divideBy10,
    })
    .uint16('vpv2', {
        formatter: divideBy10,
    });
//...
```

All that was left to do now was create an account on pvoutput.org, enable the API key access and post the data to the API and watch the nice visualisations of the solar panel data flowing in.

This project called "raspsolar" can be found on [https://github.com/peterpeerdeman/raspsolar](https://github.com/peterpeerdeman/raspsolar)
