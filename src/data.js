// ─────────────────────────────────────────────────────────────
// All site content lives here. Edit this file to update the
// portfolio — no component changes needed.
// Words wrapped in [brackets] render as italic serif accents.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Trent Jesionowski',
  role: 'Digital Systems & Product Analyst',
  company: 'Continuum Therapy Partners',
  email: 'trent.jesionowski@gmail.com',
  linkedin: 'https://linkedin.com/in/trentjesionowski',
  location: 'Atlanta, GA',
  availability: 'Open to digital transformation work',
}

export const hero = {
  kicker: 'Digital Systems & Product Analyst',
  headline: 'Turning manual operations into [modern systems].',
  sub: 'I lead digital transformation from the inside — designing, building, and shipping the internal products, automations, and data infrastructure that change how a company runs. Currently owning the technology stack at Continuum Therapy Partners.',
  meta: [
    { label: 'Currently', value: 'Continuum Therapy Partners' },
    { label: 'Focus', value: 'Digital Transformation' },
    { label: 'Based in', value: 'Atlanta, GA' },
  ],
}

export const ticker = [
  'Internal Product Development',
  'Process Automation',
  'Data & Reporting',
  'Systems Integration',
  'Workflow Design',
  'UX Research',
  'Healthcare Operations',
  'Digital Strategy',
]

