import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/resume" element={<Home />} />
          <Route path="/projects" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;