const BADGES = ['Sustainable finance', 'Space & EO cluster', 'European regulation']

function PinMark() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="36" cy="36" r="34" stroke="var(--color-provrb-surface-a30)" strokeWidth="1" />
      <circle cx="36" cy="36" r="22" stroke="var(--color-provrb-surface-a30)" strokeWidth="1" strokeDasharray="1 6" />
      <path
        d="M36 20c-7 0-12.6 5.4-12.6 12.4 0 9.2 12.6 21.6 12.6 21.6s12.6-12.4 12.6-21.6C48.6 25.4 43 20 36 20z"
        fill="var(--color-provrb-primary-a10)"
      />
      <circle cx="36" cy="32" r="4.6" fill="var(--color-provrb-surface-a0)" />
    </svg>
  )
}

export function WhyLuxembourg() {
  return (
    <section className="py-24 sm:py-28">
      <div className="provrb-container grid gap-10 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-12">
        <div data-reveal>
          <PinMark />
        </div>

        <div data-reveal style={{ ['--reveal-delay' as string]: '80ms' }}>
          <p className="provrb-eyebrow">Why Luxembourg</p>
          <h2
            className="mt-4 font-[var(--font-provrb-heading)] font-semibold tracking-tight text-provrb-primary"
            style={{ fontSize: 'var(--text-provrb-headline)', lineHeight: 1.15 }}
          >
            Built in Europe's sustainable finance capital.
          </h2>
          <p className="mt-6 max-w-[60ch] text-[1.05rem] leading-[1.65] text-provrb-muted">
            Luxembourg is Europe's leading sustainable finance hub and home to one of the world's
            largest investment fund ecosystems. PROVRB is built where compliance, sustainable
            finance and climate innovation converge.
          </p>

          <ul className="mt-7 flex flex-wrap gap-3">
            {BADGES.map((badge) => (
              <li
                key={badge}
                className="rounded-full px-3.5 py-1.5 text-[0.8rem] font-bold"
                style={{
                  background: 'var(--color-provrb-surface-a20)',
                  color: 'var(--color-provrb-text-secondary)',
                  border: '1px solid var(--color-provrb-surface-a30)',
                }}
              >
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