// ── Projects ────────────────────────────────────────────────
// Each project gets its own page at /work/<slug>.
export const projects = [
  {
    slug: 'modernizing-healthcare-operations',
    num: '01',
    title: 'Modernizing healthcare operations from the inside',
    tagline: 'Company-wide digital transformation',
    year: '2026 — Ongoing',
    org: 'Continuum Therapy Partners',
    role: 'Digital Systems & Product Analyst',
    timeline: '2026 — Present',
    tags: ['Digital Transformation', 'Internal Tools', 'Process Automation'],
    summary:
      'Continuum Therapy Partners is a growing healthcare therapy company whose operations had outpaced its systems. As the primary owner of the technology stack — reporting directly to the CFO — I lead the work of replacing manual, spreadsheet-driven processes with internal software built around how the business actually runs.',
    facts: [
      { label: 'Reports to', value: 'CFO' },
      { label: 'Scope', value: 'Company-wide' },
      { label: 'Departments', value: 'Finance · Operations · BD' },
    ],
    challenge: [
      'Like many growing healthcare organizations, Continuum ran on a patchwork of vendor platforms, spreadsheets, and manual handoffs. Critical workflows lived in people’s heads. Data existed, but assembling it into something decision-ready took days of hand work — and every manual step was a chance for errors to creep in.',
      'The role I stepped into is deliberately broad: a solo technology owner at the intersection of operations, finance, and strategy, with a mandate to modernize — not just maintain.',
    ],
    approach: [
      {
        title: 'Map the real workflows',
        desc: 'Stakeholder interviews and workflow shadowing across finance, operations, and business development — documenting how work actually happens before deciding what to build. My UX research training does heavy lifting here.',
      },
      {
        title: 'Build the internal product layer',
        desc: 'Designing and shipping internal tools and applications that replace manual processes — built to be maintained and extended, not just demoed.',
      },
      {
        title: 'Automate the repetitive',
        desc: 'Identifying high-frequency, error-prone manual tasks and automating them away, freeing the team for work that actually needs judgment.',
      },
      {
        title: 'Own the vendor ecosystem',
        desc: 'Managing MIS and third-party platform relationships — evaluating performance, closing gaps, and making sure every system earns its place in the stack.',
      },
    ],
    outcome: [
      'This is active, ongoing work — the systems shipped here directly shape how the company scales. Because it involves internal financial and operational infrastructure, specifics are kept high-level in public.',
    ],
    note: 'Happy to walk through the details, architecture, and outcomes in conversation.',
    link: null,
  },
  {
    slug: 'reporting-data-infrastructure',
    num: '02',
    title: 'Reporting infrastructure leadership can trust',
    tagline: 'Data integrity & executive reporting',
    year: '2026 — Ongoing',
    org: 'Continuum Therapy Partners',
    role: 'Digital Systems & Product Analyst',
    timeline: '2026 — Present',
    tags: ['Data & Reporting', 'Dashboards', 'Systems Integration'],
    summary:
      'Financial and operational decisions are only as good as the data behind them. I build and maintain the reporting tools and dashboards Continuum’s leadership relies on — and the data plumbing underneath that makes the numbers trustworthy.',
    facts: [
      { label: 'Audience', value: 'Executive leadership' },
      { label: 'Focus', value: 'Data integrity' },
      { label: 'Sources', value: 'MIS · Vendor platforms' },
    ],
    challenge: [
      'Reporting was assembled by hand from systems that didn’t talk to each other. The same metric could mean different things depending on who pulled it and when. Leadership needed numbers they could act on without re-verifying them first.',
    ],
    approach: [
      {
        title: 'One source of truth per metric',
        desc: 'Defining where each number comes from, what it means, and who owns it — before building anything visual.',
      },
      {
        title: 'Connect the systems',
        desc: 'Integrating data across vendor platforms and MIS systems so reporting pulls from live sources instead of manual exports.',
      },
      {
        title: 'Dashboards people actually use',
        desc: 'Reporting tools designed around the decisions they support — not around what the database happens to contain. Usability testing isn’t just for consumer apps.',
      },
    ],
    outcome: [
      'An evolving reporting layer that turns multi-day manual assembly into on-demand answers, and gives financial and operational analysis a foundation the organization can trust.',
    ],
    note: 'Specific metrics and tooling shared in conversation.',
    link: null,
  },
  {
    slug: 'apple-sports-redesign',
    num: '03',
    title: 'Apple Sports — the speed-to-score redesign',
    tagline: 'UX architecture & interaction design',
    year: '2025',
    org: 'Independent case study',
    role: 'UX Designer & Researcher',
    timeline: '3 weeks · 2025',
    tags: ['UX Design', 'Information Architecture', 'Prototyping'],
    summary:
      'Apple Sports is built on a promise of speed and minimalism — but its architecture made power users dig for the scores they checked most. I restructured the app around a hub-and-spoke model designed to minimize time-to-task.',
    facts: [
      { label: 'Duration', value: '3 weeks' },
      { label: 'Method', value: 'Hub-and-spoke IA' },
      { label: 'Fidelity', value: 'Interactive prototype' },
    ],
    challenge: [
      'Sports fans check scores in stolen moments — between meetings, during commercials, walking to the car. Every extra tap between opening the app and seeing the score breaks the product’s core promise. The challenge: support high-density, real-time data for power users without sacrificing the brand’s minimalism.',
    ],
    approach: [
      {
        title: 'Restructure the architecture',
        desc: 'Rebuilt the app hierarchy in Figma around a hub-and-spoke model, putting the highest-frequency tasks one interaction from launch.',
      },
      {
        title: 'Progressive disclosure',
        desc: 'Layered information design that keeps surfaces clean by default while letting power users drill into high-density data when they want it.',
      },
      {
        title: 'Prototype the real moments',
        desc: 'Advanced from wireframes to high-fidelity interactive prototypes, testing real-time state changes — live scores, momentum shifts — in time-sensitive scenarios.',
      },
    ],
    outcome: [
      'A validated redesign that shortens speed-to-score flows while preserving the minimal aesthetic Apple Sports is known for — proof of how I approach product thinking: start from the user’s moment of need, then architect backward.',
    ],
    note: null,
    link: { label: 'View the full case study', href: 'https://trentjesionowski.framer.website/' },
  },
  {
    slug: 'mu-housing-accessibility',
    num: '04',
    title: 'Making a university housing portal work for every mind',
    tagline: 'Accessibility research & inclusive design',
    year: '2025',
    org: 'Mercer University Housing & Residence Life',
    role: 'UX Researcher',
    timeline: '2 months · 2025',
    tags: ['UX Research', 'Accessibility', 'WCAG 2.1'],
    summary:
      'A two-month research study of Mercer University’s housing portal, focused on the students the system served worst — neurodivergent users navigating a high-stakes, deadline-driven process.',
    facts: [
      { label: 'Duration', value: '2 months' },
      { label: 'Participants', value: '6 neurodivergent users' },
      { label: 'Standard', value: 'WCAG 2.1 A/AA' },
    ],
    challenge: [
      'Housing selection is one of the most stressful processes in a student’s year — and the portal’s structure amplified that stress for students with ADHD and other cognitive differences. Administrative staff absorbed the overflow: confused students became support tickets, calls, and walk-ins.',
    ],
    approach: [
      {
        title: 'Audit against the standard',
        desc: 'Evaluated the portal against WCAG 2.1 (A/AA), establishing an objective baseline of accessibility failures.',
      },
      {
        title: 'Watch real users struggle',
        desc: 'Moderated think-aloud sessions with six neurodivergent students, diagnosing the structural barriers behind the stress — not just the surface complaints.',
      },
      {
        title: 'Synthesize into specs',
        desc: 'Used affinity diagramming to turn qualitative findings into concrete, inclusive design specifications and a design-thinking roadmap.',
      },
    ],
    outcome: [
      'A roadmap designed to cut both student anxiety and administrative overhead — the same lesson that drives my systems work today: fixing the structure underneath a process helps the people on both sides of it.',
    ],
    note: null,
    link: { label: 'View the full case study', href: 'https://trentjesionowski.framer.website/' },
  },
]

