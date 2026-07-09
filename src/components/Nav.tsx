import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'Solution', href: '#solution' },
  { label: 'Technology', href: '#technology' },
  { label: 'Markets', href: '#markets' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Mark({ light }: { light: boolean }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <rect width="26" height="26" rx="6" fill={light ? 'rgba(255,255,255,0.14)' : 'var(--color-provrb-primary-a0)'} />
      <ellipse
        cx="13"
        cy="14.2"
        rx="8.1"
        ry="4.3"
        stroke="var(--color-provrb-gold-a20)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeDasharray="0.6 4.6"
        transform="rotate(-22 13 14.2)"
      />
      <circle cx="19.1" cy="8.7" r="1.7" fill="var(--color-provrb-gold-a20)" />
    </svg>
  )
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const ticking = useRef(false)

  useEffect(() => {
    function onScroll() {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 64)
        ticking.current = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const light = !scrolled && !menuOpen

  return (
    <header
      className="provrb-nav-shell fixed inset-x-0 top-0 z-50"
      style={{
        backgroundColor: scrolled || menuOpen ? 'var(--color-provrb-surface-a0)' : 'transparent',
        borderBottom: scrolled || menuOpen ? '1px solid var(--color-provrb-surface-a30)' : '1px solid transparent',
        boxShadow: scrolled ? '0 16px 30px rgba(42, 58, 42, 0.07)' : 'none',
      }}
    >
      <a href="#top" className="provrb-skip-link">
        Skip to main content
      </a>
      <nav className="provrb-container flex h-[64px] items-center justify-between" aria-label="Primary">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-[var(--font-provrb-heading)] text-[1.15rem] font-semibold tracking-tight"
          style={{ color: light ? 'var(--color-provrb-text-on-dark)' : 'var(--color-provrb-text-primary)' }}
        >
          <Mark light={light} />
          PROVRB
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="provrb-nav-link text-[0.9rem] font-semibold"
                style={!light ? undefined : { color: 'var(--color-provrb-text-on-dark)' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-gold hidden lg:inline-block !text-[0.85rem] !py-[0.65rem] !px-[1.2rem]">
          Request Early Access
        </a>

        <button
          type="button"
          className="btn-icon lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="provrb-mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
          style={{ color: light ? 'var(--color-provrb-text-on-dark)' : 'var(--color-provrb-primary-a10)' }}
        >
          {menuOpen ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
        </button>
      </nav>

      {menuOpen ? (
        <div
          id="provrb-mobile-menu"
          className="border-t lg:hidden"
          style={{ borderColor: 'var(--color-provrb-surface-a30)', background: 'var(--color-provrb-surface-a0)' }}
        >
          <ul className="provrb-container flex flex-col gap-1 py-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-[1rem] font-semibold"
                  style={{ color: 'var(--color-provrb-text-primary)' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-gold block text-center">
                Request Early Access
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
