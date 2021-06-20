---
layout: post
title: 'Visualizing disk space usage on linux server using ncdu'
description: ''
category: devops
tags: []
---

After getting one "fullest disk > 80%" alert too many for our continious integration servers and getting frustrated with apparently full disks, I decided too look into a solution that helps you find where the diskspace in your server is going.

For Mac OSX I have always used [OmniDiskSweeper](https://www.omnigroup.com/more), a pretty neat visual tool that indexes your harddrive and and shows you the folders that contain the most megabytes. For linux servers I have fiddled around with "find large files commands" such as `du -a /var | sort -n -r | head -n 10` which simply do not give you the amount of detail needed to thoroughly clean up a harddisk.

Thats when I found [NCDU](https://dev.yorhel.nl/ncdu), a disk space analyzer that is just one `apt-get install ncdu` away from visualizing your harddrive and navigating around folders with high consumption. I found it an absolute delight to work with, give it a try!

![ncdu in action]({{ site.url }}/assets/images/2016-02-22-ncdu.png)
