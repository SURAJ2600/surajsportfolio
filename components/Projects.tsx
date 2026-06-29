import { ArrowUpRight, Download } from 'lucide-react'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { projects } from '@/lib/data'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeader index="04" title="Projects" subtitle="Apps I&rsquo;ve shipped." />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((p, idx) => (
          <Reveal key={p.name} delay={idx * 80}>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-xl border border-line bg-panel/40 p-6 transition-all hover:border-accent/50 hover:bg-panel"
            >
              <div className="mb-3 flex items-start justify-between">
                <h3 className="text-lg font-semibold text-ink">{p.name}</h3>
                <ArrowUpRight className="h-4 w-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
              {p.downloads && (
                <div className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-muted">
                  <Download className="h-3 w-3" />
                  {p.downloads} downloads
                </div>
              )}
              <p className="flex-1 text-sm leading-relaxed text-muted">{p.tagline}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-line/60 px-2 py-0.5 font-mono text-[11px] text-ink/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
