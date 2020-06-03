---
layout: post
title: "RaspLogger, InfluxDB, Grafana dashboards showcase"
category: timeseries
tags: [timeseries, grafana, influxdb, nodejs]
---

I've been experimenting with datacollection for non-server/ops related dashboards. I've not found the time to do full writeups on these things but as I'm procrastinating that I'd still love to share some of the things I'm working on. All ingredients needed to get these examples running are listed below!

## Getting started
- [nodejs app RaspLogger](https://github.com/peterpeerdeman/rasplogger) to gather and log data to influxdb
- [influxdb](https://www.influxdata.com/) as a timeseries database
- [grafana](https://grafana.com/) to visualise the data. 

## Dashboards

### public parkingplaces in Amsterdam over time

![public parkingplaces in Amsterdam over time]({{ site.url }}/assets/images/2020-05-20-parking.png)

### solar panel performance data, based on pvoutput 

![solar panel performance data over time, based on pvoutput]({{ site.url }}/assets/images/2020-05-20-pv.png)

### indoor temperature and heating data over time, based on tado smart thermostat

![indoor temperature and heating data over time, based on tado smart thermostat]({{ site.url }}/assets/images/2020-05-20-thermostat.png)

### destiny videogame clan character levels, minutes played and online status

![destiny videogame clan character levels, minutes played and online status]({{ site.url }}/assets/images/2020-05-20-destiny-1.png)

### destiny multiplayer online behavior

![destiny multiplayer online behavior]({{ site.url }}/assets/images/2020-05-20-destiny-2.png)

### RouterAPI / device based presence tracking

![RouterAPI / device based presence tracking]({{ site.url }}/assets/images/2020-05-20-router.png)

### Personal health data tracking based on fitbit data

![Personal health data tracking based on fitbit data]({{ site.url }}/assets/images/2020-05-20-fitbit.png)
