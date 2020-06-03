---
layout: post
title: "kubernetes setup with poe hats"
description: ""
category: 
tags: []
---

  1  sudo apt-get update
    2  sudo apt-get upgrade
    3  sudo hostnamectl set-hostname raspbravo
    4  sudo vim /boot/firmware/cmdline.txt
    6  history
    7  k3s_server="https://192.168.117.11:6443"
    8  k3s_token=xxxxx
    9  curl -sfL https://get.k3s.io | K3S_URL=$k3s_server K3S_TOKEN=$k3s_token sh -
   10  sudo poweroff
   11  vim ~/.ssh/authorized_keys
   12  sudo vim /etc/ssh/sshd_config
   13  sudo poweroff
   14  sudo vim /boot/firmware/usercfg.txt
   15  sudo reboot

static ip / no hdmi install

dd burn sd card
```
sudo sh -c 'gunzip -c ~/Downloads/ubuntu-20.04-preinstalled-server-arm64+raspi.img.xz | sudo dd of=/dev/disk2 bs=32m'
```

/system-boot/network-config
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

sudo apt-get update
sudo ap-tget upgrade

hostname
sudo hostnamectl set-hostname raspbravo

/boot/cmdline.txt
```
cgroup_enable=cpuset cgroup_memory=1 cgroup_enable=memory
```

poehat fan speed
/boot/firmware/usercfg.txt

```
dtparam=rpi-poe,poe_fan_temp0=10000,poe_fan_temp0_hyst=1000
dtparam=rpi-poe,poe_fan_temp1=55000,poe_fan_temp1_hyst=5000
dtparam=rpi-poe,poe_fan_temp2=60000,poe_fan_temp1_hyst=5000
dtparam=rpi-poe,poe_fan_temp3=65000,poe_fan_temp1_hyst=5000
dtparam=rpi-poe,poe_fan_temp4=70000,poe_fan_temp1_hyst=5000
```

controller:
```
curl -sfL https://get.k3s.io | sh -s - --write-kubeconfig-mode 644
sudo cat /var/lib/rancher/k3s/server/node-token .
```

slaves:
```
    7  k3s_server="https://192.168.117.11:6443"
    8  k3s_token=xxxxx
    9  curl -sfL https://get.k3s.io | K3S_URL=$k3s_server K3S_TOKEN=$k3s_token sh -
```

