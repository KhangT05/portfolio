import { GraduationCap, MapPin, Calendar, User } from 'lucide-react'
import './About.css'

const courses = [
  'Object-Oriented Programming (OOP)',
  'Data Structures & Algorithms',
  'Information System Analysis & Design',
  'Database Management Systems',
]

const timeline = [
  {
    year: '2026',
    title: 'E-commerce Backend',
    company: 'Content Marketing Project',
    desc: 'Built full backend for an e-commerce platform including auth, product catalog, and order management with Laravel.',
    accent: true,
  },
  {
    year: '2025',
    title: 'Full-stack Learning',
    company: 'Self-directed',
    desc: 'Expanded from PHP/Laravel into React, Express, and .NET Core MVC. Explored ABP Framework for enterprise patterns.',
    accent: false,
  },
  {
    year: '2023',
    title: 'Started IT Degree',
    company: 'Cao Thang Technical College',
    desc: 'Enrolled in Information Technology program. Began learning OOP, algorithms, and database fundamentals.',
    accent: false,
  },
]

export default function About() {
  return (
    <div className="page about-page">
      <div className="container">

        {/* Header */}
        <div className="about-header animate-fadeUp delay-1">
          <p className="section-label">About me</p>
          <h1 className="about-title">
            The person<br />
            <span className="serif-em">behind the code</span>
          </h1>
        </div>

        <div className="divider" />

        {/* Profile section */}
        <div className="profile-section animate-fadeUp delay-2">
          <div className="profile-avatar">
            <div className="avatar-ring">
              <div className="avatar-inner">
                <User size={48} strokeWidth={1} />
              </div>
            </div>
            <div className="avatar-tag">
              <span className="tag-dot" />
              Open to opportunities
            </div>
          </div>

          <div className="profile-info">
            <h2 className="profile-name">Tran Ngoc Khang</h2>
            <p className="profile-role">&lt;Web Developer /&gt;</p>

            <div className="profile-meta">
              <span className="meta-item">
                <MapPin size={14} />
                Thoi An, Ho Chi Minh City
              </span>
              <span className="meta-item">
                <Calendar size={14} />
                Born 14 November 2005
              </span>
              <span className="meta-item">
                <GraduationCap size={14} />
                Graduating 2026 (expected)
              </span>
            </div>

            <p className="profile-bio">
              I'm a passionate web developer currently in my 3rd year at Cao Thang Technical College.
              My focus is backend development — I love designing systems that are clean, efficient, and
              maintainable. I'm driven by curiosity and the challenge of turning complex requirements into
              elegant solutions.
            </p>
            <p className="profile-bio">
              Outside of coding, I'm constantly learning — whether it's exploring new frameworks, reading
              about software architecture, or working on personal side projects to sharpen my craft.
            </p>
          </div>
        </div>

        <div className="divider" />

        {/* Education */}
        <div className="animate-fadeUp delay-3">
          <p className="section-label">Education</p>
          <div className="edu-card">
            <div className="edu-left">
              <div className="edu-icon">
                <GraduationCap size={24} />
              </div>
            </div>
            <div className="edu-right">
              <div className="edu-header">
                <h3 className="edu-school">Cao Thang Technical College</h3>
                <span className="edu-period">Aug 2023 — Aug 2026 (expected)</span>
              </div>
              <p className="edu-degree">Information Technology</p>
              <div className="edu-courses">
                <p className="courses-label">Relevant coursework</p>
                <div className="courses-list">
                  {courses.map((c, i) => (
                    <span key={i} className="course-tag">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* Timeline */}
        <div className="animate-fadeUp delay-4">
          <p className="section-label">Timeline</p>
          <h2 className="section-heading">Journey so far</h2>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={i} className={`timeline-item ${item.accent ? 'accent' : ''}`}>
                <div className="tl-year">
                  <span>{item.year}</span>
                  <div className="tl-line" />
                </div>
                <div className="tl-content">
                  <p className="tl-company">{item.company}</p>
                  <h3 className="tl-title">{item.title}</h3>
                  <p className="tl-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
