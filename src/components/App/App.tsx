import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Projects from "../../pages/Projects/Projects";
import ProjectDetail from "../../pages/ProjectDetail/ProjectDetail";
import Contact from "../../pages/Contact/Contact";
import Layout from "../Layout/Layout";
import About from "../../pages/About/About";
import Overview from "../../pages/Overview/Overview";
import Experience from "../../pages/Experience/Experience";
import Education from "../../pages/Education/Education";
import Skills from "../../pages/Skills/Skills";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:title" element={<ProjectDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />}>
            <Route index element={<Overview />} />
            <Route path="experience" element={<Experience />} />
            <Route path="education" element={<Education />} />
            <Route path="skills" element={<Skills />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
