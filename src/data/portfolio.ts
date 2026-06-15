export const profile = {
  name: 'TRAN NGOC KHANG',
  role: 'Web Developer',
  tagline: 'Learning by building — fullstack web development from ground up.',
  bio: `Final-year Information Technology student specializing in Web Application development. My goal is apply the knowledge gained
from my studies and particle experience become to a professional fullstack engineer.With my knowledge, I enjoy solving logic
problems and creating the best user experience for users.I also spend time learning new technologies and best practices to
become a better engineer.`,
  location: 'Thoi An, Ho Chi Minh City, Vietnam',
  email: 'khangpropc345@gmail.com',
  phone: '0963860721',
  github: 'https://github.com/KhangT05',
  cvUrl: '/cv.pdf',
}

export type StackCategory = { label: string; tags: string[] }

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

export const stack: StackCategory[] = [
  { label: 'Programming Languages:', tags: ['HTML', 'CSS', 'JS', 'C# ', 'PHP', 'TS'] },
  { label: 'Framework', tags: ['ASP .NET CORE', 'Laravel', 'ABP Framework', 'React', 'Next.js'] },
  { label: 'Database', tags: ['MSSQL', 'MySQL', 'Redis', 'Entity Framework'] },
  { label: 'DevOps', tags: ['Nginx', 'GitHub Actions', 'Docker'] },
  { label: 'Tools', tags: ['Git', 'GitHub', 'RESTFul API', 'Postman'] },
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

