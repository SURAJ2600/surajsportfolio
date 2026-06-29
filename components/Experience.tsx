import { ArrowUpRight } from 'lucide-react'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { experience } from '@/lib/data'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeader index="02" title="Experience" subtitle="Where I&rsquo;ve worked." />
      </Reveal>

      <ol className="relative border-l border-line">
        {experience.map((job, idx) => (
          <Reveal key={job.company} delay={idx * 80}>
            <li className="relative pl-8 pb-12 last:pb-0">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-accent bg-bg" />
              <div className="mb-3">
                <a
                  href={job.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-xl font-semibold tracking-tight text-ink"
                >
                  {job.company}
                  <ArrowUpRight className="h-4 w-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </a>
                <div className="mt-2 space-y-0.5">
                  {job.roles.map((r) => (
                    <div
                      key={r.title + r.period}
                      className="flex flex-wrap items-baseline gap-x-3 text-sm"
                    >
                      <span className="text-ink/90">{r.title}</span>
                      <span className="font-mono text-xs text-muted">{r.period}</span>
                    </div>
                  ))}
                </div>
              </div>
              <ul className="space-y-2 text-sm leading-relaxed text-muted md:text-[15px]">
                {job.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-muted" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
