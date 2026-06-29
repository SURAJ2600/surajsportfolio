'use client'

import { useState } from 'react'
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { profile } from '@/lib/data'

export function Hero() {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="bg-grid mask-radial absolute inset-0 -z-10" />
      <div
        className="absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, #7cf3a0, transparent)' }}
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div className="animate-fade-up">
          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Building Android
            <br />
            <span className="text-muted">that runs at</span>
            <br />
            <span className="cursor text-accent">scale</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted md:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2.5 font-mono text-sm text-bg transition-colors hover:bg-accent"
            >
              See my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-ink"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-ink"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-ink"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-in">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent/10 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-panel">
            {imgFailed && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center font-mono text-xs text-muted">
                <span className="text-center">
                  add your photo at
                  <br />
                  <code className="text-accent">/public/profile.jpg</code>
                </span>
              </div>
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/profile.jpg`}
              alt={profile.name}
              className="absolute inset-0 h-full w-full object-cover"
              onError={() => setImgFailed(true)}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 font-mono text-xs text-ink/80">
              <div className="flex items-center justify-between">
                <span>{profile.name.split(' ')[0]}.kt</span>
                <span className="text-accent">● live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
