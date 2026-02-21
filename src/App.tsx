import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Layout from "./components/layout";
import About from "./components/about/about";
import Resume from "./components/resume";
import Projects from "./components/projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;