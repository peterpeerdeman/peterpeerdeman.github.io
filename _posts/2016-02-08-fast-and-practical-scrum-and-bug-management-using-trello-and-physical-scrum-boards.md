---
layout: post
title: "Fast and practical SCRUM and bug management using Trello and physical SCRUM boards"
category: development
tags: [scrum, development, productivity]
---
{% include JB/setup %}

I have always been a great SCRUM enthusiast. In my years as software developer and SCRUM master I've found that the maintenance of the backlog is paramount to the success of the SCRUM process. In the past years I have witnessed several methods / tools for keeping an eye on stories and bugs, including JIRA, Github issues, Trello, Physical brown paper and post-its and even archaic ones like Excel and HP Quality Center.

![Trello]({{ site.url }}/assets/images/2016-02-08-trello.png)

In the end, I've found that a combination of Trello and post-its on physical SCRUM boards works best for us. I'll be describing the process and reasons in the following sections.

## Process

During backlog grooming sessions we fill up the "Product Backlog list" with user stories featuring recognizable titles, with a more elaborate "as an (x) i want (y) so that (z)" story description in the text of the Trello card.

![SCRUM board]({{ site.url }}/assets/images/2016-02-08-scrumboard.jpg)

The stories then get estimated a number of story points and dragged onto a "Sprint Backlog list" in preparation of our off-line Sprint planning session. During this sprint planning session the concept / design team explains the stories on the sprint backlog list and the story titles are copied to sticky notes. The team then discusses the tasks that are required to finish the story and write the tasks down on post-its and stick them to the board.

When bugs are found during the sprint, they are immediately added to the "bugs" Trello list with a recognizable title and description containing steps to reproduce, result and expected result. This list is prioritized when there is room to fix bugs. Developers assign themselves to bugs to indicate they are working on them, and moved to "verify bugs list" for verification by product owner or quality assurance, who will archive the card when it is solved.

After a story is completed, it is dragged to the "Done stories Sprint (x)" column. All previous sprint lists are kept on the board to get a grasp of the amount of story points that can be completed per sprint.

## Advantages

We love this particular work flow for the following reasons:

- one single online tool for complete project story management
- clear overview of stories and progress over sprints
- the ability to easily share the overview with different stakeholders
- an off-line place for the team to discuss progress and feel physically involved in a team project
- speed and ease of prioritizing stories and bugs
- speed and ease of bug reporting
- speed and ease of bug closing

## Room for improvement

A feature that this method lacks is the automatic closing of tickets through commit messages. Github and JIRA do a very good job at this and allow developers to close issues by simply inserting the issue number in the commit message. This also increases traceability when looking back on old issues and seeing the commits that mentioned that specific issue. However, we have found that the ease of our Trello way of handling bugs is still a more suitable work flow for our projects.

One other case that this method is lacking is a clear measurement of story point burn / charts. I found that keeping these kind of graphs up to date is quite a task on top of the backlog management, which would be a thing to improve in the future.

I'd be interested to hear about your SCRUM tools, what part of the process is done online and what part is done off-line?
