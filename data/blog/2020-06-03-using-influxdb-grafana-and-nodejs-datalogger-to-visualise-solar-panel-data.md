---
layout: post
title: 'Using influxdb, grafana and nodejs datalogger rasplogger to visualise solar panel data'
category: timeseries
tags: [timeseries, grafana, influxdb, nodejs]
---

I've been working on a datalogging project collecting timeseries data using [nodejs app RaspLogger](https://github.com/peterpeerdeman/rasplogger) to log the data, [influxdb](https://www.influxdata.com/) as a timeseries database and [grafana](https://grafana.com/) to visualise the data. I will do a more elaborate writeup on this setup soon, but can already share a specific pvoutput based dashboard with some instructions!

I've formatted the guide in the form of the [influx-db community templates](https://github.com/influxdata/community-template://github.com/influxdata/community-templates):

![solar panel data in grafana dashboard]({{ site.url }}/assets/images/2020-06-03-pv-dashboard.png)

This dashboard shows solar panel data that is collected through a nodejs datalogger capturing data from pvoutput.org

## Included Resources

[1 PV Output dashboard json export for Grafana 6.7.3](https://raw.githubusercontent.com/peterpeerdeman/rasplogger/master/grafana-dashboards/pv-output.json)

### Data collection with RaspLogger (pv module)

RaspLogger PV module requires the following environment variables

-   `PVOUTPUT_APIKEY` - The API key acquired at pvoutput.org website
-   `PVOUTPUT_SYSTEMID` - The PV system id you want the logger to capture

Continuously monitor pvoutput data by using RaspLogger to log data

-   `git checkout git@github.com:peterpeerdeman/rasplogger.git`
-   `cd rasplogger`
-   `docker run -it --rm --name rasplogger_pv -v "$PWD":/usr/src/app -w /usr/src/app --restart always node:13-buster node rasplogger.js cron pv "*/5 * * * *" -u http://influxdb:8086/pv`

### migrating data / example data

If you want to import historical data from a pv installation, or experiment with some sample pv data you can use [pvoutput-to-influx](https://github.com/peterpeerdeman/pvoutput-to-influx) on github
