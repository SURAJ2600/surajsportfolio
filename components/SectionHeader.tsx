export function SectionHeader({
  index,
  title,
  subtitle,
}: {
  index: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-12">
      <div className="mb-3 flex items-center gap-3">
        <span className="font-mono text-xs text-accent">{index}</span>
        <span className="h-px w-12 bg-line" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted">{title}</span>
      </div>
      {subtitle && (
        <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          {subtitle}
        </h2>
      )}
    </div>
  )
}
