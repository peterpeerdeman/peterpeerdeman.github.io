---
title: 'Gatsby RSS feed with images compatible with mailchimp newsletter'
date: '2021-02-22'
tags: ['node', 'ssr']
draft: false
---

As I've been playing around with SSR, Gatsby and starting yet [another blog (about coffee this time)](https://snoffeecob.com), I thought it would be a nice experiment to start building an email-list with Mailchimp while I was at it. There is this cool feature that automatically generates newsletters based on RSS feeds and I decided to give that a go.

The first logical place to get started is of course the [Gatsby "Adding an RSS feed" howto guide](https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-an-rss-feed/). This works like a charm, but for my email newsletter the image is a must have.

There were a couple of caveats I ran into:

-   You have to add a custom xml namespace in the setup options to support `<media:content>` tags in your feed, as defined by the [rssboard](https://www.rssboard.org/media-rss)
-   The query should contain a reference to the image, I (re)used a `childImageSharp` from one of the pages where I render the blog images.
-   Please note that images in queries in `gatsby-config.js` somehow don't automatically generate the images to your build folder, like the queries do in the templates or pages folders. I ended up reusing the 400 size images I used in my blog-list.
-   In the `serialize` portion each rss item gets rendered, there are two custom elements defined. one for the HTML content and one for the aforementioned image.

If you finished setting up this configuration you can follow [the mailchimp guide](https://mailchimp.com/help/share-your-blog-posts-with-mailchimp/) for setting up RSS based newsletters 💪

I ended up with the something like the following plugin code in the `gatsby-config.js`:

```
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        setup: options => ({
          ...options,
          custom_namespaces: {
            media: 'https://www.rssboard.org/media-rss',
          },
        }),
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                const featuredImage = edge.node.frontmatter.img

                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [
                    { 'content:encoded': edge.node.html },
                    featuredImage && {
                      'media:content': {
                        _attr: {
                          url:
                            site.siteMetadata.siteUrl +
                            featuredImage.childImageSharp.fluid.src,
                          medium: 'image',
                        },
                      },
                    },
                  ],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                        img {
                            childImageSharp {
                                fluid(maxWidth: 400) {
                                    aspectRatio
                                    base64
                                    sizes
                                    src
                                    srcSet
                                }
                            }
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'RSS Feed',
            match: '^/blog/',
          },
        ],
      },
    },
  ],
}
```
