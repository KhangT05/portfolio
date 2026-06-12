import { ArrowUpRight, GitBranch as Github, ShoppingCart, Lock, Database } from 'lucide-react'

const projects = [
  {
    id: '01',
    title: 'E-commerce Platform',
    period: 'Jan 2026 – Feb 2026',
    category: 'Backend Development',
    desc: 'Full-featured e-commerce backend with product catalog management, order processing workflows, and secure user authentication. Designed for performance under real transaction load.',
    features: [
      'Product catalog & inventory management',
      'Order creation, tracking & status workflows',
      'JWT-based authentication & role authorization',
      'Optimized DB queries & transaction handling',
      'RESTful API design for frontend integration',
    ],
    stack: ['Laravel', 'PHP', 'MySQL'],
    icons: [ShoppingCart, Lock, Database],
    link: 'https://github.com/KhangT05',
    highlight: true,
  },
]

const upcoming = [
  { title: 'Blog Platform', stack: ['React', 'Express', 'MongoDB'], status: 'Planned' },
  { title: 'Task Manager API', stack: ['Laravel', 'Vue.js'], status: 'In Progress' },
  { title: '.NET Dashboard', stack: ['.NET Core', 'ABP Framework', 'SQL Server'], status: 'Planned' },
]

export default function Projects() {
  return (
    <div className="page projects-page">
      <div className="container">

        <div className="projects-header animate-fadeUp delay-1">
          <p className="section-label">My work</p>
          <h1 className="projects-title">
            Things I've<br />
            <span className="serif-em">built & shipped</span>
          </h1>
        </div>

        <div className="divider" />

        {/* Featured */}
        {projects.map((project) => (
          <div key={project.id} className="project-card featured animate-fadeUp delay-2">
            <div className="project-top">
              <div className="project-header">
                <div className="project-num">{project.id}</div>
                <div>
                  <span className="project-category">{project.category}</span>
                  <h2 className="project-title">{project.title}</h2>
                  <span className="project-period">{project.period}</span>
                </div>
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link-btn">
                <Github size={16} />
                <span>View on GitHub</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            <p className="project-desc">{project.desc}</p>

            <div className="project-body">
              <div className="project-features">
                <p className="feat-label">Key Features</p>
                <ul>
                  {project.features.map((f, i) => (
                    <li key={i}>
                      <span className="feat-dot" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-visual">
                {project.icons.map((Icon, i) => (
                  <div key={i} className="vis-icon" style={{ animationDelay: `${i * 0.15}s` }}>
                    <Icon size={28} strokeWidth={1} />
                  </div>
                ))}
                <div className="vis-label">Tech stack</div>
                <div className="vis-stack">
                  {project.stack.map((s, i) => (
                    <span key={i} className="stack-badge">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="divider" />

        {/* Upcoming */}
        <div className="animate-fadeUp delay-3">
          <p className="section-label">Coming next</p>
          <h2 className="section-heading">Upcoming projects</h2>
          <div className="upcoming-grid">
            {upcoming.map((p, i) => (
              <div key={i} className="upcoming-card">
                <div className="upcoming-top">
                  <h3 className="upcoming-title">{p.title}</h3>
                  <span className={`upcoming-status ${p.status === 'In Progress' ? 'active' : ''}`}>
                    {p.status === 'In Progress' && <span className="status-dot" />}
                    {p.status}
                  </span>
                </div>
                <div className="upcoming-stack">
                  {p.stack.map((s, j) => (
                    <span key={j} className="stack-mini">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
