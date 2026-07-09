import { AtmosphereTexture } from './AtmosphereTexture'
import { ThemeToggle } from './ThemeToggle'

function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">
      <path
        d="M3.8 5.6H1V16h2.8zM2.4 1c-.95 0-1.57.63-1.57 1.45C.83 3.26 1.43 3.9 2.36 3.9h.02c.97 0 1.57-.64 1.57-1.45C3.93 1.63 3.35 1 2.4 1M11.5 5.4c-1.5 0-2.17.83-2.55 1.4V5.6H6.13c.04.8 0 10.4 0 10.4h2.82v-5.8c0-.31.02-.62.11-.84.25-.62.8-1.26 1.75-1.26 1.24 0 1.73.94 1.73 2.32V16H15.6v-5.9c0-2.6-1.39-3.8-3.24-3.8z"
        fill="currentColor"
      />
    </svg>
  )
}

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'var(--provrb-footer-bg)', color: 'var(--provrb-footer-text)' }}
    >
      <AtmosphereTexture glow="green" />
      <div className="provrb-container relative flex flex-col gap-8 py-14 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p
            className="font-[var(--font-provrb-heading)] text-[1.15rem] font-semibold"
            style={{ color: 'var(--color-provrb-heading-on-dark)' }}
          >
            PROVRB
          </p>
          <p className="mt-2 max-w-[36ch] text-[0.9rem] leading-[1.6]">
            Environmental proof. Delivered from space.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-[0.9rem] sm:items-end">
          <div className="flex items-center gap-5">
            <a href="mailto:hello@provrb.com" className="transition-opacity hover:opacity-80">
              hello@provrb.com
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href="mailto:hello@provrb.com?subject=Privacy%20Policy"
              className="transition-opacity hover:opacity-80"
            >
              Privacy
            </a>
            <ThemeToggle />
          </div>
          <p className="text-[0.8rem] opacity-70">© {YEAR} PROVRB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
