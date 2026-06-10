import { about, site } from '../data.js'
import Reveal, { AccentText, Page } from '../components/Reveal.jsx'

export default function About() {
  return (
    <Page>
      {/* ── Intro ────────────────────────────────────────── */}
      <section className="about-hero">
        <div className="section__inner">
          <Reveal y={18}>
            <p className="kicker">{about.kicker}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="about-hero__title">
              <AccentText text={about.title} />
            </h1>
          </Reveal>
          <div className="about-hero__body">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.25}>
            <div className="about-hero__cta">
              <a className="btn btn--solid" href={site.resumeUrl} target="_blank" rel="noreferrer">
                View my resume
                <span aria-hidden="true">↓</span>
              </a>
              <a className="btn" href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Approach ─────────────────────────────────────── */}
      <section className="section section--rule">
        <div className="section__inner">
          <Reveal>
            <p className="kicker">{about.approach.kicker}</p>
            <h2 className="section__title section__title--serif">
              <AccentText text={about.approach.title} />
            </h2>
          </Reveal>
          <div className="approach-grid">
            {about.approach.steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.07}>
                <div className="approach-step">
                  <span className="approach-step__num">({s.num})</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────── */}
      <section className="section section--rule">
        <div className="section__inner">
          <Reveal>
            <p className="kicker">Experience</p>
          </Reveal>
          <div className="xp-list">
            {about.experience.map((j, i) => (
              <Reveal key={j.role} delay={i * 0.06}>
                <div className={`xp-row ${j.current ? 'xp-row--current' : ''}`}>
                  <span className="xp-row__period">
                    {j.period}
                    {j.current && <em className="xp-row__badge">Now</em>}
                  </span>
                  <div className="xp-row__body">
                    <h3>{j.role}</h3>
                    <p className="xp-row__org">{j.org}</p>
                    <p>{j.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="edu-tools">
            <Reveal>
              <div>
                <p className="kicker">Education & Certifications</p>
                <ul className="edu-list">
                  {about.education.map((e) => (
                    <li key={e.title}>
                      <span className="edu-list__year">{e.period}</span>
                      <div>
                        <strong>{e.title}</strong>
                        <span>{e.org}</span>
                        {e.detail && <span className="edu-list__detail">{e.detail}</span>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <p className="kicker">Tools & Methods</p>
                <div className="tool-cloud">
                  {about.tools.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Page>
  )
}
