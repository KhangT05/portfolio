import { Link } from 'react-router-dom'
import { ArrowUpRight, GitBranch as Github, Mail, ChevronDown } from 'lucide-react'

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-glow" />
        </div>

        <div className="container">
          <div className="hero-content">
            <p className="section-label animate-fadeUp delay-1">Available for internship · Ho Chi Minh City</p>

            <h1 className="hero-title animate-fadeUp delay-2">
              <span className="title-line">Tran</span>
              <span className="title-line accent">Ngoc</span>
              <span className="title-line">Khang</span>
            </h1>

            <div className="hero-role animate-fadeUp delay-3">
              <span className="role-bracket">&lt;</span>
              <span className="role-text">Web Developer</span>
              <span className="role-bracket">/&gt;</span>
            </div>

            <p className="hero-desc animate-fadeUp delay-4">
              Backend-focused developer building robust, scalable web systems.<br />
              Specializing in <em>Laravel</em>, <em>React</em>, and modern full-stack architecture.
            </p>

            <div className="hero-actions animate-fadeUp delay-5">
              <Link to="/projects" className="btn-primary">
                View Projects <ArrowUpRight size={16} />
              </Link>
              <Link to="/contact" className="btn-ghost">
                Get in Touch
              </Link>
            </div>

            <div className="hero-socials animate-fadeUp delay-6">
              <a href="https://github.com/KhangT05" target="_blank" rel="noreferrer" className="social-link">
                <Github size={16} />
                <span>github.com/KhangT05</span>
              </a>
              <a href="mailto:khangpropc345@gmail.com" className="social-link">
                <Mail size={16} />
                <span>khangpropc345@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="hero-stats animate-fadeUp delay-4">
            <div className="stat-card">
              <span className="stat-num">2026</span>
              <span className="stat-label">Expected graduation</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">5+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">01</span>
              <span className="stat-label">Project shipped</span>
            </div>
          </div>
        </div>

        <a href="#intro" className="scroll-hint">
          <ChevronDown size={20} />
          <span>Scroll</span>
        </a>
      </section>

      {/* Intro strip */}
      <section id="intro" className="intro-strip">
        <div className="marquee">
          {['Laravel', 'React', 'TypeScript', 'PHP', 'MySQL', 'Express', 'Node.js', '.NET Core', 'GitHub', 'ABP Framework'].map((t, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-dot" />
              {t}
            </span>
          ))}
          {['Laravel', 'React', 'TypeScript', 'PHP', 'MySQL', 'Express', 'Node.js', '.NET Core', 'GitHub', 'ABP Framework'].map((t, i) => (
            <span key={`b${i}`} className="marquee-item" aria-hidden>
              <span className="marquee-dot" />
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Quick bio */}
      <section className="quick-bio">
        <div className="container">
          <div className="bio-grid">
            <div className="bio-left">
              <p className="section-label">Who I am</p>
              <h2 className="bio-heading">
                A developer who<br />
                <span className="serif-em">loves clean code</span><br />
                & solid systems
              </h2>
            </div>
            <div className="bio-right">
              <p>
                I'm a 3rd-year Information Technology student at Cao Thang Technical College,
                building real-world experience through backend engineering and full-stack projects.
              </p>
              <p>
                My recent work involves designing e-commerce platforms with Laravel — from authentication
                flows to database optimization — with a focus on maintainability and performance.
              </p>
              <Link to="/about" className="read-more">
                Learn more about me <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
