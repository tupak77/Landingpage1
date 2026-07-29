import { useState, type FormEvent } from 'react'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function SignupForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!EMAIL_RE.test(email.trim())) {
      setStatus('error')
      return
    }
    setStatus('success')
  }

  return (
    <section className="signup" id="signup">
      <div className="container signup__inner">
        <h2 className="section__title">Get early access</h2>
        <p className="signup__subtitle">
          Join the beta and be the first to launch with Nimbus.
        </p>

        {status === 'success' ? (
          <p className="signup__success" role="status">
            🎉 You&apos;re on the list! We&apos;ll be in touch soon.
          </p>
        ) : (
          <form className="signup__form" onSubmit={handleSubmit} noValidate>
            <label className="visually-hidden" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              className="signup__input"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status === 'error') setStatus('idle')
              }}
              aria-invalid={status === 'error'}
            />
            <button className="btn btn--primary" type="submit">
              Notify me
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="signup__error" role="alert">
            Please enter a valid email address.
          </p>
        )}
      </div>
    </section>
  )
}
