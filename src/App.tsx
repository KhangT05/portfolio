import Nav from './components/Nav'
import Summary from './components/Summary'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import './index.css'
import Projects from './components/projects'

const Divider = () => <div className="divider" />

export default function App() {
  return (
    <>
      <Nav />
      <main className="page">
        <Summary />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Experience />
        <Divider />
        <Contact />
      </main>
    </>
  )
}