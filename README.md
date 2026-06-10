# Trent Jesionowski — Portfolio

Personal portfolio positioning Trent as a **Digital Systems & Product Analyst** focused on digital transformation: internal product development, process automation, data & reporting, and systems strategy.

**Design:** engineering-grade tech system — near-black canvas, dot-grid backdrops, panel cards with 1px borders, a terminal window in the hero, mono data labels, and a signal-green accent (`#00e599`). Type is **Geist + Geist Mono**. Fully responsive and accessible (semantic landmarks, keyboard focus styles, `prefers-reduced-motion` support).

**Stack:** React + Vite + React Router + Framer Motion. Multi-page SPA with page transitions.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — hero, work index, capabilities, about teaser |
| `/work/<slug>` | Case study — one page per project (challenge / approach / outcome) |
| `/about` | Story, how-I-work process, experience, education, tools |
| `*` | 404 |

## Editing content

**All copy lives in one file: [`src/data.js`](src/data.js).** Projects are objects in the `projects` array — add a new entry (with a unique `slug`) and it automatically gets a row on the home page and its own case-study page, including next-project navigation.

Things to review before launch:
- **Dates** — Continuum start year and Centurion end year are assumed; correct as needed.
- **Continuum case studies** — written at a confidentiality-safe level. Add concrete outcomes (hours saved, processes automated) to `facts` and `outcome` as wins accumulate; real metrics beat adjectives.
- **Tools list** in `about` — keep it matching what you actually use.

## Running locally

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deploying

Static SPA. Client-side routing fallbacks are already configured:
- **Vercel** — `npx vercel` from this folder; [vercel.json](vercel.json) handles rewrites.
- **Netlify** — connect a repo or drop `dist/`; [public/_redirects](public/_redirects) handles fallbacks.
- **GitHub Pages** — works, but needs a 404.html fallback hack for SPA routing; prefer Vercel/Netlify.

Then point your custom domain at the host and update your LinkedIn/resume links.

## Structure

```
index.html                    # meta tags, fonts, favicon
public/_redirects             # Netlify SPA fallback
vercel.json                   # Vercel SPA fallback
src/
  data.js                     # ★ all site content (projects, about, footer…)
  styles.css                  # design system (tokens at the top)
  App.jsx                     # routes + page transitions
  pages/
    Home.jsx  About.jsx  Project.jsx  NotFound.jsx
  components/
    Nav.jsx                   # fixed nav + mobile menu
    Footer.jsx                # dark contact footer (every page)
    Reveal.jsx                # scroll reveals, page wrapper, accent text
    ScrollManager.jsx         # scroll-to-top / hash handling on route change
```
