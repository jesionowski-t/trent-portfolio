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
  // pills arc around the hub; x recedes as rows approach hub height
  const nodes = [
    { label: 'Finance', x: 44, y: 14 },
    { label: 'Reporting', x: 22, y: 64 },
    { label: 'Operations', x: 8, y: 114 },
    { label: 'Vendors & MIS', x: 1, y: 164 },
    { label: 'Spreadsheets', x: 1, y: 214 },
    { label: 'Scheduling', x: 8, y: 264 },
    { label: 'Billing', x: 22, y: 314 },
    { label: 'Manual entry', x: 44, y: 364 },
  ]
  // where each path lands on the hub's left arc
  const ends = [
    [320, 168], [309, 182], [302, 194], [299, 203],
    [299, 209], [302, 218], [309, 230], [320, 244],
  ]
  const paths = nodes.map((n, i) => {
    const sx = n.x + 126
    const sy = n.y + 16
    const [ex, ey] = ends[i]
    return `M${sx},${sy} C${sx + 80},${sy} ${ex - 60},${ey} ${ex},${ey}`
  })

  return (
    <motion.div
      className="flow"
      role="img"
      aria-label="Diagram: finance, reporting, operations, vendors and MIS, spreadsheets, scheduling, billing, and manual entry all flowing into one hub labeled efficient workflows"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.35, duration: 0.8, ease: [0.21, 0.65, 0.27, 1] }}
    >
      <svg viewBox="0 0 440 410" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
          <circle key={`p${i}`} className="flow__pulse" r="3">
            <animateMotion
              dur={`${2.4 + (i % 4) * 0.55}s`}
              begin={`${0.5 + i * 0.35}s`}
              repeatCount="indefinite"
              path={d}
            />
          </circle>
        ))}

        {/* source nodes */}
        {nodes.map((n, i) => (
          <g key={n.label} className="flow__node" style={{ animationDelay: `${i * 0.45}s` }}>
            <rect x={n.x} y={n.y} width="126" height="32" rx="8" />
            <text x={n.x + 63} y={n.y + 21}>{n.label}</text>
          </g>
        ))}

        {/* hub */}
        <g className="flow__hub">
          <circle className="flow__ring" cx="340" cy="205" r="48" />
          <circle className="flow__hub-mid" cx="340" cy="205" r="33" />
          <circle className="flow__core" cx="340" cy="205" r="9" filter="url(#flow-glow)" />
          <text className="flow__hub-label" x="340" y="278">Efficient workflows</text>
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
