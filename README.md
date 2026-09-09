# Hashbang

Source for [hashbang.nl](https://hashbang.nl) — Peter Peerdeman's blog about
development, devops, home automation and whatever else is on the bench.

A Next.js App Router site: MDX posts compiled by [Contentlayer](https://www.contentlayer.dev/),
styled with Tailwind, deployed on Vercel.

## Acknowledgements

This site is a fork of **[timlrx/tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)**
by [Timothy Lin](https://github.com/timlrx) — an excellent, genuinely
feature-complete Tailwind + Next.js blogging template. Nearly all of the layout,
theming and content pipeline here is his work; this fork mostly adds posts, a
few layout tweaks and a custom CSP.

The template is MIT licensed and the original [LICENSE](LICENSE) is retained
unchanged. If you are looking for a blog starter, go to the upstream repo rather
than forking this one — you want the template, not someone's blog posts.

Upstream is wired up as a git remote so changes can be pulled in; see
[Syncing with upstream](#syncing-with-upstream).

## Prerequisites

| Tool | Version     | Notes                                                     |
| ---- | ----------- | --------------------------------------------------------- |
| Node | 20 or newer | The devcontainer pins 20; 24 is what this is developed on |
| Yarn | 3.6.1       | Pinned via `packageManager`, vendored in `.yarn/releases` |

Yarn does not need a separate install. Enable Corepack once and the pinned
version resolves itself:

```bash
corepack enable
```

## Getting started

```bash
git clone git@github.com:peterpeerdeman/peterpeerdeman.github.io.git
cd peterpeerdeman.github.io
yarn
cp .env.example .env     # only needed for comments and the newsletter form
yarn dev
```

The site comes up on <http://localhost:3000>. Contentlayer watches `data/` and
regenerates `.contentlayer/` on change, so new and edited posts hot-reload
without a restart.

`.env` is gitignored and holds real API keys. Everything in it is optional for
local development — without it, Giscus comments and the newsletter signup are
inert, and the rest of the site works normally.

> **Install warning you can ignore:** `sharp` fails to build from source
> ("Please add node-addon-api to your dependencies"). It is only used by Next's
> image optimizer, and nothing in local development depends on it.

## Scripts

| Command        | What it does                                                                            |
| -------------- | --------------------------------------------------------------------------------------- |
| `yarn dev`     | Dev server with hot reload on port 3000                                                 |
| `yarn build`   | Production build, then generates `feed.xml` and the sitemap via `scripts/postbuild.mjs` |
| `yarn serve`   | Serves an existing production build                                                     |
| `yarn lint`    | ESLint with `--fix` across app, components, layouts, scripts                            |
| `yarn analyze` | Build with the bundle analyzer attached                                                 |

A static export is also possible — `EXPORT=1 UNOPTIMIZED=1 yarn build` writes to
`out/` — but production does not use it. See [Deployment](#deployment).

## Writing a post

Posts are MDX files in `data/blog/`. The filename becomes the slug, so
`data/blog/some-post-title.mdx` publishes to `/blog/some-post-title`.

```mdx
---
title: 'E-ink domotics dashboard using Home Assistant, puppet and FBInk on a Kobo Clara'
date: '2026-09-05'
category: internetofthings
tags: ['iot', 'homeassistant', 'eink', 'domotics']
draft: false
images: ['/assets/images/2026-09-05-kobo-clara-dashboard.jpg']
---

Body copy starts here.
```

Only `title` and `date` are required. The full set of fields is defined in
[`contentlayer.config.ts`](contentlayer.config.ts): `tags`, `lastmod`, `draft`,
`summary`, `images`, `authors`, `layout`, `bibliography`, `canonicalUrl`,
`category`, `description` and `pinned`.

Some conventions this fork uses:

- **Images** live in `public/assets/images/`, named by post date, and are
  referenced as `/assets/images/...`.
- **`draft: true`** keeps a finished file out of production while leaving it
  visible in dev.
- **`_drafts/`** holds pieces actually queued for publication. They are outside
  `data/`, so Contentlayer ignores them entirely until moved.
- **`_archive/`** holds finished writing that is not queued — see
  [`_archive/README.md`](_archive/README.md).
- **Cross-links** between posts use relative MDX paths, e.g.
  `[the wifi stick mod](./growatt-wifi-stick-modification-to-make-uart-work-with-esp-home.mdx)`.

Tag pages and counts in `app/tag-data.json` are generated at build time by
`contentlayer.config.ts` — that file is committed but should never be hand-edited.

## Project layout

```
app/            Next.js App Router pages, routes and metadata
components/     Shared React components
layouts/        Post and listing layouts (PostLayout, ListLayoutWithTags, …)
css/            Tailwind entrypoint and prose styles
data/
  blog/         The posts — MDX, one file per post
  authors/      Author profiles, plus the privacy and terms pages
  siteMetadata.js   Title, URL, author, analytics, comments, newsletter
  headerNavLinks.ts Top navigation
  projectsData.ts   Cards on /projects
public/         Static assets served from the site root
scripts/        postbuild.mjs (RSS + sitemap), rss.mjs
_drafts/        Queued, unpublished writing (not built)
_archive/       Finished writing that is not queued (not built)
```

## Configuration touchpoints

- [`data/siteMetadata.js`](data/siteMetadata.js) — site title, URL, author,
  locale, and which analytics / comments / newsletter providers are active.
- [`data/headerNavLinks.ts`](data/headerNavLinks.ts) — top nav.
- [`next.config.js`](next.config.js) — a hand-tuned Content Security Policy
  that diverges from upstream to allow Google Tag Manager, Giscus, Vimeo and
  YouTube embeds. Widen it deliberately when adding an embed from a new host.

## Code quality

Husky runs `lint-staged` on pre-commit: ESLint `--fix` on JS/TS, Prettier on
everything else it touches. The hook installs itself on `yarn` via the `prepare`
script — no setup step needed.

## Deployment

**Vercel deploys this site**, automatically on push to `main`. There is no
GitHub Actions workflow and none is needed.

Production runs as a real Next.js server, not a static export, so the image
optimization API is live. That matters when triaging Next.js security
advisories: the ones that require a running server do apply here.

## Syncing with upstream

The template remote is already configured:

```bash
git fetch timlrx
git merge timlrx/main
```

Conflicts are usually confined to three files and are quick to resolve:

- `package.json` — take upstream's dependency versions unless a local bump is newer.
- `yarn.lock` — take upstream, then `yarn install` to regenerate.
- `app/tag-data.json` — take either side; the build regenerates it.

Two things to check after a merge:

- `next.config.js` — the local CSP and `trailingSlash: false` must survive.
  Upstream sets `trailingSlash: true`, which would append a slash to every URL
  on the site while `sitemap.xml` and `feed.xml` keep emitting slashless ones.
- Run both `yarn build` and `yarn dev`, and open the browser console. Hydration
  mismatches from the Headless UI components do not fail the build.

## License

The template is MIT © Timothy Lin — see [LICENSE](LICENSE). Blog post content
under `data/blog/` is © Peter Peerdeman.
