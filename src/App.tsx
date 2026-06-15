import Nav from './components/Nav'
import Summary from './components/Summary'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Projects from './components/Projects'
import './index.css'

const Divider = () => <div className="divider" />

export default function App() {
  return (
    <>
      <Nav />
      <main className="page">
        <Summary />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Contact />
      </main>
    </>
  )
}