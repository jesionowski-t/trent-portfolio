import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { capabilities, hero, projects, ticker } from '../data.js'
import Reveal, { AccentText, Page } from '../components/Reveal.jsx'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const rise = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.65, 0.27, 1] } },
}

function Terminal() {
  const lines = [
    { prompt: '$', cmd: 'whoami' },
    { out: 'trent.jesionowski — digital systems & product analyst' },
    { prompt: '$', cmd: 'systemctl status' },
    { out: '● active — building internal systems @ continuum-therapy', ok: true },
    { prompt: '$', cmd: 'cat ./focus' },
    { out: 'digital-transformation --end-to-end' },
  ]
  return (
    <div className="term" role="img" aria-label="Terminal: Trent Jesionowski, Digital Systems and Product Analyst, actively building internal systems at Continuum Therapy, focused on end-to-end digital transformation">
      <div className="term__bar" aria-hidden="true">
        <span className="term__dots">
          <i /><i /><i />
        </span>
        <span className="term__title">trent@portfolio: ~</span>
      </div>
      <div className="term__body" aria-hidden="true">
        {lines.map((l, i) => (
          <motion.p
            key={i}
            className={l.out ? `term__out ${l.ok ? 'term__out--ok' : ''}` : 'term__cmd'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.3, duration: 0.01 }}
          >
            {l.prompt && <span className="term__prompt">{l.prompt} </span>}
            {l.cmd || l.out}
          </motion.p>
        ))}
        <motion.p
          className="term__cmd"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + lines.length * 0.3 }}
        >
          <span className="term__prompt">$ </span>
          <span className="term__cursor" />
        </motion.p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <Page>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__grid-bg" aria-hidden="true" />
        <motion.div className="hero__inner" variants={stagger} initial="hidden" animate="show">
          <motion.div className="hero__left" variants={rise}>
            <p className="hero__kicker">
              <span className="status-dot" aria-hidden="true" />
              {hero.kicker}
            </p>
            <h1 className="hero__title">
              <AccentText text={hero.headline} />
            </h1>
            <p className="hero__sub">{hero.sub}</p>
            <div className="hero__cta">
              <Link className="btn btn--solid" to="/#work">
                View work
                <span aria-hidden="true">→</span>
              </Link>
              <a className="btn" href="#contact">
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div className="hero__right" variants={rise}>
            <Terminal />
            <dl className="hero__meta">
              {hero.meta.map((m) => (
                <div key={m.label}>
                  <dt>{m.label}</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </motion.div>

        <div className="ticker" aria-hidden="true">
          <div className="ticker__track">
            {[...ticker, ...ticker].map((t, i) => (
              <span key={i}>
                {t}
                <i>/</i>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work index ───────────────────────────────────── */}
      <section className="section" id="work">
        <div className="section__inner">
          <Reveal>
            <div className="section__head">
              <h2 className="section__label">
                <span aria-hidden="true">01 /</span> Selected Work
              </h2>
              <span className="section__count">{projects.length} projects</span>
            </div>
          </Reveal>

          <Reveal>
            <div className="work-head" aria-hidden="true">
              <span>ID</span>
              <span>Project</span>
              <span>Org / Year</span>
              <span aria-hidden="true" />
            </div>
          </Reveal>

          <div className="work-index">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Link className="work-row" to={`/work/${p.slug}`}>
                  <span className="work-row__num">{p.num}</span>
                  <span className="work-row__body">
                    <span className="work-row__title">{p.title}</span>
                    <span className="work-row__tagline">{p.tagline}</span>
                  </span>
                  <span className="work-row__meta">
                    <span className="work-row__org">{p.org}</span>
                    <span className="work-row__year">{p.year}</span>
                  </span>
                  <span className="work-row__arrow" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────────── */}
      <section className="section section--rule">
        <div className="section__inner">
          <Reveal>
            <div className="section__head">
              <h2 className="section__label">
                <span aria-hidden="true">02 /</span> Capabilities
              </h2>
              <span className="section__count">ux-grounded · systems-first</span>
            </div>
          </Reveal>

          <div className="cap-grid">
            {capabilities.items.map((c, i) => (
              <Reveal key={c.num} delay={i * 0.06}>
                <div className="cap-card">
                  <span className="cap-card__num">[{c.num}]</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="cap-note">
              <span className="cap-note__flag">NOTE</span>
              Grounded in a UX research background — accessibility, usability testing, and design
              thinking are part of how I build, not an afterthought.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── About teaser ─────────────────────────────────── */}
      <section className="section section--rule">
        <div className="section__inner">
          <Reveal>
            <div className="teaser">
              <p className="teaser__text">
                Five years in design taught me how people think.{' '}
                <em className="accent-em">Now I build the systems they work in.</em>
              </p>
              <Link className="link-arrow" to="/about">
                More about me <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  )
}
