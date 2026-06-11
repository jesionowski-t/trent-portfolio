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

function SystemsDiagram() {
  const nodes = [
    { label: 'Finance', x: 18, y: 36 },
    { label: 'Operations', x: 8, y: 122 },
    { label: 'Vendors & MIS', x: 18, y: 208 },
    { label: 'Spreadsheets', x: 38, y: 290 },
  ]
  const paths = [
    'M136,53 C226,53 266,128 300,160',
    'M126,139 C216,141 256,164 296,174',
    'M136,225 C226,225 262,196 296,186',
    'M156,307 C246,307 276,224 304,200',
  ]
  return (
    <motion.div
      className="flow"
      role="img"
      aria-label="Diagram: Finance, Operations, Vendors and MIS, and spreadsheets all flowing into one unified platform"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.35, duration: 0.8, ease: [0.21, 0.65, 0.27, 1] }}
    >
      <svg viewBox="0 0 420 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <filter id="flow-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* connection paths */}
        {paths.map((d, i) => (
          <path key={i} className="flow__path" d={d} />
        ))}

        {/* pulses traveling the paths */}
        {paths.map((d, i) => (
          <circle key={`p${i}`} className="flow__pulse" r="3.2">
            <animateMotion
              dur={`${2.6 + i * 0.5}s`}
              begin={`${0.6 + i * 0.45}s`}
              repeatCount="indefinite"
              path={d}
            />
          </circle>
        ))}

        {/* source nodes */}
        {nodes.map((n, i) => (
          <g key={n.label} className="flow__node" style={{ animationDelay: `${i * 0.7}s` }}>
            <rect x={n.x} y={n.y} width="118" height="34" rx="8" />
            <text x={n.x + 59} y={n.y + 22}>{n.label}</text>
          </g>
        ))}

        {/* unified hub */}
        <g className="flow__hub">
          <circle className="flow__ring" cx="330" cy="180" r="48" />
          <circle className="flow__hub-mid" cx="330" cy="180" r="33" />
          <circle className="flow__core" cx="330" cy="180" r="9" filter="url(#flow-glow)" />
          <text className="flow__hub-label" x="330" y="256">One platform</text>
        </g>
      </svg>
    </motion.div>
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
            <SystemsDiagram />
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
                  <span className="cap-card__num">{c.num}</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

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
