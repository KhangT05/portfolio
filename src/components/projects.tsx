import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section__label">Projects</div>
      <div className="projects__list">
        {projects.map(p => (
          <div key={p.name} className="card">
            <div className="project-card__header">
              <span className="project-card__name">
                {p.name}
              </span>
              {p.period && (
                <span className="project-card__period">{p.period}</span>
              )}
            </div>

            <div className="project-card__tags" style={{ marginBottom: 8 }}>
              {p.tags.map(tag => (
                <span key={tag} className="project-card__tag-plain">{tag}</span>
              ))}
            </div>

            <p className="project-card__desc">{p.description}</p>

            {p.highlights?.length > 0 && (
              <ul className="project-card__highlights">
                {p.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}

            {p.github && (
              <div className="project-card__github">
                Github:{' '}
                <a href={p.github} target="_blank" rel="noopener noreferrer">
                  {p.github}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}