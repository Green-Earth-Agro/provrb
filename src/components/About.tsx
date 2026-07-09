export function About() {
  return (
    <section id="about" className="py-24 sm:py-28" style={{ background: 'var(--color-provrb-surface-a20)' }}>
      <div className="provrb-container">
        <div data-reveal className="max-w-[38ch]">
          <p className="provrb-eyebrow">About</p>
          <h2
            className="mt-4 font-[var(--font-provrb-heading)] font-semibold tracking-tight text-provrb-primary"
            style={{ fontSize: 'var(--text-provrb-headline)', lineHeight: 1.15 }}
          >
            Turning sustainability claims into{' '}
            <span style={{ color: 'var(--color-provrb-gold-a0)' }}>trusted evidence.</span>
          </h2>
          <p className="mt-6 text-[1.05rem] leading-[1.65] text-provrb-muted">
            PROVRB is building the next generation of environmental compliance software using
            satellite intelligence, so a claim of "sustainable" is never the end of the
            conversation. It's the start of a question we can answer.
          </p>
        </div>
      </div>
    </section>
  )
}
