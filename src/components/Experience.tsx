import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" style={{ marginBottom: '3.5rem' }}>
      <div style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '0.75rem', fontWeight: 500 }}>Experience</div>
      <h2 style={{ fontSize: 20, fontWeight: 500, marginBottom: '1.25rem' }}>Timeline</h2>
      <div style={{ position: 'relative', paddingLeft: 20 }}>
        <div style={{
          position: 'absolute', left: 5, top: 6, bottom: 6,
          width: '0.5px', background: 'var(--border)',
        }} />
        {experience.map((item, i) => (
          <div key={i} style={{ position: 'relative', marginBottom: '2rem' }}>
            <div style={{
              position: 'absolute', left: -16, top: 5,
              width: 8, height: 8, borderRadius: '50%',
              background: item.current ? 'var(--accent)' : 'var(--border-hover)',
            }} />
            <div style={{ fontSize: 11, color: 'var(--text-tertiary)', fontFamily: 'monospace', marginBottom: 4 }}>
              {item.period}
            </div>
            <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 2 }}>{item.role}</div>
            <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 6 }}>{item.company}</div>
            <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.55 }}>{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
