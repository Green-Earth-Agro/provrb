import { useEffect } from 'react'

/**
 * Wires the `[data-reveal]` CSS system in index.css: observes every element
 * carrying the attribute and adds `.is-visible` once it enters the viewport.
 * Unobserves after the first reveal so it never re-triggers on re-scroll.
 */
export function useReveal(deps: readonly unknown[] = []) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')

    if (elements.length === 0) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
