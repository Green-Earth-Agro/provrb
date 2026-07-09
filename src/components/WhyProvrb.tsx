function PulseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M2 10.5h3.4l1.8-5.5 3 10 1.8-6.5H18"
        stroke="var(--color-provrb-primary-a10)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 2.2l6.4 2.3v4.6c0 4.3-2.7 7.5-6.4 8.7-3.7-1.2-6.4-4.4-6.4-8.7V4.5z"
        stroke="var(--color-provrb-primary-a10)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M7 10l2.1 2.1L13.4 8" stroke="var(--color-provrb-primary-a10)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.8" stroke="var(--color-provrb-primary-a10)" strokeWidth="1.6" />
      <path d="M2.2 10h15.6M10 2.2c2.4 2.1 3.7 5 3.7 7.8s-1.3 5.7-3.7 7.8c-2.4-2.1-3.7-5-3.7-7.8S7.6 4.3 10 2.2z" stroke="var(--color-provrb-primary-a10)" strokeWidth="1.6" />
    </svg>
  )
}

function LayersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2l7.5 4-7.5 4-7.5-4z" stroke="var(--color-provrb-primary-a10)" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M2.5 10.5L10 14.5l7.5-4M2.5 14.5L10 18.5l7.5-4" stroke="var(--color-provrb-primary-a10)" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

const REASONS = [
  { icon: PulseIcon, title: 'Continuous Monitoring', body: 'Not annual inspections. Every parcel, observed on a rolling cadence.' },
  { icon: ShieldIcon, title: 'Audit Ready', body: 'Reports generated continuously, aligned with EUDR and financial regulatory requirements.' },
  { icon: GlobeIcon, title: 'Global Coverage', body: 'Monitor agricultural supply chains anywhere on Earth.' },
  { icon: LayersIcon, title: 'Subscription SaaS', body: 'Priced per monitored site. Onboard an entire supplier network in a day.' },
]

export function WhyProvrb() {
  return (
    <section className="py-24 sm:py-28">
      <div className="provrb-container">
        <div data-reveal className="max-w-[46ch]">
          <p className="provrb-eyebrow">Why PROVRB</p>
          <h2
            className="mt-4 font-[var(--font-provrb-heading)] font-semibold tracking-tight text-provrb-primary"
            style={{ fontSize: 'var(--text-provrb-headline)', lineHeight: 1.15 }}
          >
            Built for the regulated era of sustainability.
          </h2>
        </div>

        <div
          className="mt-14 grid gap-x-10 gap-y-10 border-t pt-10 sm:grid-cols-2 lg:grid-cols-4"
          style={{ borderColor: 'var(--color-provrb-surface-a30)' }}
        >
          {REASONS.map((reason, i) => (
            <div key={reason.title} data-reveal="line" style={{ ['--reveal-delay' as string]: `${i * 80}ms` }}>
              <reason.icon />
              <h3 className="mt-3 font-bold text-provrb-primary">{reason.title}</h3>
              <p className="mt-2 leading-[1.6] text-provrb-muted">{reason.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
