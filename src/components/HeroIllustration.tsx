export function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]" aria-hidden="true">
      {/* Orbit rings */}
      <svg
        className="absolute inset-0 h-full w-full"
        style={{ animation: 'provrb-orbit-spin 46s linear infinite' }}
        viewBox="0 0 400 400"
        fill="none"
      >
        <ellipse
          cx="200"
          cy="200"
          rx="188"
          ry="96"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="1"
          transform="rotate(-18 200 200)"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="150"
          ry="150"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
          strokeDasharray="2 10"
        />
      </svg>

      {/* Satellite dot travelling the outer ring */}
      <svg
        className="absolute inset-0 h-full w-full"
        style={{ animation: 'provrb-orbit-spin 14s linear infinite' }}
        viewBox="0 0 400 400"
        fill="none"
      >
        <g transform="rotate(-18 200 200)">
          <circle cx="388" cy="200" r="5" fill="var(--color-provrb-gold-a20)" />
          <circle cx="388" cy="200" r="10" fill="var(--color-provrb-gold-a20)" opacity="0.22" />
        </g>
      </svg>

      {/* Earth */}
      <div
        className="absolute left-1/2 top-1/2 aspect-square w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 32% 28%, oklch(50% 0.092 131) 0%, oklch(34% 0.094 146) 46%, oklch(20% 0.03 264) 100%)',
          boxShadow: '0 40px 90px rgba(9, 20, 12, 0.55), inset -18px -14px 46px rgba(0,0,0,0.35)',
        }}
      >
        <svg viewBox="0 0 300 300" className="h-full w-full" fill="none">
          {/* land-parcel blobs */}
          <g fill="oklch(66% 0.078 131)" opacity="0.55">
            <path d="M96 78c18-10 40-6 48 8 7 12-2 24-18 27-19 4-38-2-44-16-4-9 2-14 14-19z" />
            <path d="M180 150c22-6 44 4 48 20 4 15-12 26-32 27-21 1-40-10-42-25-1-11 10-18 26-22z" />
            <path d="M74 190c14-8 32-4 38 8 5 10-3 20-16 23-15 3-30-3-34-14-3-8 3-13 12-17z" />
          </g>
          {/* faint parcel grid to read as "agricultural polygons" */}
          <g stroke="rgba(255,255,255,0.16)" strokeWidth="0.6">
            <path d="M40 120h220M40 150h220M40 180h220" />
            <path d="M90 60v220M150 60v220M210 60v220" />
          </g>
        </svg>
      </div>

      {/* Live monitoring chip */}
      <div
        className="provrb-hero-floating provrb-card-lift absolute -left-2 top-6 w-[168px] rounded-lg p-3 sm:-left-6"
        style={{
          background: 'var(--color-provrb-surface-a0)',
          boxShadow: '0 18px 36px rgba(42, 58, 42, 0.22)',
        }}
      >
        <p className="provrb-eyebrow !text-[0.62rem]">Live monitoring</p>
        <p className="mt-1 font-[var(--font-provrb-heading)] text-[1.5rem] font-semibold leading-none text-provrb-primary">
          12,482
        </p>
        <p className="text-[0.72rem] text-provrb-muted">parcels observed</p>
      </div>

      {/* Alert card */}
      <div
        className="provrb-hero-floating provrb-card-lift absolute -right-2 bottom-8 w-[196px] rounded-lg p-3 sm:-right-6"
        style={{
          background: 'var(--color-provrb-surface-a0)',
          boxShadow: '0 18px 36px rgba(42, 58, 42, 0.22)',
        }}
      >
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--color-provrb-danger-a10)' }} />
          <p className="text-[0.68rem] font-bold uppercase tracking-wide text-provrb-muted">Alert · 2h ago</p>
        </div>
        <p className="mt-1.5 text-[0.82rem] font-bold text-provrb-primary">Forest loss detected</p>
        <p className="text-[0.72rem] text-provrb-muted">Parcel #P-00214 · Côte d'Ivoire</p>
      </div>
    </div>
  )
}
