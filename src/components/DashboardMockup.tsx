const PARCELS = [1, 1, 1, 2, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 3, 1]
const STATUS_FILL: Record<number, string> = {
  1: 'var(--color-provrb-primary-a30)',
  2: 'var(--color-provrb-gold-a20)',
  3: 'var(--color-provrb-danger-a10)',
}

export function DashboardMockup() {
  return (
    <div
      className="provrb-media rounded-lg p-5"
      style={{
        background: 'var(--color-provrb-surface-a0)',
        border: '1px solid var(--color-provrb-surface-a30)',
        boxShadow: '0 16px 30px rgba(42, 58, 42, 0.07)',
      }}
      aria-hidden="true"
    >
      <div className="flex items-center justify-between">
        <span className="font-[var(--font-provrb-heading)] text-[0.95rem] font-semibold text-provrb-primary">
          PROVRB
        </span>
        <span className="provrb-eyebrow !text-[0.6rem]">Overview</span>
      </div>

      <div className="mt-4 grid grid-cols-[1fr_auto] gap-4">
        <div className="grid grid-cols-6 gap-1.5">
          {PARCELS.map((status, i) => (
            <span
              key={i}
              className="aspect-square rounded-[3px]"
              style={{ background: STATUS_FILL[status], opacity: status === 1 ? 0.85 : 1 }}
            />
          ))}
        </div>

        <div className="flex flex-col items-center justify-center">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <circle cx="28" cy="28" r="24" stroke="var(--color-provrb-surface-a30)" strokeWidth="6" />
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="var(--color-provrb-primary-a20)"
              strokeWidth="6"
              strokeDasharray={`${2 * Math.PI * 24 * 0.92} ${2 * Math.PI * 24}`}
              strokeLinecap="round"
              transform="rotate(-90 28 28)"
            />
          </svg>
          <span className="mt-1 text-[0.68rem] font-bold text-provrb-primary">92% verified</span>
        </div>
      </div>

      <div className="mt-5 flex items-end gap-1" style={{ height: 34 }}>
        {[40, 55, 48, 62, 58, 70, 66, 78, 74, 88].map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-t-[2px]"
            style={{ height: `${h}%`, background: 'var(--color-provrb-primary-a40)' }}
          />
        ))}
      </div>
      <div className="mt-1.5 flex items-center justify-between text-[0.66rem] text-provrb-muted">
        <span>24,310 ha monitored</span>
        <span>Updated 3h ago</span>
      </div>
    </div>
  )
}
