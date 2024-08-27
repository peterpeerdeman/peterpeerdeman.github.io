/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Hashbang',
  author: 'Peter Peerdeman',
  headerTitle: 'Hashbang',
  description: 'learn love share drive create',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://hashbang.nl',
  siteRepo: 'https://github.com/peterpeerdeman/peterpeerdeman.github.io',
  siteLogo: '/static/images/avatar.jpg',
  socialBanner: '/static/images/twitter-card.jpg',
  //mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'peter@peterpeerdeman.nl',
  github: 'https://github.com/peterpeerdeman',
  //twitter: 'https://twitter.com/peterpeerdeman',
  //facebook: 'https://facebook.com',
  //youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/peterpeerdeman',
  //threads: 'https://www.threads.net',
  //instagram: 'https://www.instagram.com',
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    ///umamiAnalytics: {
    // We use an env variable for this site to avoid other users cloning our analytics ID
    //umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
    // You may also need to overwrite the script if you're storing data in the US - ex:
    // src: 'https://us.umami.is/script.js'
    // Remember to add 'us.umami.is' in `next.config.js` as a permitted domain for the CSP
    //},
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // If you are hosting your own Plausible.
    //   src: '', // e.g. https://plausible.my-domain.com/js/script.js
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    googleAnalytics: {
      googleAnalyticsId: 'G-R62H3HSKNQ', // e.g. G-XXXXXXX
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    //provider: 'mailchimp',
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'disqus', // supported providers: giscus, utterances, disqus
    disqusConfig: {
      shortname: 'peterpeerdemanblog',
    },
  },
  search: {
    //   provider: 'kbar', // kbar or algolia
    //   kbarConfig: {
    //     searchDocumentsPath: 'search.json', // path to load documents to search
    //   },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
