# surajsambath

This is my personal portfolio. I'm **Suraj Sambath Kumar**, a Senior Android Engineer at Mindvalley.

I built it with Next.js on purpose — I'm planning to grab my own domain soon, and going with Next.js meant the move would be painless when that day comes. Honestly, it was also just a fun excuse to learn something new outside of Android.

It's open source, so feel free to clone it, make it your own, and ship your own version.

Live: https://suraj2600.github.io/surajsambath/

## Stack

- [Next.js 15](https://nextjs.org) (App Router, static export)
- [Tailwind CSS](https://tailwindcss.com)
- [lucide-react](https://lucide.dev) icons
- Deployed to **GitHub Pages** via GitHub Actions

## Local dev

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build / preview the static export

```bash
npm run build
npx serve out
```

## Deploy

Push to `master`. The `.github/workflows/deploy.yml` action builds and publishes to GitHub Pages automatically.

> First-time setup: in the repo on GitHub, go to **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Make it yours

Cloning this? Swap the photo at `public/profile.jpg`, edit all the copy in [`lib/data.ts`](./lib/data.ts), and push.

## Custom domain

When I move to my own domain, set it under **Settings → Pages → Custom domain** and clear the `repo` base path in [`next.config.mjs`](./next.config.mjs).

## Archive

My original 2019 HTML portfolio lives in [`archive/`](./archive) for old times' sake — it isn't deployed.
