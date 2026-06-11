import { Link, useParams } from 'react-router-dom'
import { projects } from '../data.js'
import Reveal, { Page } from '../components/Reveal.jsx'
import NotFound from './NotFound.jsx'

export default function Project() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return <NotFound />

  const p = projects[index]
  const next = projects[(index + 1) % projects.length]

  return (
    <Page>
      <article className="project">
        {/* ── Header ─────────────────────────────────────── */}
        <header className="project__header">
          <div className="section__inner">
            <Reveal y={18}>
              <nav className="crumbs" aria-label="Breadcrumb">
                <Link to="/#work">Work</Link>
                <span aria-hidden="true">/</span>
                <span>{p.num}</span>
              </nav>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="project__title">{p.title}</h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="project__summary">{p.summary}</p>
            </Reveal>

            <Reveal delay={0.18}>
              <dl className="project__meta">
                <div>
                  <dt>Role</dt>
                  <dd>{p.role}</dd>
                </div>
                <div>
                  <dt>Organization</dt>
                  <dd>{p.org}</dd>
                </div>
                <div>
                  <dt>Timeline</dt>
                  <dd>{p.timeline}</dd>
                </div>
                <div>
                  <dt>Focus</dt>
                  <dd>{p.tags.join(' · ')}</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </header>

        <div className="section__inner">
          {/* ── Facts strip ──────────────────────────────── */}
          <Reveal>
            <div className="project__facts">
              {p.facts.map((f) => (
                <div className="project__fact" key={f.label}>
                  <span className="project__fact-label">{f.label}</span>
                  <span className="project__fact-value">{f.value}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── Pipeline diagram ─────────────────────────── */}
          {p.pipeline && (
            <Reveal delay={0.08}>
              <div className="pipe" role="img" aria-label={`Process: ${p.pipeline.join(', then ')}`}>
                {p.pipeline.map((node, i) => (
                  <span className="pipe__seg" key={node}>
                    <span className={`pipe__node ${i === p.pipeline.length - 1 ? 'pipe__node--end' : ''}`}>
                      {node}
                    </span>
                    {i < p.pipeline.length - 1 && (
                      <span className="pipe__arrow" aria-hidden="true">
                        ─▶
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </Reveal>
          )}

          {/* ── Challenge ────────────────────────────────── */}
          <section className="project__section">
            <Reveal>
              <p className="kicker">The Challenge</p>
            </Reveal>
            <div className="project__prose">
              {p.challenge.map((para, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p>{para}</p>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ── Approach ─────────────────────────────────── */}
          <section className="project__section">
            <Reveal>
              <p className="kicker">The Approach</p>
            </Reveal>
            <div className="project__steps">
              {p.approach.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.06}>
                  <div className="project__step">
                    <span className="project__step-num">({String(i + 1).padStart(2, '0')})</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ── Outcome ──────────────────────────────────── */}
          <section className="project__section">
            <Reveal>
              <p className="kicker">The Outcome</p>
            </Reveal>
            <div className="project__prose project__prose--lede">
              {p.outcome.map((para, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p>{para}</p>
                </Reveal>
              ))}
            </div>

            {p.note && (
              <Reveal>
                <p className="project__note">{p.note}</p>
              </Reveal>
            )}

            {p.link && (
              <Reveal>
                <a className="link-arrow" href={p.link.href} target="_blank" rel="noreferrer">
                  {p.link.label}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </Reveal>
            )}
          </section>
        </div>

        {/* ── Next project ───────────────────────────────── */}
        <Link className="project__next" to={`/work/${next.slug}`}>
          <div className="section__inner">
            <span className="project__next-label">Next project</span>
            <span className="project__next-title">
              {next.title}
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </Link>
      </article>
    </Page>
  )
}
