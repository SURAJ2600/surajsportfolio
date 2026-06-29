# surajsportfolio

Personal portfolio for **Suraj Sambath Kumar** — Senior Android Engineer at Mindvalley.

Live: https://suraj2600.github.io/surajsportfolio/

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

## Adding your photo

Drop a square-ish portrait at `public/profile.jpg`. It will appear in the hero — no code changes needed.

## Updating content

All copy lives in [`lib/data.ts`](./lib/data.ts). Edit it and push.

## Renaming the repo to `<username>.github.io`

If you want the URL to become `https://suraj2600.github.io/` (no path prefix), change the `repo` constant in [`next.config.mjs`](./next.config.mjs) to an empty string, then rename the GitHub repo to `suraj2600.github.io`.

## Archive

The previous 2019 HTML template is preserved under [`archive/`](./archive) for reference. It is not deployed.
