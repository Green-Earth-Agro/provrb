const PRESSURES = [
  {
    index: '01',
    title: 'EU Deforestation Regulation',
    body: 'No proof, no market access. Importers of cocoa, coffee, palm oil and rubber must demonstrate deforestation-free sourcing before goods clear customs.',
  },
  {
    index: '02',
    title: 'Sustainable Finance',
    body: 'Funds need verifiable impact. SFDR disclosures require evidence behind sustainability claims, not self-reported estimates.',
  },
  {
    index: '03',
    title: 'Carbon Markets',
    body: 'Buyers demand continuous evidence. High-integrity credits depend on monitoring that never stops between site visits.',
  },
]

export function Problem() {
  return (
    <section id="problem" className="py-24 sm:py-28" style={{ background: 'var(--color-provrb-surface-a10)' }}>
      <div className="provrb-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div data-reveal="left">
          <p className="provrb-eyebrow">The problem</p>
          <h2
            className="mt-4 font-[var(--font-provrb-heading)] font-semibold tracking-tight text-provrb-primary"
            style={{ fontSize: 'var(--text-provrb-headline)', lineHeight: 1.1 }}
          >
            Regulation changed everything.
          </h2>
          <p className="mt-6 max-w-[46ch] text-[1.05rem] leading-[1.65] text-provrb-muted">
            Today this proof relies on expensive consultants performing occasional site visits.
            That model does not scale to global supply chains under continuous regulatory
            scrutiny.
          </p>
        </div>

        <div className="border-t" style={{ borderColor: 'var(--color-provrb-surface-a30)' }}>
          {PRESSURES.map((pressure, i) => (
            <div
              key={pressure.title}
              data-reveal="line"
              style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
              className="flex gap-6 border-b py-8 sm:gap-10"
            >
              <span
                className="font-[var(--font-provrb-heading)] text-[1.75rem] font-semibold leading-none"
                style={{ color: 'var(--color-provrb-surface-a50)', borderColor: 'var(--color-provrb-surface-a30)' }}
              >
                {pressure.index}
              </span>
              <div>
                <h3 className="text-[1.05rem] font-bold text-provrb-primary">{pressure.title}</h3>
                <p className="mt-2 max-w-[52ch] leading-[1.6] text-provrb-muted">{pressure.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
