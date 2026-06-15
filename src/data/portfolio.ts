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
  cvUrl: '/TranNgocKhang_CV.pdf',
}

export type StackCategory = { label: string; tags: string[] }

export const experience: Experience[] = [
  {
    period: '03/2026 — 06/2026',
    role: 'INTERN Software Engineer',
    company: 'ITD GROUP · Ho Chi Minh City',
    description: [
      'Built and maintained UI components with Next.js/TypeScript, consuming REST APIs via SWR.',
      'Developed RESTful endpoints with C#/ASP.NET Core on ABP Framework.',
      'Wrote EF Core migrations and participated in code reviews via GitLab MR workflow.',
      'Contributed across full lifecycle — requirements, feature development, CI/CD deployment.',
      'Applied AI tooling (Claude, ChatGPT) critically for API design and auth flow research, with manual validation before committing.',
    ],
  }
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
  description: string
  tags: string[]
  github?: string
  highlights: string[]
  period: string
}

export const projects: Project[] = [
  {
    name: 'Fashion_clothing',
    description: 'Full-stack e-commerce application covering product management, order processing, and customer accounts.',
    highlights: [
      'Full CRUD product listings, customer accounts management, and order processing.',
      'Implemented authentication, RESTful resource controllers, Eloquent ORM with MySQL.',
      'Designed schema, wrote migrations, and handled all deployment configuration independently.',
    ],
    tags: ['Laravel', 'MySQL', 'Tailwind CSS'],
    github: 'https://github.com/KhangT05/fashion_clothing',
    period: '01/2026 - Present',
  },
  {
    name: 'Portfolio',
    description: 'Personal portfolio website built with React, showcasing projects, skills, and contact information.',
    highlights: [
      'Designed and built a responsive single-page application using React with component-based architecture.',
    ],
    tags: ['ReactJs', 'JavaScript', 'CSS'],
    github: 'https://github.com/KhangT05/portfolio',
    period: '05/2026 - 06/2026',
  }
]

export type Experience = {
  period: string
  role: string
  company: string
  description: string[]
}

