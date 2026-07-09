import { RadarOpticalIllustration } from './RadarOpticalIllustration'

const SIGNALS = [
  {
    name: 'Sentinel-1',
    body: 'Radar imaging that sees through clouds and darkness. Every parcel, every week, regardless of weather.',
  },
  {
    name: 'Sentinel-2',
    body: 'High-resolution optical imagery for land-use classification and change detection.',
  },
]

export function Technology() {
  return (
    <section id="technology" className="py-24 sm:py-28" style={{ background: 'var(--color-provrb-surface-a20)' }}>
      <div className="provrb-container grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div data-reveal="left">
          <p className="provrb-eyebrow">Technology</p>
          <h2
            className="mt-4 font-[var(--font-provrb-heading)] font-semibold tracking-tight text-provrb-primary"
            style={{ fontSize: 'var(--text-provrb-headline)', lineHeight: 1.15 }}
          >
            Powered by European Earth Observation.
          </h2>
          <p className="mt-6 max-w-[48ch] text-[1.05rem] leading-[1.65] text-provrb-muted">
            PROVRB combines Sentinel-1 radar and Sentinel-2 optical imagery into one continuous
            monitoring engine capable of detecting deforestation, verifying land use, and
            supporting environmental compliance.
          </p>

          <span
            className="mt-7 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.78rem] font-bold"
            style={{ background: 'var(--color-provrb-surface-a0)', border: '1px solid var(--color-provrb-surface-a30)', color: 'var(--color-provrb-text-secondary)' }}
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path
                d="M6.5 1l1.4 3.3 3.6.3-2.7 2.4.8 3.5-3.1-1.9-3.1 1.9.8-3.5-2.7-2.4 3.6-.3z"
                fill="var(--color-provrb-gold-a10)"
              />
            </svg>
            Kickstarted through a European Space Agency programme
          </span>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {SIGNALS.map((signal) => (
              <div key={signal.name}>
                <p className="provrb-eyebrow">{signal.name}</p>
                <p className="mt-2 leading-[1.6] text-provrb-muted">{signal.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal="image" style={{ ['--reveal-delay' as string]: '120ms' }}>
          <RadarOpticalIllustration />
        </div>
      </div>
    </section>
  )
}
