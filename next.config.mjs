/**
 * Static export for GitHub Pages.
 * If repo is renamed to <user>.github.io, set basePath to '' (user site has no path prefix).
 */
const isProd = process.env.NODE_ENV === 'production'
// Set to '' if you rename the repo to <username>.github.io (no path prefix needed)
const repo = 'surajsambath'
const basePath = isProd ? `/${repo}` : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  images: { unoptimized: true },
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
}

export default nextConfig
