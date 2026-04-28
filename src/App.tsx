import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import ExperiencePage from './components/Experience';
import ExperienceDetails from './components/ExperienceDetails';
import ProjectDetails from './components/ProjectDetails';
import Layout from './components/Layout';
import About from './components/About';
import { HashRouter } from 'react-router-dom';
import { experiences, projects } from './data';
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/about" element={<About />} />
          {experiences.map((exp) => (
            <Route key={exp.short} path={`/experience/${exp.short}`} element={<ExperienceDetails />} />
          ))}
          {projects.map((proj) => (
            <Route key={proj.short} path={`/project/${proj.short}`} element={<ProjectDetails />} />
          ))}
        </Route>
      </Routes>
    </HashRouter>
  );
}
