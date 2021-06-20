---
date: '2014-04-16'
title: 'Simple and secure iptables configuration for webserver'
category: devops
tags: ['devops']
draft: false
---

While I was enabling a management console for a queue I was implementing (rabbitmq) I found out that on my clean ubuntu 12.01 box there is no default firewall whatsoever. After fiddling a bit with the `iptables` command and following this [guide](https://help.ubuntu.com/community/IptablesHowTo) the server was locked down tight.

```bash
sudo iptables -I INPUT 1 -i lo -j ACCEPT
sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT
sudo iptables -A INPUT -j DROP
sudo iptables -L -v
Chain INPUT (policy ACCEPT 0 packets, 0 bytes)
pkts bytes target prot opt in out source destination
 1235 174K ACCEPT all -- any any anywhere anywhere ctstate RELATED,ESTABLISHED
0 0 ACCEPT tcp -- any any anywhere anywhere tcp dpt:ssh
0 0 ACCEPT tcp -- any any anywhere anywhere tcp dpt:http
0 0 ACCEPT tcp -- any any anywhere anywhere tcp dpt:https
84 7011 DROP all -- any any anywhere anywhere

Chain FORWARD (policy ACCEPT 0 packets, 0 bytes)
pkts bytes target prot opt in out source destination

Chain OUTPUT (policy ACCEPT 0 packets, 0 bytes)
pkts bytes target prot opt in out source destination
```

Please note the incoming `RELATED,ESTABLISHED` line, which is necessary if you want to be able to create outgoing connections from the server. Without these lines, all your CURLs and pings sent from the server will fail (as did mine before I added those lines).

If you want to load these tables by default, run the command `sudo sh -c "iptables-save > /etc/iptables.rules"` to save the configuration to the default iptables configuration.
