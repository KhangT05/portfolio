import { stack } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section__label">Skills</div>
      <h2 className="section__title">Tech stack</h2>
      <div className="skills__grid">
        {stack.map(cat => (
          <div key={cat.label} className="card">
            <div className="skill-card__label">{cat.label}</div>
            <div className="skill-card__tags">
              {cat.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}