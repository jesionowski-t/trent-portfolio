import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { site } from '../data.js'

const LINKS = [
  { label: 'Work', to: '/#work' },
  { label: 'About', to: '/about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <Link className="nav__logo" to="/" aria-label="Home">
          <span className="nav__logo-name">Trent Jesionowski</span>
          <span className="nav__logo-role">Digital Systems & Product</span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          <Link to="/#work">Work</Link>
          <NavLink to="/about">About</NavLink>
          <a className="nav__contact" href="#contact">
            Contact
          </a>
        </nav>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav__mobile"
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {[
              { label: 'Home', to: '/' },
              { label: 'Work', to: '/#work' },
              { label: 'About', to: '/about' },
            ].map((l, i) => (
              <motion.div
                key={l.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i }}
              >
                <Link to={l.to} onClick={() => setOpen(false)}>
                  <span className="nav__mobile-num">0{i + 1}</span>
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <a href="#contact" onClick={() => setOpen(false)}>
                <span className="nav__mobile-num">04</span>Contact
              </a>
            </motion.div>
            <p className="nav__mobile-meta">
              {site.location} · {site.email}
            </p>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
