import { Link } from 'react-router-dom'
import { footer, site } from '../data.js'
import Reveal, { AccentText } from './Reveal.jsx'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <Reveal>
          <p className="kicker kicker--light">Contact</p>
          <h2 className="footer__headline">
            <AccentText text={footer.headline} />
          </h2>
          <p className="footer__sub">{footer.sub}</p>
          <a className="footer__email" href={`mailto:${site.email}`}>
            {site.email}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Reveal>

        <div className="footer__grid">
          <div className="footer__col">
            <span className="footer__col-label">Navigate</span>
            <Link to="/">Home</Link>
            <Link to="/#work">Work</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="footer__col">
            <span className="footer__col-label">Connect</span>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={`mailto:${site.email}`}>Email</a>
          </div>
          <div className="footer__col">
            <span className="footer__col-label">Status</span>
            <span className="footer__col-text">{site.role}</span>
            <span className="footer__col-text">{site.company}</span>
            <span className="footer__col-text">{site.location}</span>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Designed & built by hand</span>
        </div>
      </div>
    </footer>
  )
}
