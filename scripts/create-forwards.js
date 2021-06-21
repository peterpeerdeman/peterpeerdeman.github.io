const posts = [
    {
        date: '2020-09-12',
        layout: 'post',
        title: 'Lifely x Emakina Nerd Summit GraphQL: Why What and How by Peter Peerdeman',
        category: 'presentations',
        tags: ['presentations', 'graphql'],
        draft: false,
        slug: 'lifely-x-emakina-nerd-summit-graphql-why-what-and-how-by-peter-peerdeman',
    },
    {
        date: '2020-08-13',
        layout: 'post',
        title: 'E commerce, dit is wat samenwerkingen voor jou kunnen betekenen',
        category: 'opinions',
        tags: ['opinions'],
        draft: false,
        slug: 'e-commerce-dit-is-wat-samenwerkingen-voor-jou-kunnen-betekenen',
    },
    {
        date: '2020-08-04',
        layout: 'post',
        title: 'Drie moderne cloud geheimen voor e commerce platformen',
        category: 'opinions',
        tags: ['opinions'],
        draft: false,
        slug: 'drie-moderne-cloud-geheimen-voor-e-commerce-platformen',
    },
    {
        date: '2020-07-02',
        layout: 'post',
        title:
            'Mediacollege webinar: React Native Masterclass, door Peter Peerdeman en Rick Woltheus',
        category: 'presentations',
        tags: ['reactnative', 'mobile', 'hybrid'],
        draft: false,
        slug: 'mediacollege-webinar-react-native-masterclass-door-peter-peerdeman-en-rick-woltheus',
    },
    {
        date: '2020-06-26',
        layout: 'post',
        title: 'Lifely & renewable tech, wat kunnen wij samen bereiken?',
        category: 'opinions',
        tags: ['opinions'],
        draft: false,
        slug: 'lifely-en-renewable-tech-wat-kunnen-wij-samen-bereiken',
    },
    {
        date: '2020-06-18',
        layout: 'post',
        title: 'Samenwerken met een agency: briefen, visualiseren en profiteren',
        category: 'opinions',
        tags: ['opinions'],
        draft: false,
        slug: 'samenwerken-met-een-agency-briefen-visualiseren-en-profiteren',
    },
    {
        date: '2020-06-11',
        layout: 'post',
        title:
            'Drie onvermijdelijke ontwikkelingen in jouw sustainable tech of alternative energy bedrijf',
        category: 'opinions',
        tags: ['opinions'],
        draft: false,
        slug:
            'drie-onvermijdelijke-ontwikkelingen-in-jouw-sustainable-tech-of-alternative-energy-bedrijf',
    },
    {
        date: '2020-06-04',
        layout: 'post',
        title: 'Veilig en snel aan je verzekeraars platform werken met externe partijen',
        category: 'opinions',
        tags: ['opinions'],
        draft: false,
        slug: 'veilig-en-snel-aan-je-verzekeraars-platform-werken-met-externe-partijen',
    },
    {
        date: '2020-06-03',
        layout: 'post',
        title:
            'Using influxdb, grafana and nodejs datalogger rasplogger to visualise solar panel data',
        category: 'timeseries',
        tags: ['timeseries', 'grafana', 'influxdb', 'nodejs'],
        draft: false,
        slug: 'using-influxdb-grafana-and-nodejs-datalogger-to-visualise-solar-panel-data',
    },
    {
        date: '2020-05-26',
        layout: 'post',
        title: 'Samenwerkingsvormen tussen verzekeraars en tech partijen',
        category: 'opinions',
        tags: ['opinions'],
        draft: false,
        slug: 'samenwerkingsvormen-tussen-verzekeraars-en-tech-partijen',
    },
    {
        date: '2020-05-20',
        layout: 'post',
        title: 'RaspLogger, InfluxDB, Grafana dashboards showcase',
        category: 'timeseries',
        tags: ['timeseries', 'grafana', 'influxdb', 'nodejs'],
        draft: false,
        slug: 'rasplogger-influxdb-grafana-dashboards-showcase',
    },
    {
        date: '2020-03-23',
        layout: 'post',
        title: 'Waarom ook jij moet beginnen met big data',
        category: 'opinions',
        tags: ['opinions'],
        draft: false,
        slug: 'waarom-ook-jij-moet-beginnen-met-big-data',
    },
    {
        date: '2020-03-05',
        layout: 'post',
        title: 'GraphQL, Apollo and GraphQL Subscriptions, at React JS Utrecht meetup',
        category: 'presentations',
        tags: ['graphql', 'subscriptions', 'realtime'],
        draft: false,
        slug: 'graphql-apollo-subscriptions',
    },
    {
        date: '2020-03-05',
        layout: 'post',
        title: 'Vijf onderwerpen voor een succesvolle onboarding',
        category: 'opinions',
        tags: ['opinions'],
        draft: false,
        slug: 'vijf-onderwerpen-voor-een-succesvolle-onboarding',
    },
    {
        date: '2020-02-24',
        layout: 'post',
        title: 'Intellectueel eigendom, waar moet je rekening mee houden?',
        category: 'opinions',
        tags: ['opinions'],
        draft: false,
        slug: 'intellectueel-eigendom-waar-moet-je-rekening-mee-houden',
    },
    {
        date: '2020-02-09',
        layout: 'post',
        title: 'Een oplossing visualiseren in het eerste gesprek met de klant',
        category: 'opinions',
        tags: ['opinions'],
        draft: false,
        slug: 'een-oplossing-visualiseren-in-het-eerste-gesprek-met-de-klant',
    },
    {
        date: '2020-02-05',
        layout: 'post',
        title: 'Hoe het gebruik van buzzwords technologie ontkracht',
        description: '',
        category: 'opinions',
        tags: ['opinions'],
        draft: false,
        slug: 'hoe-het-gebruik-van-buzzwords-technologie-ontkracht',
    },
    {
        date: '2019-02-15',
        layout: 'post',
        title:
            'Expert tracks vs Management tracks and portfolio tips, HelloMentor meetup at Lifely',
        category: 'presentations',
        tags: ['presentations', 'leadership'],
        draft: false,
        slug: 'expert-tracks-vs-management-tracks-plus-portfolio-tips',
    },
    {
        date: '2018-12-13',
        layout: 'post',
        title: 'GraphQL and Apollo at Saxum Food n Code Meetup',
        category: 'presentations',
        tags: ['presentations', 'graphql'],
        draft: false,
        slug: 'graphql-and-apollo',
    },
    {
        date: '2018-11-21',
        layout: 'post',
        title: 'Kickstart your digital process with an agency',
        category: 'presentations',
        tags: ['presentations'],
        draft: false,
        slug: 'kickstart-your-digital-process-with-an-agency',
    },
    {
        date: '2018-10-27',
        layout: 'post',
        title: "GraphQL: The future of API's is here",
        category: 'presentations',
        tags: ['presentations', 'graphql'],
        draft: false,
        slug: 'graphql-the-future-of-apis-is-here',
    },
    {
        date: '2018-04-11',
        layout: 'post',
        title: 'Why the hybrid approach finally works',
        category: 'presentations',
        tags: ['presentations', 'mobile'],
        draft: false,
        slug: 'why-the-hybrid-approach-finally-works',
    },
    {
        date: '2018-03-12',
        layout: 'post',
        title: "Datamodels, API's and GraphQL in practice",
        category: 'presentations',
        tags: ['presentations', 'graphql'],
        draft: false,
        slug: 'datamodels-apis-and-graphql-in-practice',
    },
    {
        date: '2018-02-22',
        layout: 'post',
        title: 'From buzzwords to products, working with new technology at a software agency',
        category: 'presentations',
        tags: ['react', 'reactnative', 'graphql'],
        draft: false,
        slug: 'from-buzzwords-to-products',
    },
    {
        date: '2018-02-20',
        layout: 'post',
        title: 'GraphQL, Apollo and optimistic UI updates',
        category: 'presentations',
        tags: ['graphql'],
        draft: false,
        slug: 'graphql-apollo-and-optimistic-ui-updates',
    },
    {
        date: '2018-01-24',
        layout: 'post',
        title: 'The impact and glory of GraphQL in applications at Lifely',
        category: 'presentations',
        tags: ['graphql'],
        draft: false,
        slug: 'the-impact-and-glory-of-graphql-in-applications-at-lifely',
    },
    {
        date: '2017-11-20',
        layout: 'post',
        title: 'ReactNative at Lifely',
        category: 'presentations',
        tags: ['react', 'reactnative'],
        draft: false,
        slug: 'react-native-at-lifely',
    },
    {
        date: '2017-04-21',
        layout: 'post',
        title: 'Websockets and DDP in production',
        category: 'presentations',
        tags: ['websockets', 'ddp'],
        draft: false,
        slug: 'websockets-and-ddp-in-production',
    },
    {
        date: '2016-08-22',
        layout: 'post',
        title: 'Switching from REST to Meteor, DDP and Apollo',
        description: 'switching from REST to Meteor, DDP and Apollo',
        category: 'technology',
        tags: ['nodejs', 'meteor', 'rest', 'apollo'],
        draft: false,
        slug: 'switching-from-rest-to-meteor-ddp-and-apollo',
    },
    {
        date: '2016-08-01',
        layout: 'post',
        title: 'using gitstats to get an overview of git activity in a repository',
        description: 'using gitstats to get an overview of git activity in a repository',
        category: 'git',
        tags: ['git'],
        draft: false,
        slug: 'using-gitstats-to-get-an-overview-of-git-activity-in-a-repository',
    },
    {
        date: '2016-07-11',
        layout: 'post',
        title:
            'Full document text search in nodejs using elasticsearch and elasticsearch mapper attachments plugin',
        description:
            'Full document text search in nodejs using elasticsearch and elasticsearch mapper attachments plugin',
        category: 'node',
        tags: ['node', 'elasticsearch', 'docker'],
        draft: false,
        slug:
            'full-document-text-search-in-nodejs-using-elasticsearch-and-elasticsearch-mapper-attachments-plugin',
    },
    {
        date: '2016-06-27',
        layout: 'post',
        title:
            'Deploy different environment variable configurations with the same docker image using combine in ansible 2.0',
        description:
            'Deploy different environment variable configurations with the same docker image using combine in ansible 2.0',
        category: 'devops',
        tags: ['devops', 'ansible', 'docker'],
        draft: false,
        slug:
            'deploy-different-environment-variable-configurations-with-the-same-docker-image-using-combine-in-ansible-20',
    },
    {
        date: '2016-06-13',
        layout: 'post',
        title: 'Building recordfairs.nl, a webscraper application in nodejs with postgres database',
        description:
            'Building recordfairs.nl, a webscraper application in nodejs with postgres database',
        category: 'node',
        tags: ['node', 'project', 'webscraper'],
        draft: false,
        slug: 'building-recordfairsnl-a-webscraper-application-in-nodejs-with-postgres-database',
    },
    {
        date: '2016-05-30',
        layout: 'post',
        title: 'Wireless outside weather station using particle photon, arduino and nodejs',
        description: 'Wireless outside weather station using particle photon, arduino and nodejs',
        category: 'internetofthings',
        tags: ['internetofthings', 'node', 'iot', 'photon'],
        draft: false,
        slug: 'wireless-outside-weather-station-using-particle-photon-arduino-and-nodejs',
    },
    {
        date: '2016-05-16',
        layout: 'post',
        title: 'Translating Meteor apps: UI, user generated content and emails',
        description: '',
        category: 'meteor',
        tags: ['meteor', 'i18n'],
        draft: false,
        slug: 'translating-meteor-apps-ui-user-generated-content-and-emails',
    },
    {
        date: '2016-05-09',
        layout: 'post',
        title: 'Upgrading old ruby 2.0.0 app to 2.2.4 for heroku deployment',
        description: 'Upgrading old ruby 2.0.0 app to 2.2.4 for heroku deployment',
        category: 'devops',
        tags: ['devops', 'ruby'],
        draft: false,
        slug: 'upgrading-old-ruby-200-app-to-224-for-heroku-deployment',
    },
    {
        date: '2016-05-02',
        layout: 'post',
        title: 'Sticky sessions loadbalancing for meteor using nginx-sticky-module-ng',
        category: 'nginx',
        tags: ['nginx', 'meteor', 'performance', 'loadbalancing'],
        draft: false,
        slug: 'sticky-sessions-loadbalance-for-meteor-using-nginx-sticky-module-ng',
    },
    {
        date: '2016-04-25',
        layout: 'post',
        title: 'Scheduling philips hue lights commands using node cron tasks',
        description: 'Scheduling philips hue lights commands using node cron tasks',
        category: 'internetofthings',
        tags: ['internetofthings', 'node'],
        draft: false,
        slug: 'scheduling-philips-hue-lights-commands-using-node-cron-tasks',
    },
    {
        date: '2016-04-11',
        layout: 'post',
        title: 'easily render markdown files from terminal using vmd',
        description: '',
        category: null,
        tags: ['markdown', 'terminal'],
        draft: false,
        slug: 'easily-render-markdown-from-terminal-using-vmd',
    },
    {
        date: '2016-04-10',
        layout: 'post',
        title: 'quickly test npm modules using trymodule',
        description: 'quickly test npm modules using trymodule',
        category: 'node',
        tags: ['node', 'npm'],
        draft: false,
        slug: 'quickly-test-npm-modules-using-trymodule',
    },
    {
        date: '2016-04-01',
        layout: 'post',
        title: 'improving performance, loading speed and scalability of a large meteor application',
        category: 'meteor',
        tags: ['meteor', 'performance'],
        draft: false,
        slug: 'improving-performance-loading-speed-and-scalability-of-a-large-meteor-application',
    },
    {
        date: '2016-03-21',
        layout: 'post',
        title: 'Meteor client side collection inserts versus meteor methods',
        description: 'Meteor client side collection inserts versus meteor methods',
        category: 'meteor',
        tags: ['meteor'],
        draft: false,
        slug: 'meteor-client-side-collection-inserts-versus-meteor-methods',
    },
    {
        date: '2016-03-07',
        layout: 'post',
        title: 'NodeJS cacheheaders using express-cache-control',
        description: 'NodeJS cacheheaders using express-cache-control',
        category: 'node',
        tags: ['node'],
        draft: false,
        slug: 'nodejs-cacheheaders-using-express-cache-control',
    },
    {
        date: '2016-02-22',
        layout: 'post',
        title: 'Visualizing disk space usage on linux server using ncdu',
        description: '',
        category: 'devops',
        tags: ['devops'],
        draft: false,
        slug: 'visualizing-disk-space-usage-on-linux-server-using-ncdu',
    },
    {
        date: '2016-02-08',
        layout: 'post',
        title: 'Fast and practical SCRUM and bug management using Trello and physical SCRUM boards',
        category: 'development',
        tags: ['agile'],
        draft: false,
        slug: 'fast-and-practical-scrum-and-bug-management-using-trello-and-physical-scrum-boards',
    },
    {
        date: '2016-01-25',
        layout: 'post',
        title: 'Raspberry Pi + Arduino weatherstation with PebbleJS interface',
        description: 'Raspberry Pi + Arduino weatherstation with PebbleJS interface',
        category: 'internetofthings',
        tags: ['iot', 'javascript', 'raspberry'],
        draft: false,
        slug: 'raspberry-pi-arduino-weatherstation-with-pebblejs-interface',
    },
    {
        date: '2016-01-11',
        layout: 'post',
        title: 'Experiences with mobile cross-platform Cordova apps 2015-2016',
        description:
            'A blog post highlighting our experience with frameworks, plug-ins and android specifics',
        category: 'technology',
        tags: ['opinions', 'mobile'],
        draft: false,
        slug: 'experiences-with-mobile-cross-platform-cordova-apps-2015-2016',
    },
    {
        date: '2015-12-14',
        layout: 'post',
        title: 'Looking into Meteor: our experiences with real-time web applications',
        description: 'Looking into Meteor: our experiences with real-time web applications',
        category: 'technology',
        tags: ['opinions', 'meteor'],
        draft: false,
        slug: 'looking-into-meteor-our-experiences-with-real-time-web-applications',
    },
    {
        date: '2015-12-09',
        layout: 'post',
        title: 'Moving to our own Meteor Docker infrastructure',
        category: 'presentations',
        tags: ['presentations', 'meteor'],
        draft: false,
        slug: 'moving-to-our-own-meteor-docker-infrastructure',
    },
    {
        date: '2015-11-28',
        layout: 'post',
        title: 'tidy up your git commits: amending, interactive rebasing and squashing commits',
        category: 'git',
        tags: ['git'],
        draft: false,
        slug: 'tidy-up-your-git-commits-amending-interactive-rebasing-and-squashing-commits',
    },
    {
        date: '2015-11-17',
        layout: 'post',
        title: 'Meteor ENOENT error because of imagemagick dependency',
        category: 'meteor',
        tags: ['node', 'meteor'],
        draft: false,
        slug: 'meteor-enoent-error-on-imagemagick-dependency',
    },
    {
        date: '2015-10-26',
        layout: 'post',
        title: 'Replacing meteor spiderable with alternative server side snippet rendering',
        description: 'Replacing meteor spiderable with alternative server side snippet rendering',
        category: 'meteor',
        tags: ['meteor'],
        draft: false,
        slug: 'replacing-meteor-spiderable-with-alternative-server-side-snippet-rendering',
    },
    {
        date: '2015-10-05',
        layout: 'post',
        title: 'Things I liked about Ruby on Rails and Symfony2 that I sometimes miss in NodeJS',
        description:
            'Things I liked about Ruby on Rails and Symfony2 that I sometimes miss in NodeJS',
        category: 'technology',
        tags: ['opinions', 'ruby'],
        draft: false,
        slug: 'things-i-liked-about-ruby-rails-and-symfony2-that-i-miss-in-nodejs',
    },
    {
        date: '2015-09-28',
        layout: 'post',
        title: 'Webapplications: from Concept to Code',
        category: 'presentations',
        tags: ['presentations'],
        draft: false,
        slug: 'webapplications-from-concept-to-code',
    },
    {
        date: '2015-09-19',
        layout: 'post',
        title: 'DNS, AAAA records and ipv6',
        description: 'DNS, AAAA records and ipv6',
        category: 'devops',
        tags: ['devops'],
        draft: false,
        slug: 'dns-aaaa-records-and-ipv6',
    },
    {
        date: '2015-09-04',
        layout: 'post',
        title: 'DDP: The real time api for web applications',
        description:
            'DDP: The real time api for web applications, a conference talk given at Endpointcon 2015',
        category: 'meteor',
        tags: ['presentations', 'meteor'],
        draft: false,
        slug: 'ddp-the-real-time-api-for-web-applications',
    },
    {
        date: '2015-07-01',
        title: 'Part up: a Meteor Production Story, at the Meteor Meet-up hosted by Lifely',
        category: 'meteor',
        tags: ['presentations', 'meteor'],
        draft: false,
        slug: 'part-up-a-meteor-production-story-at-the-meteor-meetup-hosted-by-lifely',
    },
    {
        date: '2015-05-24',
        title: 'Creating router independant blaze components for Meteor',
        description: 'Creating router independant blaze components for Meteor',
        category: 'meteor',
        tags: ['meteor'],
        draft: false,
        slug: 'creating-router-independant-blaze-components-for-meteor',
    },
    {
        date: '2015-04-01',
        layout: 'post',
        title: 'The best podcasts to get started with full stack javascript web development',
        category: 'development',
        tags: ['opinions'],
        draft: false,
        slug: 'the-best-podcasts-to-get-started-with-full-stack-javascript-web-development',
    },
    {
        date: '2015-03-10',
        title: 'searching through multiple files with vim',
        category: 'development',
        tags: ['vim'],
        draft: false,
        slug: 'searching-through-multiple-files-with-vim',
    },
    {
        date: '2015-03-02',
        title: 'Force cache miss on Javascript / CSS assets after deploy with grunt-replace',
        category: 'devops',
        tags: ['devops'],
        draft: false,
        slug: 'force-cache-miss-with-grunt-replace',
    },
    {
        date: '2015-02-10',
        title: 'Simple and clear Angular application documentation using angular-jsdoc',
        category: 'angular',
        tags: ['angular'],
        draft: false,
        slug: 'simple-and-clear-angular-application-documentation-using-angular-jsdoc',
    },
    {
        date: '2015-01-29',
        title: 'S3 bucket downloader',
        category: 'ruby',
        tags: ['amazon'],
        draft: false,
        slug: 's3-bucket-downloader',
    },
    {
        date: '2015-01-08',
        title: 'My view on Android development in 2015',
        category: 'android',
        tags: ['android'],
        draft: false,
        slug: 'my-view-on-android-development-in-2015',
    },
    {
        date: '2014-11-13',
        title: 'Server health insight with NewRelic and ansible',
        category: 'devops',
        tags: ['devops'],
        draft: false,
        slug: 'server-health-insight-with-newrelic-and-ansible',
    },
    {
        date: '2014-10-30',
        title: 'Clear and concise API design with blueprint and markdown',
        category: 'technology',
        tags: ['documentation'],
        draft: false,
        slug: 'clear-and-concise-api-design-with-blueprint-and-markdown',
    },
    {
        date: '2014-10-26',
        title: 'Deploying an Angular web application alongside Symfony2 back-end',
        category: 'devops',
        tags: ['devops'],
        draft: false,
        slug: 'deploying-an-angular-web-application-alongside-symfony2-backend',
    },
    {
        date: '2014-10-23',
        title: 'Big data experiment with Elasticsearch, Logstash and Kibana',
        category: 'devops',
        tags: ['devops'],
        draft: false,
        slug: 'logging-stashing-and-analyzing-with-elasticsearch-logstash-and-kibana',
    },
    {
        date: '2014-10-16',
        title: 'Queueing jobs with RabbitMQ and Symfony2',
        category: 'presentations',
        tags: ['presentations'],
        draft: false,
        slug: 'queueing-jobs-with-rabbitmq-and-symfony2',
    },
    {
        date: '2014-09-10',
        title: 'Load testing with loader.io',
        category: 'devops',
        tags: ['devops'],
        draft: false,
        slug: 'load-testing-with-loaderio',
    },
    {
        date: '2014-07-07',
        title: 'merging branches and git --no-ff',
        category: 'git',
        tags: ['git'],
        draft: false,
        slug: 'merging-branches-and-git-no-ff',
    },
    {
        date: '2014-06-30',
        layout: 'post',
        title: 'Small featurebranches and the empty develop branch syndrome',
        category: 'git',
        tags: ['git'],
        draft: false,
        slug: 'small-featurebranches-and-the-empty-develop-branch-syndrome',
    },
    {
        date: '2014-06-16',
        title: 'Creating a json version file during capistrano deployment',
        category: 'devops',
        tags: ['devops'],
        draft: false,
        slug: 'creating-a-json-version-file-during-capistrano-deployment',
    },
    {
        date: '2014-06-02',
        layout: 'post',
        title: 'Symfony2 continuous integration and deployment with Wercker',
        description: 'Symfony2 continuous integration and deployment with Wercker',
        category: 'devops',
        tags: ['devops'],
        draft: false,
        slug: 'symfony2-continuous-integration-and-deployment-with-wercker',
    },
    {
        date: '2014-05-20',
        layout: 'post',
        title: 'Kernel request listeners not triggering on commands',
        category: 'symfony2',
        tags: ['php'],
        draft: false,
        slug: 'kernel-request-listeners-not-triggering-on-commands',
    },
    {
        date: '2014-04-30',
        layout: 'post',
        title: 'Authentication choices: WSSE vs JWT',
        category: 'symfony2',
        tags: ['php'],
        draft: false,
        slug: 'authentication-choices-wsse-vs-jwt',
    },
    {
        date: '2014-04-29',
        title: 'From student to lead tech and back again',
        category: 'presentations',
        tags: ['presentations'],
        draft: false,
        slug: 'from-student-to-lead-tech-and-back-again',
    },
    {
        date: '2014-04-25',
        title: 'Parallel requests in node using promises',
        description:
            'While developing my first node applications I rediscovered the power of promises in javascript. In one recent project I built a proxy application that aggregates some data from different resources, bundles it and serves it in one single json to the frontend.',
        category: 'node',
        tags: ['node'],
        draft: false,
        slug: 'parallel-requests-in-node-using-promises',
    },
    {
        date: '2014-04-16',
        title: 'Simple and secure iptables configuration for webserver',
        category: 'devops',
        tags: ['devops'],
        draft: false,
        slug: 'simple-and-secure-iptables-configuration-for-webserver',
    },
    {
        date: '2014-03-31',
        layout: 'post',
        title: 'My thoughts on NoSQL after reading a book about it',
        description:
            "I've been interested in NoSQL databases for a while and now I've read a book about it. Main takeaway: Nosql is pretty cool, good for fast schemaless development and scales incredibly well.",
        category: 'technology',
        tags: ['opinions'],
        draft: false,
        slug: 'my-thoughts-on-nosql-after-reading-a-book-about-it',
    },
    {
        date: '2014-03-23',
        title: 'Flash HTC-One to Google Play edition',
        category: 'android',
        tags: ['android'],
        draft: false,
        slug: 'flash-htc-one-google-play',
    },
    {
        date: '2014-01-29',
        title: 'Missing label translations in Sonata admin interface',
        category: 'symfony2',
        tags: ['php'],
        draft: false,
        slug: 'missing-label-translations-in-sonata-admin-interface',
    },
    {
        date: '2014-01-29',
        title: 'Symfony2 Doctrine ManyToOne as required field using join column',
        category: 'symfony2',
        tags: ['php'],
        draft: false,
        slug: 'symfony2-many-to-one-as-required-field-using-join-column',
    },
    {
        date: '2014-01-28',
        title: 'Using doctrine lifecycle callbacks to update timestamps',
        category: 'symfony2',
        tags: ['php'],
        draft: false,
        slug: 'using-lifecycle-callbacks-to-set-created-and-updated-fields',
    },
    {
        date: '2013-12-10',
        title: 'Angular orderBy in object',
        category: 'angular',
        tags: ['angular'],
        draft: false,
        slug: 'angular-order-by',
    },
    {
        title: 'Saving version number at capifony deploy',
        date: '2013-12-09',
        category: 'devops',
        tags: ['devops'],
        draft: false,
        slug: 'saving-version-number-at-capifony-deploy',
    },
    {
        title: 'Consuming RESTful Resources with AngularJS',
        date: '2013-12-04',
        category: 'presentations',
        tags: ['presentations', 'angular'],
        draft: false,
        slug: 'consuming-restful-resources-with-angularjs',
    },
    {
        title: 'Moving changes around in git',
        date: '2013-11-21',
        category: 'devops',
        tags: ['git'],
        draft: false,
        slug: 'moving-changes-around-in-git',
    },
    {
        title: 'Deploying Angular to Heroku',
        date: '2013-11-05',
        category: 'angular',
        tags: ['angular'],
        draft: false,
        slug: 'deploying-angular-to-heroku',
    },
    {
        title: 'Symfony2 deployment target configuration',
        date: '2013-11-04',
        category: 'symfony2',
        tags: ['php'],
        draft: false,
        slug: 'symfony2-deployment-target-configuration',
    },
    {
        title: 'Symfony2 cache clearing problems',
        date: '2013-10-25',
        category: 'symfony2',
        tags: ['php'],
        draft: false,
        slug: 'symfony2-cache-clearing',
    },
    {
        title: 'Replacing angular $resource with restangular',
        date: '2013-10-24',
        category: 'angular',
        tags: ['angular'],
        draft: false,
        slug: 'replacing-angular-resource-with-restangular',
    },
    {
        title: "Restangular and validations while POST'ing to Symfony2",
        date: '2013-10-23',
        category: 'symfony2',
        tags: ['php'],
        draft: false,
        slug: 'restangular-with-symfony2',
    },
    {
        title: 'Posting data to Symfony2',
        date: '2013-10-21',
        tags: ['php'],
        draft: false,
        category: 'symfony2',
        slug: 'posting-data-to-symfony2',
    },
];

const redirects = posts.map((post) => {
    return {
        source: `/${post.category}/${post.date.replace(/-/g, '/')}/${post.slug}`,
        destination: `/blog/${post.slug}`,
        permanent: true,
    };
});

console.log(redirects);
