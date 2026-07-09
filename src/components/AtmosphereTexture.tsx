/**
 * Subtle depth layer for the always-dark bands (Hero, Contact, Footer):
 * fine film grain (feTurbulence) plus a soft off-center glow. Code-native,
 * zero image requests, in keeping with DESIGN.md's SVG/CSS illustration
 * system rather than raster imagery.
 */
export function AtmosphereTexture({ glow = 'gold' }: { glow?: 'gold' | 'green' }) {
  const glowColor = glow === 'gold' ? 'var(--color-provrb-gold-a20)' : 'var(--provrb-hero-overlay)'

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id={`provrb-grain-${glow}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={2} stitchTiles="stitch" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.05 0" />
        </filter>
        <radialGradient id={`provrb-glow-${glow}`} cx="82%" cy="18%" r="60%">
          <stop offset="0%" stopColor={glowColor} stopOpacity="0.16" />
          <stop offset="100%" stopColor={glowColor} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#provrb-glow-${glow})`} />
      <rect width="100%" height="100%" filter={`url(#provrb-grain-${glow})`} />
    </svg>
  )
}
