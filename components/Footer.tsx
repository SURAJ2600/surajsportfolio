export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted md:flex-row">
        <span className="font-mono">
          © {new Date().getFullYear()} Suraj Sambath Kumar
        </span>
        <span className="font-mono">
          Built with Next.js · Tailwind · Deployed on GitHub Pages
        </span>
      </div>
    </footer>
  )
}
