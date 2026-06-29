import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { skills } from '@/lib/data'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeader index="03" title="Skills" subtitle="The stack I reach for." />
      </Reveal>

      <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s, idx) => (
          <Reveal key={s.group} delay={idx * 40}>
            <div className="h-full bg-bg p-5">
              <div className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
                {s.group}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-line px-2 py-1 text-xs text-ink/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
