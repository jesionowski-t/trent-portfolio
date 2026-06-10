import { Link } from 'react-router-dom'
import { Page } from '../components/Reveal.jsx'

export default function NotFound() {
  return (
    <Page>
      <section className="notfound">
        <div className="section__inner">
          <p className="kicker">404</p>
          <h1 className="notfound__title">
            This page doesn’t exist — <em className="accent-em">yet</em>.
          </h1>
          <Link className="link-arrow" to="/">
            Back home
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M19 12H5m6 6-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </Page>
  )
}
