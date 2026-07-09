import { DashboardMockup } from './DashboardMockup'

const STEPS = [
  {
    index: '01',
    title: 'Upload farm boundary',
    body: 'Import polygons, GeoJSON or KML. Bulk-onboard entire supplier networks in minutes.',
  },
  {
    index: '02',
    title: 'Continuous satellite monitoring',
    body: 'PROVRB observes every parcel through Sentinel-1 radar and Sentinel-2 optical imagery.',
  },
  {
    index: '03',
    title: 'Audit-ready reports',
    body: 'Generate regulator-aligned evidence on demand for procurement, ESG and audit teams.',
  },
]

const OUTPUTS = [
  { label: 'Deforestation alerts', status: 'Live' },
  { label: 'Land-use verification', status: 'Live' },
  { label: 'Sustainability evidence', status: 'Live' },
  { label: 'Carbon monitoring', status: 'Soon' },
]

export function Solution() {
  return (
    <section id="solution" className="py-24 sm:py-28">
      <div className="provrb-container">
        <div data-reveal className="max-w-[46ch]">
          <p className="provrb-eyebrow">Solution</p>
          <h2
            className="mt-4 font-[var(--font-provrb-heading)] font-semibold tracking-tight"
            style={{ fontSize: 'var(--text-provrb-headline)', lineHeight: 1.15 }}
          >
            <span className="text-provrb-muted line-through decoration-[1.5px]">
              Today companies say "we're sustainable."
            </span>
            <br />
            <span className="text-provrb-primary">PROVRB asks: can you prove{' '}it?</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-reveal="left" className="flex flex-col">
            <p className="provrb-eyebrow">One workflow</p>
            <h3 className="mt-3 text-[1.15rem] font-bold text-provrb-primary">
              From boundary to regulator-ready evidence.
            </h3>

            <ol className="mt-8 flex flex-col">
              {STEPS.map((step, i) => (
                <li key={step.title} className="relative flex gap-5 pb-9 last:pb-0">
                  {i < STEPS.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute left-[15px] top-9 h-[calc(100%-1.6rem)] w-px"
                      style={{ background: 'var(--color-provrb-surface-a30)' }}
                    />
                  ) : null}
                  <span
                    className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[0.75rem] font-bold"
                    style={{ background: 'var(--color-provrb-surface-a20)', color: 'var(--color-provrb-primary-a10)' }}
                  >
                    {step.index}
                  </span>
                  <div>
                    <p className="font-bold text-provrb-primary">{step.title}</p>
                    <p className="mt-1 max-w-[42ch] leading-[1.6] text-provrb-muted">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div data-reveal="right" className="flex flex-col gap-6">
            <DashboardMockup />

            <div
              className="rounded-lg p-5"
              style={{ background: 'var(--color-provrb-surface-a20)', border: '1px solid var(--color-provrb-surface-a30)' }}
            >
              <p className="provrb-eyebrow">Sample outputs</p>
              <p className="mt-1 text-[1.02rem] font-bold text-provrb-primary">
                Evidence your auditors can rely on.
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {OUTPUTS.map((output) => (
                  <li key={output.label} className="flex items-center justify-between text-[0.92rem]">
                    <span className="font-semibold text-provrb-primary">{output.label}</span>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[0.68rem] font-bold uppercase tracking-wide"
                      style={
                        output.status === 'Live'
                          ? { background: 'var(--color-provrb-success-a20)', color: 'var(--color-provrb-success-a0)' }
                          : { background: 'var(--color-provrb-surface-a30)', color: 'var(--color-provrb-text-muted)' }
                      }
                    >
                      {output.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
