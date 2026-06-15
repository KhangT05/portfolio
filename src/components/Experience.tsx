import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section__label">Work Experience</div>
      <div className="timeline">
        <div className="timeline__line" />
        {experience.map((item, i) => (
          <div key={i} className="timeline__item">
            <div className="timeline__header">
              <div className="timeline__company">{item.company}</div>
              <div className="timeline__period">{item.period}</div>
            </div>
            <div className="timeline__role">{item.role}</div>
            <ul className="timeline__desc">
              {item.description.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}