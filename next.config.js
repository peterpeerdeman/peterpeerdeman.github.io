const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    future: {
        webpack5: true,
    },
    webpack: (config, { dev, isServer }) => {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|mp4)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next',
                        name: 'static/media/[name].[hash].[ext]',
                    },
                },
            ],
        });

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        if (!dev && !isServer) {
            // Replace React with Preact only in client production build
            Object.assign(config.resolve.alias, {
                react: 'preact/compat',
                'react-dom/test-utils': 'preact/test-utils',
                'react-dom': 'preact/compat',
            });
        }

        return config;
    },
    async rewrites() {
        return {
            beforeFiles: [
                // These rewrites are checked after headers/redirects
                // and before pages/public files which allows overriding
                // page files
                {
                    source: '/',
                    destination: '/index',
                },
            ],
        };
    },
    async redirects() {
        return [
            {
                source: '/post',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/symfony2/2013/10/21/posting-data-to-symfony2*',
                destination: '/blog/posting-data-to-symfony2',
                permanent: true,
            },
            {
                source:
                    '/presentations/2020/09/12/lifely-x-emakina-nerd-summit-graphql-why-what-and-how-by-peter-peerdeman*',
                destination:
                    '/blog/lifely-x-emakina-nerd-summit-graphql-why-what-and-how-by-peter-peerdeman',
                permanent: true,
            },
            {
                source:
                    '/opinions/2020/08/13/e-commerce-dit-is-wat-samenwerkingen-voor-jou-kunnen-betekenen*',
                destination: '/blog/e-commerce-dit-is-wat-samenwerkingen-voor-jou-kunnen-betekenen',
                permanent: true,
            },
            {
                source:
                    '/opinions/2020/08/04/drie-moderne-cloud-geheimen-voor-e-commerce-platformen*',
                destination: '/blog/drie-moderne-cloud-geheimen-voor-e-commerce-platformen',
                permanent: true,
            },
            {
                source:
                    '/presentations/2020/07/02/mediacollege-webinar-react-native-masterclass-door-peter-peerdeman-en-rick-woltheus*',
                destination:
                    '/blog/mediacollege-webinar-react-native-masterclass-door-peter-peerdeman-en-rick-woltheus',
                permanent: true,
            },
            {
                source:
                    '/opinions/2020/06/26/lifely-en-renewable-tech-wat-kunnen-wij-samen-bereiken*',
                destination: '/blog/lifely-en-renewable-tech-wat-kunnen-wij-samen-bereiken',
                permanent: true,
            },
            {
                source:
                    '/opinions/2020/06/18/samenwerken-met-een-agency-briefen-visualiseren-en-profiteren*',
                destination: '/blog/samenwerken-met-een-agency-briefen-visualiseren-en-profiteren',
                permanent: true,
            },
            {
                source:
                    '/opinions/2020/06/11/drie-onvermijdelijke-ontwikkelingen-in-jouw-sustainable-tech-of-alternative-energy-bedrijf*',
                destination:
                    '/blog/drie-onvermijdelijke-ontwikkelingen-in-jouw-sustainable-tech-of-alternative-energy-bedrijf',
                permanent: true,
            },
            {
                source:
                    '/opinions/2020/06/04/veilig-en-snel-aan-je-verzekeraars-platform-werken-met-externe-partijen*',
                destination:
                    '/blog/veilig-en-snel-aan-je-verzekeraars-platform-werken-met-externe-partijen',
                permanent: true,
            },
            {
                source:
                    '/timeseries/2020/06/03/using-influxdb-grafana-and-nodejs-datalogger-to-visualise-solar-panel-data*',
                destination:
                    '/blog/using-influxdb-grafana-and-nodejs-datalogger-to-visualise-solar-panel-data',
                permanent: true,
            },
            {
                source:
                    '/opinions/2020/05/26/samenwerkingsvormen-tussen-verzekeraars-en-tech-partijen*',
                destination: '/blog/samenwerkingsvormen-tussen-verzekeraars-en-tech-partijen',
                permanent: true,
            },
            {
                source: '/timeseries/2020/05/20/rasplogger-influxdb-grafana-dashboards-showcase*',
                destination: '/blog/rasplogger-influxdb-grafana-dashboards-showcase',
                permanent: true,
            },
            {
                source: '/opinions/2020/03/23/waarom-ook-jij-moet-beginnen-met-big-data*',
                destination: '/blog/waarom-ook-jij-moet-beginnen-met-big-data',
                permanent: true,
            },
            {
                source: '/presentations/2020/03/05/graphql-apollo-subscriptions*',
                destination: '/blog/graphql-apollo-subscriptions',
                permanent: true,
            },
            {
                source: '/opinions/2020/03/05/vijf-onderwerpen-voor-een-succesvolle-onboarding*',
                destination: '/blog/vijf-onderwerpen-voor-een-succesvolle-onboarding',
                permanent: true,
            },
            {
                source:
                    '/opinions/2020/02/24/intellectueel-eigendom-waar-moet-je-rekening-mee-houden*',
                destination: '/blog/intellectueel-eigendom-waar-moet-je-rekening-mee-houden',
                permanent: true,
            },
            {
                source:
                    '/opinions/2020/02/09/een-oplossing-visualiseren-in-het-eerste-gesprek-met-de-klant*',
                destination: '/blog/een-oplossing-visualiseren-in-het-eerste-gesprek-met-de-klant',
                permanent: true,
            },
            {
                source: '/opinions/2020/02/05/hoe-het-gebruik-van-buzzwords-technologie-ontkracht*',
                destination: '/blog/hoe-het-gebruik-van-buzzwords-technologie-ontkracht',
                permanent: true,
            },
            {
                source:
                    '/presentations/2019/02/15/expert-tracks-vs-management-tracks-plus-portfolio-tips*',
                destination: '/blog/expert-tracks-vs-management-tracks-plus-portfolio-tips',
                permanent: true,
            },
            {
                source: '/presentations/2018/12/13/graphql-and-apollo*',
                destination: '/blog/graphql-and-apollo',
                permanent: true,
            },
            {
                source: '/presentations/2018/11/21/kickstart-your-digital-process-with-an-agency*',
                destination: '/blog/kickstart-your-digital-process-with-an-agency',
                permanent: true,
            },
            {
                source: '/presentations/2018/10/27/graphql-the-future-of-apis-is-here*',
                destination: '/blog/graphql-the-future-of-apis-is-here',
                permanent: true,
            },
            {
                source: '/presentations/2018/04/11/why-the-hybrid-approach-finally-works*',
                destination: '/blog/why-the-hybrid-approach-finally-works',
                permanent: true,
            },
            {
                source: '/presentations/2018/03/12/datamodels-apis-and-graphql-in-practice*',
                destination: '/blog/datamodels-apis-and-graphql-in-practice',
                permanent: true,
            },
            {
                source: '/presentations/2018/02/22/from-buzzwords-to-products*',
                destination: '/blog/from-buzzwords-to-products',
                permanent: true,
            },
            {
                source: '/presentations/2018/02/20/graphql-apollo-and-optimistic-ui-updates*',
                destination: '/blog/graphql-apollo-and-optimistic-ui-updates',
                permanent: true,
            },
            {
                source:
                    '/presentations/2018/01/24/the-impact-and-glory-of-graphql-in-applications-at-lifely*',
                destination: '/blog/the-impact-and-glory-of-graphql-in-applications-at-lifely',
                permanent: true,
            },
            {
                source: '/presentations/2017/11/20/react-native-at-lifely*',
                destination: '/blog/react-native-at-lifely',
                permanent: true,
            },
            {
                source: '/presentations/2017/04/21/websockets-and-ddp-in-production*',
                destination: '/blog/websockets-and-ddp-in-production',
                permanent: true,
            },
            {
                source: '/technology/2016/08/22/switching-from-rest-to-meteor-ddp-and-apollo*',
                destination: '/blog/switching-from-rest-to-meteor-ddp-and-apollo',
                permanent: true,
            },
            {
                source:
                    '/git/2016/08/01/using-gitstats-to-get-an-overview-of-git-activity-in-a-repository*',
                destination:
                    '/blog/using-gitstats-to-get-an-overview-of-git-activity-in-a-repository',
                permanent: true,
            },
            {
                source:
                    '/node/2016/07/11/full-document-text-search-in-nodejs-using-elasticsearch-and-elasticsearch-mapper-attachments-plugin*',
                destination:
                    '/blog/full-document-text-search-in-nodejs-using-elasticsearch-and-elasticsearch-mapper-attachments-plugin',
                permanent: true,
            },
            {
                source:
                    '/devops/2016/06/27/deploy-different-environment-variable-configurations-with-the-same-docker-image-using-combine-in-ansible-20*',
                destination:
                    '/blog/deploy-different-environment-variable-configurations-with-the-same-docker-image-using-combine-in-ansible-20',
                permanent: true,
            },
            {
                source:
                    '/node/2016/06/13/building-recordfairsnl-a-webscraper-application-in-nodejs-with-postgres-database*',
                destination:
                    '/blog/building-recordfairsnl-a-webscraper-application-in-nodejs-with-postgres-database',
                permanent: true,
            },
            {
                source:
                    '/internetofthings/2016/05/30/wireless-outside-weather-station-using-particle-photon-arduino-and-nodejs*',
                destination:
                    '/blog/wireless-outside-weather-station-using-particle-photon-arduino-and-nodejs',
                permanent: true,
            },
            {
                source:
                    '/meteor/2016/05/16/translating-meteor-apps-ui-user-generated-content-and-emails*',
                destination: '/blog/translating-meteor-apps-ui-user-generated-content-and-emails',
                permanent: true,
            },
            {
                source:
                    '/devops/2016/05/09/upgrading-old-ruby-200-app-to-224-for-heroku-deployment*',
                destination: '/blog/upgrading-old-ruby-200-app-to-224-for-heroku-deployment',
                permanent: true,
            },
            {
                source:
                    '/nginx/2016/05/02/sticky-sessions-loadbalance-for-meteor-using-nginx-sticky-module-ng*',
                destination:
                    '/blog/sticky-sessions-loadbalance-for-meteor-using-nginx-sticky-module-ng',
                permanent: true,
            },
            {
                source:
                    '/internetofthings/2016/04/25/scheduling-philips-hue-lights-commands-using-node-cron-tasks*',
                destination: '/blog/scheduling-philips-hue-lights-commands-using-node-cron-tasks',
                permanent: true,
            },
            {
                source: '/null/2016/04/11/easily-render-markdown-from-terminal-using-vmd*',
                destination: '/blog/easily-render-markdown-from-terminal-using-vmd',
                permanent: true,
            },
            {
                source: '/node/2016/04/10/quickly-test-npm-modules-using-trymodule*',
                destination: '/blog/quickly-test-npm-modules-using-trymodule',
                permanent: true,
            },
            {
                source:
                    '/meteor/2016/04/01/improving-performance-loading-speed-and-scalability-of-a-large-meteor-application*',
                destination:
                    '/blog/improving-performance-loading-speed-and-scalability-of-a-large-meteor-application',
                permanent: true,
            },
            {
                source:
                    '/meteor/2016/03/21/meteor-client-side-collection-inserts-versus-meteor-methods*',
                destination: '/blog/meteor-client-side-collection-inserts-versus-meteor-methods',
                permanent: true,
            },
            {
                source: '/node/2016/03/07/nodejs-cacheheaders-using-express-cache-control*',
                destination: '/blog/nodejs-cacheheaders-using-express-cache-control',
                permanent: true,
            },
            {
                source:
                    '/devops/2016/02/22/visualizing-disk-space-usage-on-linux-server-using-ncdu*',
                destination: '/blog/visualizing-disk-space-usage-on-linux-server-using-ncdu',
                permanent: true,
            },
            {
                source:
                    '/development/2016/02/08/fast-and-practical-scrum-and-bug-management-using-trello-and-physical-scrum-boards*',
                destination:
                    '/blog/fast-and-practical-scrum-and-bug-management-using-trello-and-physical-scrum-boards',
                permanent: true,
            },
            {
                source:
                    '/internetofthings/2016/01/25/raspberry-pi-arduino-weatherstation-with-pebblejs-interface*',
                destination: '/blog/raspberry-pi-arduino-weatherstation-with-pebblejs-interface',
                permanent: true,
            },
            {
                source:
                    '/technology/2016/01/11/experiences-with-mobile-cross-platform-cordova-apps-2015-2016*',
                destination: '/blog/experiences-with-mobile-cross-platform-cordova-apps-2015-2016',
                permanent: true,
            },
            {
                source:
                    '/technology/2015/12/14/looking-into-meteor-our-experiences-with-real-time-web-applications*',
                destination:
                    '/blog/looking-into-meteor-our-experiences-with-real-time-web-applications',
                permanent: true,
            },
            {
                source: '/presentations/2015/12/09/moving-to-our-own-meteor-docker-infrastructure*',
                destination: '/blog/moving-to-our-own-meteor-docker-infrastructure',
                permanent: true,
            },
            {
                source:
                    '/git/2015/11/28/tidy-up-your-git-commits-amending-interactive-rebasing-and-squashing-commits*',
                destination:
                    '/blog/tidy-up-your-git-commits-amending-interactive-rebasing-and-squashing-commits',
                permanent: true,
            },
            {
                source: '/meteor/2015/11/17/meteor-enoent-error-on-imagemagick-dependency*',
                destination: '/blog/meteor-enoent-error-on-imagemagick-dependency',
                permanent: true,
            },
            {
                source:
                    '/meteor/2015/10/26/replacing-meteor-spiderable-with-alternative-server-side-snippet-rendering*',
                destination:
                    '/blog/replacing-meteor-spiderable-with-alternative-server-side-snippet-rendering',
                permanent: true,
            },
            {
                source:
                    '/technology/2015/10/05/things-i-liked-about-ruby-rails-and-symfony2-that-i-miss-in-nodejs*',
                destination:
                    '/blog/things-i-liked-about-ruby-rails-and-symfony2-that-i-miss-in-nodejs',
                permanent: true,
            },
            {
                source: '/presentations/2015/09/28/webapplications-from-concept-to-code*',
                destination: '/blog/webapplications-from-concept-to-code',
                permanent: true,
            },
            {
                source: '/devops/2015/09/19/dns-aaaa-records-and-ipv6*',
                destination: '/blog/dns-aaaa-records-and-ipv6',
                permanent: true,
            },
            {
                source: '/meteor/2015/09/04/ddp-the-real-time-api-for-web-applications*',
                destination: '/blog/ddp-the-real-time-api-for-web-applications',
                permanent: true,
            },
            {
                source:
                    '/meteor/2015/07/01/part-up-a-meteor-production-story-at-the-meteor-meetup-hosted-by-lifely*',
                destination:
                    '/blog/part-up-a-meteor-production-story-at-the-meteor-meetup-hosted-by-lifely',
                permanent: true,
            },
            {
                source:
                    '/meteor/2015/05/24/creating-router-independant-blaze-components-for-meteor*',
                destination: '/blog/creating-router-independant-blaze-components-for-meteor',
                permanent: true,
            },
            {
                source:
                    '/development/2015/04/01/the-best-podcasts-to-get-started-with-full-stack-javascript-web-development*',
                destination:
                    '/blog/the-best-podcasts-to-get-started-with-full-stack-javascript-web-development',
                permanent: true,
            },
            {
                source: '/development/2015/03/10/searching-through-multiple-files-with-vim*',
                destination: '/blog/searching-through-multiple-files-with-vim',
                permanent: true,
            },
            {
                source: '/devops/2015/03/02/force-cache-miss-with-grunt-replace*',
                destination: '/blog/force-cache-miss-with-grunt-replace',
                permanent: true,
            },
            {
                source:
                    '/angular/2015/02/10/simple-and-clear-angular-application-documentation-using-angular-jsdoc*',
                destination:
                    '/blog/simple-and-clear-angular-application-documentation-using-angular-jsdoc',
                permanent: true,
            },
            {
                source: '/ruby/2015/01/29/s3-bucket-downloader*',
                destination: '/blog/s3-bucket-downloader',
                permanent: true,
            },
            {
                source: '/android/2015/01/08/my-view-on-android-development-in-2015*',
                destination: '/blog/my-view-on-android-development-in-2015',
                permanent: true,
            },
            {
                source: '/devops/2014/11/13/server-health-insight-with-newrelic-and-ansible*',
                destination: '/blog/server-health-insight-with-newrelic-and-ansible',
                permanent: true,
            },
            {
                source:
                    '/technology/2014/10/30/clear-and-concise-api-design-with-blueprint-and-markdown*',
                destination: '/blog/clear-and-concise-api-design-with-blueprint-and-markdown',
                permanent: true,
            },
            {
                source:
                    '/devops/2014/10/26/deploying-an-angular-web-application-alongside-symfony2-backend*',
                destination:
                    '/blog/deploying-an-angular-web-application-alongside-symfony2-backend',
                permanent: true,
            },
            {
                source:
                    '/devops/2014/10/23/logging-stashing-and-analyzing-with-elasticsearch-logstash-and-kibana*',
                destination:
                    '/blog/logging-stashing-and-analyzing-with-elasticsearch-logstash-and-kibana',
                permanent: true,
            },
            {
                source: '/presentations/2014/10/16/queueing-jobs-with-rabbitmq-and-symfony2*',
                destination: '/blog/queueing-jobs-with-rabbitmq-and-symfony2',
                permanent: true,
            },
            {
                source: '/devops/2014/09/10/load-testing-with-loaderio*',
                destination: '/blog/load-testing-with-loaderio',
                permanent: true,
            },
            {
                source: '/git/2014/07/07/merging-branches-and-git-no-ff*',
                destination: '/blog/merging-branches-and-git-no-ff',
                permanent: true,
            },
            {
                source:
                    '/git/2014/06/30/small-featurebranches-and-the-empty-develop-branch-syndrome*',
                destination: '/blog/small-featurebranches-and-the-empty-develop-branch-syndrome',
                permanent: true,
            },
            {
                source:
                    '/devops/2014/06/16/creating-a-json-version-file-during-capistrano-deployment*',
                destination: '/blog/creating-a-json-version-file-during-capistrano-deployment',
                permanent: true,
            },
            {
                source:
                    '/devops/2014/06/02/symfony2-continuous-integration-and-deployment-with-wercker*',
                destination: '/blog/symfony2-continuous-integration-and-deployment-with-wercker',
                permanent: true,
            },
            {
                source: '/symfony2/2014/05/20/kernel-request-listeners-not-triggering-on-commands*',
                destination: '/blog/kernel-request-listeners-not-triggering-on-commands',
                permanent: true,
            },
            {
                source: '/symfony2/2014/04/30/authentication-choices-wsse-vs-jwt*',
                destination: '/blog/authentication-choices-wsse-vs-jwt',
                permanent: true,
            },
            {
                source: '/presentations/2014/04/29/from-student-to-lead-tech-and-back-again*',
                destination: '/blog/from-student-to-lead-tech-and-back-again',
                permanent: true,
            },
            {
                source: '/node/2014/04/25/parallel-requests-in-node-using-promises*',
                destination: '/blog/parallel-requests-in-node-using-promises',
                permanent: true,
            },
            {
                source:
                    '/devops/2014/04/16/simple-and-secure-iptables-configuration-for-webserver*',
                destination: '/blog/simple-and-secure-iptables-configuration-for-webserver',
                permanent: true,
            },
            {
                source:
                    '/technology/2014/03/31/my-thoughts-on-nosql-after-reading-a-book-about-it*',
                destination: '/blog/my-thoughts-on-nosql-after-reading-a-book-about-it',
                permanent: true,
            },
            {
                source: '/android/2014/03/23/flash-htc-one-google-play*',
                destination: '/blog/flash-htc-one-google-play',
                permanent: true,
            },
            {
                source:
                    '/symfony2/2014/01/29/missing-label-translations-in-sonata-admin-interface*',
                destination: '/blog/missing-label-translations-in-sonata-admin-interface',
                permanent: true,
            },
            {
                source:
                    '/symfony2/2014/01/29/symfony2-many-to-one-as-required-field-using-join-column*',
                destination: '/blog/symfony2-many-to-one-as-required-field-using-join-column',
                permanent: true,
            },
            {
                source:
                    '/symfony2/2014/01/28/using-lifecycle-callbacks-to-set-created-and-updated-fields*',
                destination: '/blog/using-lifecycle-callbacks-to-set-created-and-updated-fields',
                permanent: true,
            },
            {
                source: '/angular/2013/12/10/angular-order-by*',
                destination: '/blog/angular-order-by',
                permanent: true,
            },
            {
                source: '/devops/2013/12/09/saving-version-number-at-capifony-deploy*',
                destination: '/blog/saving-version-number-at-capifony-deploy',
                permanent: true,
            },
            {
                source: '/presentations/2013/12/04/consuming-restful-resources-with-angularjs*',
                destination: '/blog/consuming-restful-resources-with-angularjs',
                permanent: true,
            },
            {
                source: '/devops/2013/11/21/moving-changes-around-in-git*',
                destination: '/blog/moving-changes-around-in-git',
                permanent: true,
            },
            {
                source: '/angular/2013/11/05/deploying-angular-to-heroku*',
                destination: '/blog/deploying-angular-to-heroku',
                permanent: true,
            },
            {
                source: '/symfony2/2013/11/04/symfony2-deployment-target-configuration*',
                destination: '/blog/symfony2-deployment-target-configuration',
                permanent: true,
            },
            {
                source: '/symfony2/2013/10/25/symfony2-cache-clearing*',
                destination: '/blog/symfony2-cache-clearing',
                permanent: true,
            },
            {
                source: '/angular/2013/10/24/replacing-angular-resource-with-restangular*',
                destination: '/blog/replacing-angular-resource-with-restangular',
                permanent: true,
            },
            {
                source: '/symfony2/2013/10/23/restangular-with-symfony2*',
                destination: '/blog/restangular-with-symfony2',
                permanent: true,
            },
            {
                source: '/symfony2/2013/10/21/posting-data-to-symfony2*',
                destination: '/blog/posting-data-to-symfony2',
                permanent: true,
            },
        ];
    },
});
