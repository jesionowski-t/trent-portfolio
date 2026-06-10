import { Link } from 'react-router-dom'
import { footer, site } from '../data.js'
import Reveal, { AccentText } from './Reveal.jsx'
import ContactForm from './ContactForm.jsx'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <div className="footer__main">
          <Reveal>
            <div className="footer__left">
              <p className="kicker kicker--light">Contact</p>
              <h2 className="footer__headline">
                <AccentText text={footer.headline} />
              </h2>
              <p className="footer__sub">{footer.sub}</p>
              <a className="footer__email" href={`mailto:${site.email}`}>
                {site.email}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <div className="footer__social">
                <a className="btn" href={site.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="btn" href={site.resumeUrl} target="_blank" rel="noreferrer">
                  Resume
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>

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
            <a href={site.resumeUrl} target="_blank" rel="noreferrer">
              Resume ↓
            </a>
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
        </div>
      </div>
    </footer>
  )
}
