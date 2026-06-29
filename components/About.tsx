import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

const facts = [
  { label: 'Years building Android', value: '10+' },
  { label: 'Crash-free sessions lift', value: '97 → 99.6%' },
  { label: 'Cold-start reduction', value: '−30%' },
  { label: 'CI build-time cut', value: '−15%' },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeader index="01" title="About" subtitle="A platform engineer who ships." />
      </Reveal>

      <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
        <Reveal delay={100}>
          <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
            <p>
              I&apos;ve spent the last decade going deep on Android — from a junior dev in Kerala
              shipping client work, to owning core platform systems at{' '}
              <span className="text-ink">Mindvalley</span> serving millions of users.
            </p>
            <p>
              My focus is the <span className="text-ink">infrastructure layer</span>: media
              playback, performance, CI/CD, app architecture. The kind of work that doesn&apos;t
              ship as a feature, but every feature depends on.
            </p>
            <p>
              I care about <span className="text-ink">measurable outcomes</span> — crash rates,
              cold-start times, build durations — and I work across{' '}
              <span className="text-ink">Kotlin Multiplatform, React Native, and Next.js / Node.js</span>{' '}
              when the product needs it.
            </p>
            <p>
              Lately I&apos;ve been leaning hard into{' '}
              <span className="text-ink">AI-assisted engineering</span> — building team workflows
              with <span className="text-ink">Claude Code</span> and{' '}
              <span className="text-ink">Cursor</span>, writing custom agents, and standardizing
              how my team ships Android with AI in the loop.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
            {facts.map((f) => (
              <div key={f.label} className="bg-bg p-5">
                <div className="font-mono text-2xl font-semibold text-accent">{f.value}</div>
                <div className="mt-1 text-xs text-muted">{f.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
