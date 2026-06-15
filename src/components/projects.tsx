import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section__label">Projects</div>
      <h2 className="section__title">Selected work</h2>
      <div className="projects__list">
        {projects.map(p => (
          <div key={p.name} className="card">
            <div className="project-card__header">
              <span className="project-card__name">{p.emoji} {p.name}</span>
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                >
                  <i className="ti ti-external-link" aria-hidden /> GitHub
                </a>
              )}
            </div>
            <p className="project-card__desc">{p.description}</p>
            <div className="project-card__tags">
              {p.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}