import { ChevronDown } from 'lucide-react'
import { HeroIllustration } from './HeroIllustration'

const PROOF_POINTS = ['EUDR ready', 'Sentinel-1 · Sentinel-2', 'ESA-backed technology']

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-[104px]"
      style={{ background: 'var(--provrb-band-bg)' }}
    >
      {/* ambient grid texture, brand-tinted, purely decorative */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="provrb-grid" width="46" height="46" patternUnits="userSpaceOnUse">
            <path d="M46 0H0V46" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#provrb-grid)" />
      </svg>

      <div className="provrb-container relative grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div data-reveal="left">
          {/* <span className="provrb-proof-chip">Now onboarding early access partners — EUDR 2025</span> */}

          <h1
            className="mt-6 font-[var(--font-provrb-heading)] font-semibold tracking-tight"
            style={{
              fontSize: 'var(--text-provrb-display)',
              lineHeight: 1.05,
              color: 'var(--color-provrb-heading-on-dark)',
            }}
          >
            Environmental proof.
            <br />
            <span style={{ color: 'var(--color-provrb-gold-a20)' }}>Delivered from space.</span>
          </h1>

          <p
            className="mt-6 max-w-[52ch] text-[1.1rem] leading-[1.65] text-provrb-on-dark"
            style={{ opacity: 0.92 }}
          >
            Europe has made environmental proof a legal requirement. PROVRB transforms satellite
            intelligence into continuous, audit-ready compliance for global agricultural supply
            chains.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-gold">
              Request Early Access
            </a>
            <a href="#solution" className="btn-outline-white">
              Learn More
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-3">
            {PROOF_POINTS.map((point) => (
              <li key={point} className="provrb-proof-chip !min-h-0 !py-2 !text-[0.78rem]">
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal="image" style={{ ['--reveal-delay' as string]: '140ms' }}>
          <HeroIllustration />
        </div>
      </div>

      <a
        href="#problem"
        className="provrb-scroll-cue provrb-container relative hidden pb-10 lg:flex"
        aria-label="Scroll to next section"
      >
        <span className="text-[0.7rem] font-bold uppercase tracking-[0.14em]">Scroll</span>
        <ChevronDown size={14} strokeWidth={1.8} />
      </a>
    </section>
  )
}
