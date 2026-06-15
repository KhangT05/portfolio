export const profile = {
  name: 'TRAN NGOC KHANG',
  role: 'Web Developer',
  tagline: 'Building reliable systems at production scale.',
  bio: 'Senior engineer with 5+ years delivering backend-heavy systems across fintech, edtech, and enterprise SaaS. Focused on maintainability, operational simplicity, and shipping things that stay up.',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'your@email.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  cvUrl: '/cv.pdf',
}

export type StackCategory = { label: string; tags: string[] }

export const stack: StackCategory[] = [
  { label: 'Backend', tags: ['C# / .NET', 'Node.js', 'TypeScript', 'PHP', 'ASP.NET Core', 'EF Core'] },
  { label: 'Frontend', tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
  { label: 'Database / Cache', tags: ['PostgreSQL', 'MSSQL', 'MySQL', 'Redis', 'Entity Framework'] },
  { label: 'Infra / DevOps', tags: ['Azure', 'AWS', 'Nginx', 'IIS', 'GitHub Actions', 'Docker'] },
]

export type Project = {
  name: string
  emoji: string
  description: string
  tags: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    name: 'Tournament Management System',
    emoji: '⚽',
    description: 'Full-stack student football tournament platform — bracket generation, match scheduling via OR-Tools CP-SAT, WebAuthn/Passkey auth, OAuth 2.0. Built on ASP.NET Core + EF Core + PostgreSQL with Next.js frontend.',
    tags: ['C# / ASP.NET', 'EF Core', 'Next.js', 'OR-Tools', 'WebAuthn'],
    github: 'https://github.com/yourusername/tournament',
  },
  {
    name: 'CMMS — Maintenance Platform',
    emoji: '🔧',
    description: 'Computerized maintenance management system with WorkOrder state machine, KPI aggregation, cache invalidation layer, and multi-store role isolation via JWT + Redis. Bitwise permission flags for fine-grained access control.',
    tags: ['TypeScript', 'TSOA', 'Redis', 'PostgreSQL', 'JWT'],
    github: 'https://github.com/yourusername/cmms',
  },
  {
    name: 'Operator Dashboard (WinForms)',
    emoji: '📊',
    description: 'C# WinForms internal tool with a config-driven GenericGameApiClient for API discovery, REST integration, and .docx export of technical documentation. Designed for non-dev operators.',
    tags: ['C# WinForms', 'REST API', 'docx export'],
    github: 'https://github.com/yourusername/dashboard',
  },
]

export type Experience = {
  period: string
  role: string
  company: string
  description: string
  current?: boolean
}

export const experience: Experience[] = [
  {
    period: '2023 — Present',
    role: 'Senior Software Engineer',
    company: 'Company Name · Ho Chi Minh City',
    description: 'Led backend architecture for production systems serving 50k+ users. Designed auth infrastructure (OAuth 2.0, WebAuthn), optimized EF Core query plans, reduced p99 latency by 40% via Redis caching strategy.',
    current: true,
  },
  {
    period: '2021 — 2023',
    role: 'Software Engineer',
    company: 'Company Name · Ho Chi Minh City',
    description: 'Built and maintained multi-tenant SaaS platform on ASP.NET Core. Introduced CI/CD pipeline on GitHub Actions, cutting deployment time from 2h to 15min. Owned MSSQL schema migrations with zero-downtime strategy.',
  },
  {
    period: '2019 — 2021',
    role: 'Backend Developer',
    company: 'Company Name · Ho Chi Minh City',
    description: 'Node.js + PHP backend for e-commerce integrations. Implemented webhook processing pipeline and OPcache tuning that reduced PHP-FPM worker saturation during peak traffic.',
  },
  {
    period: '2019',
    role: 'B.Sc. Software Engineering',
    company: 'University Name',
    description: 'Graduation project: Football Tournament Management System.',
  },
]
