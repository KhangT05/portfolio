import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section__label">Experience</div>
      <h2 className="section__title">Timeline</h2>
      <div className="timeline">
        <div className="timeline__line" />
        {experience.map((item, i) => (
          <div key={i} className="timeline__item">
            <div className={`timeline__dot${item.current ? ' timeline__dot--current' : ''}`} />
            <div className="timeline__period">{item.period}</div>
            <div className="timeline__role">{item.role}</div>
            <div className="timeline__company">{item.company}</div>
            <div className="timeline__desc">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  )
}