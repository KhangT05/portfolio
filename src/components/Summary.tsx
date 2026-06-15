import { profile, stack } from '../data/portfolio'

export default function Summary() {

  const heroTags = stack.map(c => c.tags.slice(0, 2)).flat().slice(0, 6);

  return (
    <section id="about" className="section">
      <div className="section__label">{profile.role}</div>
      <p className="summary__bio">{profile.bio}</p>
      <div className="summary__tags">
        {heroTags.map(tag => (
          <span key={tag} className="tag tag--pill">{tag}</span>
        ))}
      </div>
      <div className="summary__actions">
        <button
          className="btn btn--primary"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <i className="ti ti-mail" aria-hidden /> Get in touch
        </button>
        <button
          className="btn btn--ghost"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <i className="ti ti-briefcase" aria-hidden /> View work
        </button>
      </div>
    </section>
  )
}