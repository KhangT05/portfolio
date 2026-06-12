import { useState } from 'react'

type Category = 'All' | 'Languages' | 'Frameworks' | 'Databases' | 'Tools';

interface Skill {
  name: string
  level: number
  category: Exclude<Category, 'All'>
  note?: string
}

const skills: Skill[] = [
  { name: 'PHP', level: 80, category: 'Languages', note: 'Primary language' },
  { name: 'JavaScript', level: 70, category: 'Languages' },
  { name: 'C#', level: 55, category: 'Languages' },
  { name: 'TypeScript', level: 50, category: 'Languages' },
  { name: 'Laravel', level: 82, category: 'Frameworks', note: 'Most experienced' },
  { name: 'React.js', level: 68, category: 'Frameworks' },
  { name: 'Express.js', level: 60, category: 'Frameworks' },
  { name: '.NET Core MVC', level: 52, category: 'Frameworks' },
  { name: 'ABP Framework', level: 45, category: 'Frameworks' },
  { name: 'MySQL', level: 75, category: 'Databases', note: 'Main DB' },
  { name: 'SQL Server', level: 60, category: 'Databases' },
  { name: 'GitHub', level: 78, category: 'Tools', note: 'Daily use' },
  { name: 'GitLab', level: 65, category: 'Tools' },
]

const categories: Category[] = ['All', 'Languages', 'Frameworks', 'Databases', 'Tools']

const levelLabel = (n: number) => {
  if (n >= 80) return 'Advanced'
  if (n >= 60) return 'Intermediate'
  return 'Learning'
}

const levelColor = (n: number) => {
  if (n >= 80) return 'var(--accent)'
  if (n >= 60) return '#88aaff'
  return 'var(--text-muted)'
}

export default function Skills() {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? skills : skills.filter(s => s.category === active)

  return (
    <div className="page skills-page">
      <div className="container">

        <div className="skills-header animate-fadeUp delay-1">
          <p className="section-label">Capabilities</p>
          <h1 className="skills-title">
            Tools in my<br />
            <span className="serif-em">developer toolkit</span>
          </h1>
        </div>

        <div className="divider" />

        {/* Filter tabs */}
        <div className="filter-tabs animate-fadeUp delay-2">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-tab ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
              {cat !== 'All' && (
                <span className="tab-count">
                  {skills.filter(s => s.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="skills-grid animate-fadeUp delay-3">
          {filtered.map((skill, i) => (
            <div key={skill.name} className="skill-row" style={{ animationDelay: `${i * 0.04}s` }}>
              <div className="skill-meta">
                <div className="skill-name-wrap">
                  <span className="skill-name">{skill.name}</span>
                  {skill.note && <span className="skill-note">{skill.note}</span>}
                </div>
                <div className="skill-right">
                  <span className="skill-level" style={{ color: levelColor(skill.level) }}>
                    {levelLabel(skill.level)}
                  </span>
                  <span className="skill-pct">{skill.level}%</span>
                </div>
              </div>
              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{
                    width: `${skill.level}%`,
                    background: skill.level >= 80
                      ? 'var(--accent)'
                      : skill.level >= 60
                        ? '#88aaff'
                        : 'var(--text-dim)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="divider" />

        {/* Legend / note */}
        <div className="skills-legend animate-fadeUp delay-4">
          <p className="section-label">Proficiency scale</p>
          <div className="legend-items">
            <div className="legend-item">
              <span className="legend-dot" style={{ background: 'var(--accent)' }} />
              <div>
                <span className="legend-name">Advanced (80%+)</span>
                <p className="legend-desc">Comfortable building production features independently</p>
              </div>
            </div>
            <div className="legend-item">
              <span className="legend-dot" style={{ background: '#88aaff' }} />
              <div>
                <span className="legend-name">Intermediate (60–79%)</span>
                <p className="legend-desc">Can implement standard patterns with occasional reference</p>
              </div>
            </div>
            <div className="legend-item">
              <span className="legend-dot" style={{ background: 'var(--text-dim)' }} />
              <div>
                <span className="legend-name">Learning (below 60%)</span>
                <p className="legend-desc">Actively studying, building projects to deepen knowledge</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