// ── Home page sections ──────────────────────────────────────
export const capabilities = {
  kicker: 'What I do',
  title: 'Capabilities',
  items: [
    {
      num: '01',
      title: 'Internal Product Development',
      desc: 'Designing, building, and maintaining the tools teams rely on daily — from first stakeholder interview to shipped, maintained software.',
    },
    {
      num: '02',
      title: 'Process Automation',
      desc: 'Finding the manual, repetitive, error-prone workflows hiding in finance, operations, and business development — and automating them away.',
    },
    {
      num: '03',
      title: 'Data & Reporting',
      desc: 'Dashboards and reporting tools leadership actually uses, built on data that’s accurate, accessible, and connected across platforms.',
    },
    {
      num: '04',
      title: 'Systems Strategy & Integration',
      desc: 'Owning the tech stack: evaluating platforms, managing MIS and vendor relationships, and aligning every system with the business.',
    },
  ],
}

// ── About page ──────────────────────────────────────────────
export const about = {
  kicker: 'About',
  title: 'Designer’s eye. Builder’s hands. [Operator’s mindset].',
  paragraphs: [
    'I started in design — five years leading graphic design for one of Georgia’s largest school districts, then UX research and product design work spanning accessibility audits, usability testing, and interactive prototyping.',
    'Somewhere along the way I realized the experiences I most wanted to fix weren’t on marketing sites. They were inside organizations: the spreadsheet held together with hope, the five-system workflow that should be one click, the report that takes a week to assemble by hand.',
    'Now I do that work full-time. At Continuum Therapy Partners I own the technology stack for a growing healthcare therapy company — building the internal tools, automations, and data infrastructure that let the business scale. That’s the career I’m building: digital transformation that starts with people and ends in shipped systems.',
  ],
  approach: {
    kicker: 'How I work',
    title: 'Design-led. Data-backed. [Shipped].',
    steps: [
      {
        num: '01',
        title: 'Discover',
        desc: 'Stakeholder interviews, workflow shadowing, and systems audits to map how work really happens — not how the org chart says it does.',
      },
      {
        num: '02',
        title: 'Design',
        desc: 'Prototype the future state fast. Architecture, flows, and interfaces validated with the people who will live in them daily.',
      },
      {
        num: '03',
        title: 'Build',
        desc: 'Ship working software — internal apps, automations, and integrations built to be maintained, not just demoed.',
      },
      {
        num: '04',
        title: 'Measure',
        desc: 'Instrument what matters. Track adoption, time saved, and data quality — then iterate until the system earns its place.',
      },
    ],
  },
  experience: [
    {
      period: '2026 — Present',
      role: 'Digital Systems & Product Analyst',
      org: 'Continuum Therapy Partners',
      desc: 'Primary internal owner of the company technology stack. Internal products, automation, reporting infrastructure, and MIS/vendor management — reporting directly to the CFO.',
      current: true,
    },
    {
      period: '2025 — 2026',
      role: 'Founder & Web Designer',
      org: 'Centurion Site Design',
      desc: 'End-to-end product delivery for client sites — discovery, wireframing, accessibility standards, and iterative testing from first interview to launch.',
      current: false,
    },
    {
      period: '2020 — 2025',
      role: 'Graphic Design Team Lead',
      org: 'Cobb County School District',
      desc: 'Scalable visual systems for high-traffic, district-wide digital platforms; translating complex information for diverse audiences.',
      current: false,
    },
  ],
  education: [
    {
      period: '2026',
      title: 'B.S. Information Science & Technology',
      org: 'Mercer University',
      detail: 'Minors in UX Research & Design and Technical Communication',
    },
    {
      period: '2026',
      title: 'Technical Writing I & II · Accessibility · Error Messages',
      org: 'Google for Developers',
      detail: '',
    },
    {
      period: '2025',
      title: 'Google AI Essentials',
      org: 'Coursera',
      detail: '',
    },
  ],
  tools: [
    'JavaScript / React',
    'SQL & Databases',
    'Power BI',
    'Process Automation',
    'Systems Integration',
    'Figma',
    'WCAG Auditing',
    'Usability Testing',
    'AI-Assisted Development',
    'Technical Writing',
  ],
}

export const footer = {
  headline: 'Have a system that should [work better]?',
  sub: 'Digital transformation, internal tooling, or comparing notes on modernizing operations — my inbox is open.',
}
