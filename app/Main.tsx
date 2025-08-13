import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Image from '@/components/Image'

import Card from '@/components/Card'

import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { MDXLayoutRenderer } from 'pliny/mdx-components'

const MAX_DISPLAY = 10

export default function Home({ posts }) {
  const pinsData = posts.filter((blog) => {
    return blog.pinned == true && blog.images
  })

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <Image
            alt="Hashbang's Peter Peerdeman"
            src="/static/images/twitter-card.jpg"
            width={1024}
            height={312}
          />
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {pinsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={formatDate(d.date, siteMetadata.locale)}
                imgSrc={d.images[0]}
                href={`/blog/${d.slug}`}
                omitLabel={true}
              />
            ))}
          </div>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, body, tags } = post

            const rawBlurb = body.raw.substring(0, 600)
            const blurb = rawBlurb.replace(/\[(.*?)\]\(.*?\)/g, '$1')

            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {blurb}...
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog/page/3"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="More posts"
          >
            More Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm title="Support Hashbang, keep in touch 💌" />
        </div>
      )}
    </>
  )
}
