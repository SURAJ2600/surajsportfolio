import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { profile } from '@/lib/data'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeader index="05" title="Contact" subtitle="Let&rsquo;s talk." />
      </Reveal>

      <Reveal delay={100}>
        <div className="rounded-2xl border border-line bg-panel/40 p-8 md:p-12">
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted md:text-xl">
            I&apos;m always open to chat about Android platform work, performance engineering, or
            interesting senior / staff opportunities. The fastest way to reach me is email.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center justify-between rounded-lg border border-line bg-bg p-4 transition-colors hover:border-accent"
            >
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-mono text-xs text-muted">Email</div>
                  <div className="text-sm text-ink">{profile.email}</div>
                </div>
              </div>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-lg border border-line bg-bg p-4 transition-colors hover:border-accent"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-mono text-xs text-muted">LinkedIn</div>
                  <div className="text-sm text-ink">in/surajsambath</div>
                </div>
              </div>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-lg border border-line bg-bg p-4 transition-colors hover:border-accent"
            >
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-mono text-xs text-muted">GitHub</div>
                  <div className="text-sm text-ink">@SURAJ2600</div>
                </div>
              </div>
            </a>
            <div className="flex items-center justify-between rounded-lg border border-line bg-bg p-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-mono text-xs text-muted">Based in</div>
                  <div className="text-sm text-ink">{profile.location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
