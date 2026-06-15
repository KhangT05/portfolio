import Nav from './components/Nav'
import Summary from './components/Summary'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Projects from './components/projects'

const Divider = () => (
  <div style={{ height: '0.5px', background: 'var(--border)', marginBottom: '3.5rem' }} />
)

export default function App() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '5.5rem 1.25rem 4rem' }}>
      <Nav />
      <Summary />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Experience />
      <Divider />
      <Contact />
    </div>
  )
}
