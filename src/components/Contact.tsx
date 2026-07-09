import { useState, type FormEvent } from 'react'
import { AtmosphereTexture } from './AtmosphereTexture'

type Status = 'idle' | 'submitting' | 'success' | 'error'

type Errors = Partial<Record<'name' | 'email' | 'company' | 'message', string>>

const BENEFITS = ['Onboarding in under a week', 'Dedicated compliance engineer', 'Priority pricing for founding customers']

function validate(data: Record<string, string>): Errors {
  const errors: Errors = {}
  if (!data.name.trim()) errors.name = 'Enter your name.'
  if (!data.email.trim()) {
    errors.email = 'Enter your work email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!data.company.trim()) errors.company = 'Enter your company name.'
  return errors
}

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})

  function fieldValue(form: FormData, key: string): string {
    const value = form.get(key)
    return typeof value === 'string' ? value : ''
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = {
      name: fieldValue(form, 'name'),
      email: fieldValue(form, 'email'),
      company: fieldValue(form, 'company'),
      message: fieldValue(form, 'message'),
    }

    const nextErrors = validate(data)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    const { supabase } = await import('../lib/supabase')
    const { error } = await supabase.from('contact_submissions').insert({
      name: data.name.trim(),
      email: data.email.trim(),
      company: data.company.trim(),
      message: data.message.trim() || null,
    })

    if (error) {
      setStatus('error')
      return
    }

    setStatus('success')
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-28"
      style={{ background: 'var(--provrb-band-bg)' }}
    >
      <AtmosphereTexture glow="gold" />
      <div className="provrb-container relative grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div data-reveal="left">
          <p className="provrb-eyebrow provrb-eyebrow-on-dark">Request early access</p>
          <h2
            className="mt-4 font-[var(--font-provrb-heading)] font-semibold tracking-tight"
            style={{ fontSize: 'var(--text-provrb-headline)', lineHeight: 1.15, color: 'var(--color-provrb-heading-on-dark)' }}
          >
            Prove your supply chain. From orbit.
          </h2>
          <p className="mt-5 max-w-[46ch] leading-[1.65] text-provrb-on-dark" style={{ opacity: 0.9 }}>
            Join the early access programme and start onboarding parcels ahead of EUDR
            enforcement.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2.5 text-[0.95rem] text-provrb-on-dark">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
                  <circle cx="8" cy="8" r="8" fill="var(--color-provrb-gold-a20)" opacity="0.2" />
                  <path d="M4.8 8.2l2 2 4.4-4.6" stroke="var(--color-provrb-gold-a20)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal="right" style={{ ['--reveal-delay' as string]: '100ms' }}>
          {status === 'success' ? (
            <div
              className="flex h-full flex-col items-center justify-center rounded-lg p-10 text-center"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)' }}
              role="status"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <circle cx="20" cy="20" r="20" fill="var(--color-provrb-gold-a20)" opacity="0.18" />
                <path d="M12 20.5l5.2 5.2L28 14" stroke="var(--color-provrb-gold-a20)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="mt-4 text-[1.1rem] font-bold" style={{ color: 'var(--color-provrb-heading-on-dark)' }}>
                Request received.
              </p>
              <p className="mt-2 max-w-[36ch] text-provrb-on-dark" style={{ opacity: 0.85 }}>
                We'll respond within one business day. No spam.
              </p>
            </div>
          ) : (
            <form
              noValidate
              onSubmit={(e) => void handleSubmit(e)}
              className="rounded-lg p-7 sm:p-8"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="provrb-field-label" style={{ color: 'var(--color-provrb-text-on-dark)' }}>
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="provrb-input"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name ? (
                    <span id="name-error" className="provrb-field-error">
                      {errors.name}
                    </span>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="email" className="provrb-field-label" style={{ color: 'var(--color-provrb-text-on-dark)' }}>
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="provrb-input"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email ? (
                    <span id="email-error" className="provrb-field-error">
                      {errors.email}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="company" className="provrb-field-label" style={{ color: 'var(--color-provrb-text-on-dark)' }}>
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="provrb-input"
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={errors.company ? 'company-error' : undefined}
                />
                {errors.company ? (
                  <span id="company-error" className="provrb-field-error">
                    {errors.company}
                  </span>
                ) : null}
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="provrb-field-label" style={{ color: 'var(--color-provrb-text-on-dark)' }}>
                  Message <span style={{ fontWeight: 500, opacity: 0.7 }}>(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="provrb-input"
                  placeholder="Tell us about your supply chain."
                />
              </div>

              {status === 'error' ? (
                <p className="mt-4 text-[0.85rem] font-semibold" style={{ color: 'var(--color-provrb-danger-a10)' }}>
                  Something went wrong. Please try again.
                </p>
              ) : null}

              <button type="submit" className="btn-gold mt-7 w-full" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Get in Touch'}
              </button>

              <p className="mt-4 text-center text-[0.8rem] text-provrb-on-dark" style={{ opacity: 0.7 }}>
                We'll respond within one business day. No spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
