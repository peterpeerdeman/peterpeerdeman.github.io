---
layout: post
title: 'Clear and concise API design with blueprint and markdown'
category: technology
tags: [api, backend, documentation]
---

I've been designing a lot of REST API's lately and have found out that blueprint is one of the most concise yet expressive ways of capturing the design of a web interface before actually building it.

[Blueprint](https://apiblueprint.org/) is a "Web API language written in pure markdown, designed for humans while being understandable by machines with powerful tooling and an easy lifecycle". It allows you to quickly jot down your API spec:

    ## POST /api/login
    + Request (application/json)
    {
        "username":"peter",
        "password":"welcome123"
    }
    + Response 200 (application/json)
    {
        "token":"86576576153765s76a5f76a5sf76a5fs765asdf765"
    }
    + Response 401 (application/json)
    {
        "message": "incorrect credentials"
    }

In just a couple of lines you've described the endpoint, its expected input and all possible responses. In most cases, this specification is sufficient for any team member to actually implement the functionality. This makes blueprint a great communication tool for defining API's between different development teams that will be built at the same time but eventually need to be integrated.

### added bonuses

Of course, the markdown code is rendered to pretty HTML files when committed to github or bitbucket and helps define a standard for the way teams discuss API's. But writing your API design in blueprint also has a couple of other nifty features.

Tools like [api-mock](https://github.com/localmed/api-mock) will instantly turn your blueprint documentation into a fully functional stub server. This server automatically creates the endpoints that will respond with the defined stub data. This is great for front-end teams that want to develop an application without waiting for the back-end to complete their endpoints.

[Dredd](https://github.com/apiaryio/dredd) is a command line tool that will verify your backends implementation against the original blueprint specification. If specified well, this will save you writing a lot of repetitive integration tests!

Finally, [apiary](http://www.apiary.io) will take your blueprint document to a whole new level. By sharing your design to their cloud service you get access to their hosted stub servers, extensive [rendered documentation](http://docs.gooddata.apiary.io/) with sandboxes and can easily inspect the traffic that is directed towards the stub API to test your application.

As long as were writing REST API's, I'll be jotting them down using blueprint.
