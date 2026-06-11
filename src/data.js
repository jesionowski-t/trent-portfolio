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
  resumeUrl: '/Trent-Jesionowski-Resume.pdf',
}

export const hero = {
  kicker: 'Digital Systems & Product Analyst',
  headline: 'Turning manual operations into [modern systems].',
  sub: 'I design, build, and ship the internal systems that change how a company runs — currently owning the tech stack at Continuum Therapy Partners.',
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
      'Continuum’s operations outgrew its systems. As primary owner of the tech stack — reporting to the CFO — I replace manual, spreadsheet-driven processes with internal software built around how the business actually runs.',
    facts: [
      { label: 'Reports to', value: 'CFO' },
      { label: 'Scope', value: 'Company-wide' },
      { label: 'Departments', value: 'Finance · Operations · BD' },
    ],
    pipeline: ['Manual ops', 'Map', 'Build', 'Automate', 'Scale'],
    challenge: [
      'A patchwork of vendor platforms, spreadsheets, and manual handoffs — where assembling decision-ready data took days, and every handoff invited errors.',
    ],
    approach: [
      {
        title: 'Map the real workflows',
        desc: 'Workflow shadowing and stakeholder interviews before any code.',
      },
      {
        title: 'Build the internal product layer',
        desc: 'Tools built to be maintained, not just demoed.',
      },
      {
        title: 'Automate the repetitive',
        desc: 'High-frequency, error-prone manual tasks — automated away.',
      },
      {
        title: 'Own the vendor ecosystem',
        desc: 'MIS and vendor platforms evaluated, managed, integrated.',
      },
    ],
    outcome: [
      'Active, ongoing work that directly shapes how the company scales — specifics kept high-level in public.',
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
      'I build the dashboards and data plumbing Continuum’s leadership relies on — so decisions run on numbers no one has to re-verify.',
    facts: [
      { label: 'Audience', value: 'Executive leadership' },
      { label: 'Focus', value: 'Data integrity' },
      { label: 'Sources', value: 'MIS · Vendor platforms' },
    ],
    pipeline: ['Raw exports', 'Integrate', 'Define', 'Dashboard', 'Decide'],
    challenge: [
      'Reporting assembled by hand from systems that didn’t talk to each other — the same metric could mean different things depending on who pulled it.',
    ],
    approach: [
      {
        title: 'One source of truth per metric',
        desc: 'Every number gets a definition and an owner — before anything visual.',
      },
      {
        title: 'Connect the systems',
        desc: 'Live integrations replace manual exports.',
      },
      {
        title: 'Dashboards people actually use',
        desc: 'Designed around decisions, not database tables.',
      },
    ],
    outcome: [
      'Multi-day manual assembly, turned into on-demand answers.',
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
      'Apple Sports promises speed — but its architecture made power users dig for scores. I restructured it around a hub-and-spoke model that minimizes time-to-task.',
    facts: [
      { label: 'Duration', value: '3 weeks' },
      { label: 'Method', value: 'Hub-and-spoke IA' },
      { label: 'Fidelity', value: 'Interactive prototype' },
    ],
    pipeline: ['Audit IA', 'Hub & spoke', 'Prototype', 'Validate'],
    challenge: [
      'Fans check scores in stolen moments — every extra tap breaks the product’s promise. And Apple’s minimalism wasn’t negotiable.',
    ],
    approach: [
      {
        title: 'Restructure the architecture',
        desc: 'Top tasks moved to one interaction from launch.',
      },
      {
        title: 'Progressive disclosure',
        desc: 'Clean by default, data-dense on demand.',
      },
      {
        title: 'Prototype the real moments',
        desc: 'High-fidelity prototypes tested in time-sensitive scenarios.',
      },
    ],
    outcome: [
      'Faster speed-to-score, same minimal aesthetic — start from the user’s moment of need, architect backward.',
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
      'A two-month study of Mercer’s housing portal, focused on the students it served worst — neurodivergent users in a high-stakes, deadline-driven process.',
    facts: [
      { label: 'Duration', value: '2 months' },
      { label: 'Participants', value: '6 neurodivergent users' },
      { label: 'Standard', value: 'WCAG 2.1 A/AA' },
    ],
    pipeline: ['Audit', 'Observe', 'Synthesize', 'Roadmap'],
    challenge: [
      'The portal amplified an already stressful process for students with ADHD — and staff absorbed the overflow as tickets, calls, and walk-ins.',
    ],
    approach: [
      {
        title: 'Audit against the standard',
        desc: 'WCAG 2.1 (A/AA) baseline of accessibility failures.',
      },
      {
        title: 'Watch real users struggle',
        desc: 'Think-aloud sessions with six neurodivergent students.',
      },
      {
        title: 'Synthesize into specs',
        desc: 'Affinity mapping into concrete, inclusive design specs.',
      },
    ],
    outcome: [
      'A roadmap that cuts student anxiety and staff overhead — fix the structure, help both sides of it.',
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
      desc: 'Tools teams rely on daily — from first interview to shipped software.',
    },
    {
      num: '02',
      title: 'Process Automation',
      desc: 'Manual, error-prone workflows — found and automated away.',
    },
    {
      num: '03',
      title: 'Data & Reporting',
      desc: 'Dashboards leadership actually uses, on data it can trust.',
    },
    {
      num: '04',
      title: 'Systems Strategy & Integration',
      desc: 'Platforms, vendors, and MIS — owned, evaluated, integrated.',
    },
  ],
}

// ── About page ──────────────────────────────────────────────
export const about = {
  kicker: 'About',
  title: 'Designer’s eye. Builder’s hands. [Operator’s mindset].',
  paragraphs: [
    'Five years in design taught me how people think — UX research, accessibility audits, usability testing.',
    'Now I build what they work in. At Continuum Therapy Partners I own the tech stack for a growing healthcare company: internal tools, automation, and data infrastructure. Digital transformation that starts with people and ends in shipped systems.',
  ],
  approach: {
    kicker: 'How I work',
    title: 'Design-led. Data-backed. [Shipped].',
    steps: [
      {
        num: '01',
        title: 'Discover',
        desc: 'Map how work really happens — not how the org chart says it does.',
      },
      {
        num: '02',
        title: 'Design',
        desc: 'Prototype the future state fast, with the people who’ll live in it.',
      },
      {
        num: '03',
        title: 'Build',
        desc: 'Working software, built to be maintained.',
      },
      {
        num: '04',
        title: 'Measure',
        desc: 'Track adoption, time saved, and data quality — then iterate.',
      },
    ],
  },
  experience: [
    {
      period: '2026 — Present',
      role: 'Digital Systems & Product Analyst',
      org: 'Continuum Therapy Partners',
      desc: 'Owner of the company tech stack — internal products, automation, reporting, and vendor management. Reports to the CFO.',
      current: true,
    },
    {
      period: '2025 — Present',
      role: 'Founder & Web Designer',
      org: 'Centurion Site Design',
      desc: 'End-to-end design and delivery of high-performance client sites.',
      current: false,
    },
    {
      period: '2023 — 2025',
      role: 'Treasurer · Secretary',
      org: 'Pi Kappa Phi, Alpha Alpha Chapter',
      desc: 'Chapter finances, budgets, and records — plus Social Media Chair and Standards Board.',
      current: false,
    },
    {
      period: '2022 — 2024',
      role: 'Social Media Manager · Graphic Design Lead',
      org: 'Mercer University Men’s Lacrosse',
      desc: 'Campaigns and consistent branding across platforms.',
      current: false,
    },
    {
      period: '2020 — 2025',
      role: 'Graphic Design Team Lead · Event Technician II',
      org: 'Cobb County School District',
      desc: 'Visual content and AV delivery for district-wide events.',
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
    'Process Automation',
    'Systems Integration',
    'Workflow Design',
    'Power BI & Reporting',
    'Vendor & MIS Management',
    'Figma',
    'Usability Testing',
    'WCAG Auditing',
    'Technical Writing',
    'AI-Assisted Development',
    'SQL & Data',
  ],
}

export const footer = {
  headline: 'Have a system that should [work better]?',
  sub: 'Digital transformation, internal tooling, or comparing notes — my inbox is open.',
}
