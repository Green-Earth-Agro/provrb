export function RadarOpticalIllustration() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-[440px]" aria-hidden="true">
      <svg viewBox="0 0 440 330" className="h-full w-full" fill="none">
        {/* optical panel (parcel classification) */}
        <g transform="translate(0 20)">
          <rect x="12" y="12" width="230" height="230" rx="10" fill="var(--color-provrb-surface-a20)" />
          <g stroke="var(--color-provrb-surface-a40)" strokeWidth="1">
            <path d="M12 92h230M12 172h230M92 12v230M172 12v230" />
          </g>
          <g fill="var(--color-provrb-primary-a30)" opacity="0.85">
            <rect x="16" y="16" width="72" height="72" rx="3" />
            <rect x="96" y="96" width="72" height="72" rx="3" />
            <rect x="176" y="16" width="62" height="72" rx="3" />
          </g>
          <rect x="96" y="16" width="72" height="72" rx="3" fill="var(--color-provrb-gold-a20)" opacity="0.9" />
          <rect x="16" y="176" width="72" height="62" rx="3" fill="var(--color-provrb-danger-a10)" opacity="0.55" />
        </g>

        {/* radar panel (sweep) */}
        <g transform="translate(196 0)">
          <rect x="12" y="12" width="230" height="230" rx="10" fill="var(--provrb-band-bg)" />
          <g stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none">
            <circle cx="127" cy="127" r="40" />
            <circle cx="127" cy="127" r="72" />
            <circle cx="127" cy="127" r="104" />
          </g>
          <line x1="127" y1="127" x2="127" y2="23" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <line x1="127" y1="127" x2="231" y2="127" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <path
            d="M127 127 L127 23 A104 104 0 0 1 200 54 Z"
            fill="var(--color-provrb-gold-a10)"
            opacity="0.28"
            style={{ transformOrigin: '127px 127px', animation: 'provrb-orbit-spin 5.5s linear infinite' }}
          />
          <circle cx="127" cy="127" r="4" fill="var(--color-provrb-gold-a20)" />
        </g>
      </svg>

      <div
        className="provrb-card-lift absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg px-4 py-2.5 text-center"
        style={{ background: 'var(--color-provrb-surface-a0)', boxShadow: '0 18px 36px rgba(42, 58, 42, 0.18)' }}
      >
        <p className="text-[0.7rem] font-bold uppercase tracking-wide text-provrb-primary">One engine</p>
      </div>
    </div>
  )
}
