import { useState } from 'react'
import { site } from '../data.js'

// Posts through FormSubmit's AJAX endpoint — no backend needed.
// NOTE: the first submission triggers a one-time activation email
// to site.email; click the link in it to start receiving messages.
export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    if (data._honey) return // bot trap
    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: `Portfolio contact — ${data.name}`,
          _template: 'table',
        }),
      })
      if (!res.ok) throw new Error(`status ${res.status}`)
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="cform cform--done" role="status">
        <p className="cform__ok">
          <span aria-hidden="true">●</span> Message sent
        </p>
        <p className="cform__ok-sub">Thanks — I’ll get back to you soon.</p>
        <button className="btn" type="button" onClick={() => setStatus('idle')}>
          Send another
        </button>
      </div>
    )
  }

  return (
    <form className="cform" onSubmit={onSubmit}>
      <div className="cform__row">
        <div className="cform__field">
          <label htmlFor="cf-name">Name</label>
          <input id="cf-name" name="name" type="text" required autoComplete="name" placeholder="Jane Doe" />
        </div>
        <div className="cform__field">
          <label htmlFor="cf-email">Email</label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" />
        </div>
      </div>
      <div className="cform__field">
        <label htmlFor="cf-message">Message</label>
        <textarea id="cf-message" name="message" rows="5" required placeholder="What should we build?" />
      </div>
      {/* honeypot */}
      <input type="text" name="_honey" tabIndex="-1" autoComplete="off" className="cform__honey" aria-hidden="true" />

      <div className="cform__foot">
        <button className="btn btn--solid" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
          <span aria-hidden="true">→</span>
        </button>
        {status === 'error' && (
          <p className="cform__err" role="alert">
            Something broke — email me directly at{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        )}
      </div>
    </form>
  )
}
