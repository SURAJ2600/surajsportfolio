'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled
          ? 'border-b border-line bg-bg/80 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm tracking-tight text-ink">
          <span className="text-accent">$</span> suraj.dev
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/resume.pdf`}
            download="Suraj-Sambath-Kumar-Resume.pdf"
            className="rounded-md border border-line px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="rounded-md border border-line px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  )
}
