---
layout: post
title: 'kubernetes setup with poe hats'
description: ''
category:
tags: []
---

One of the best ways to learn your way around Kubernetes is to build your own cluster and try the software out for yourself. I decided to go all the way, and follow some readily available tutorials to build my own four node cluster.

This post was originally dated 2020-05-31, which was when I ordered the materials. In the mean time, I've gone through several iterations of the cluster but it is now finally time to share a little about the project and my learnings. Let's start with the bill of materials:

-

-

dd burn sd card

```
sudo sh -c 'gunzip -c ~/Downloads/ubuntu-20.04-preinstalled-server-arm64+raspi.img.xz | sudo dd of=/dev/disk2 bs=32m'
```

set static ip (edit: from ubuntu 22, configure this in your router)

```
sudo vi /system-boot/network-config
```

use following template for static ip

```
version: 2
ethernets:
  eth0:
    dhcp4: false
    optional: false
    addresses:
      - 192.168.117.12/24
    gateway4: 192.168.117.1
    nameservers:
      addresses: [8.8.8.8]
```

retrieve, update and patch system

```
sudo apt update
sudo apt upgrade
```

kubernetes requires specific cgroup memory flag in firmware settings

```

```

add following parameters to file

```
in /boot/firmware/cmdline.txt, add:

cgroup_enable=cpuset cgroup_memory=1 cgroup_enable=memory
```

on controller: install k3s and retrieve token on controller:

```
curl -sfL https://get.k3s.io | sh -s - --write-kubeconfig-mode 644
sudo cat /var/lib/rancher/k3s/server/node-token .
```

on workers: set k3s environment variables and install k3s using controller token

```
k3s_server="https://192.168.117.11:6443"
k3s_token=xxxxx
curl -sfL https://get.k3s.io | K3S_URL=$k3s_server K3S_TOKEN=$k3s_token sh -
```

optional when using PoE hat: create variable poehat fan speed (2024 update: i took the poe hats off because they were very noisy)

```
in /boot/firmware/usercfg.txt, add:

dtparam=rpi-poe,poe_fan_temp0=10000,poe_fan_temp0_hyst=1000
dtparam=rpi-poe,poe_fan_temp1=55000,poe_fan_temp1_hyst=5000
dtparam=rpi-poe,poe_fan_temp2=60000,poe_fan_temp1_hyst=5000
dtparam=rpi-poe,poe_fan_temp3=65000,poe_fan_temp1_hyst=5000
dtparam=rpi-poe,poe_fan_temp4=70000,poe_fan_temp1_hyst=5000
```

accessing the kubernetes interface:

```
https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/
```

access to interface (generate token):

```
https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md
kubectl proxy
http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/
```

commands:

```
kubectl get nodes
kubectl get pods
kubectl get services
kubectl apply -f deployment-file.yaml
kubectl rollout status namespace/deploymentname
kubectl delete deploy/deploymentname
kubectl delete service/servicename
```

persistence:
https://longhorn.io/docs/0.8.1/what-is-longhorn/

```
kubectl create namespace longhorn-system
helm install longhorn longhorn/longhorn --namespace longhorn-system
kubectl port-forward --namespace longhorn-system svc/longhorn-frontend :80
```

influx:

-   make sure you extend startupProbe time for slow raspberry pi boot up times
-   dont use the alpine image, for it has no armv8 tags -> use the non-alpine instead
-   use helm charts, configure them with copied variables.yml files

telegraf:
use a daemonset to ensure pods run on all the different nodes,
