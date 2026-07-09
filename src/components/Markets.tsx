const MARKETS = [
  {
    name: 'Importers',
    tag: 'EUDR Compliance',
    body: 'Need EUDR compliance across cocoa, coffee, palm oil, rubber and beyond before goods clear customs.',
    status: 'Live',
  },
  {
    name: 'Investment Funds',
    tag: 'Impact Verification',
    body: 'Need verifiable evidence for ESG reporting and SFDR disclosures, not self-reported estimates.',
    status: 'Live',
  },
  {
    name: 'Carbon Markets',
    tag: 'Verification Infrastructure',
    body: 'Continuous monitoring and verification infrastructure for high-integrity credits.',
    status: 'Soon',
  },
]

export function Markets() {
  return (
    <section id="markets" className="py-24 sm:py-28" style={{ background: 'var(--color-provrb-surface-a10)' }}>
      <div className="provrb-container">
        <div data-reveal className="max-w-[50ch]">
          <p className="provrb-eyebrow">Market</p>
          <h2
            className="mt-4 font-[var(--font-provrb-heading)] font-semibold tracking-tight text-provrb-primary"
            style={{ fontSize: 'var(--text-provrb-headline)', lineHeight: 1.15 }}
          >
            One platform. Multiple regulation-driven markets.
          </h2>
        </div>

        <div className="mt-14 border-t" style={{ borderColor: 'var(--color-provrb-surface-a30)' }}>
          {MARKETS.map((market, i) => (
            <div
              key={market.name}
              data-reveal="line"
              style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
              className="flex flex-col gap-3 border-b py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
            >
              <div className="sm:w-[15ch] sm:shrink-0">
                <h3
                  className="font-[var(--font-provrb-heading)] text-[1.5rem] font-semibold text-provrb-primary"
                >
                  {market.name}
                </h3>
                <p className="mt-0.5 text-[0.85rem] font-bold" style={{ color: 'var(--color-provrb-gold-a0)' }}>
                  {market.tag}
                </p>
              </div>

              <p className="max-w-[46ch] leading-[1.6] text-provrb-muted sm:flex-1">{market.body}</p>

              <span
                className="w-fit shrink-0 rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide"
                style={
                  market.status === 'Live'
                    ? { background: 'var(--color-provrb-success-a20)', color: 'var(--color-provrb-success-a0)' }
                    : { background: 'var(--color-provrb-surface-a30)', color: 'var(--color-provrb-text-muted)' }
                }
              >
                {market.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
