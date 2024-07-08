import { Routes, Route } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import ExperiencePage from './components/Experience';
import ExperienceDetails from './components/ExperienceDetails'
import ProjectDetails from './components/ProjectDetails'
import Layout from './components/Layout';
import About from './components/About';
import { HashRouter } from 'react-router-dom';
import { Captions } from './interface/App.types';
import { fetchCaptions, fetchPaths } from './utils/common';
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  const [exp, setExp]  = useState<string[]>([]);
  const [proj, setProj] = useState<string[]>([]);
  const [cap, setCap] = useState<Captions | null>(null);
  useEffect(() => {
    const fetchDataAndSet = async () => {
      const exp = await fetchPaths('./data/metadata/experience.txt');
      const proj = await fetchPaths('./data/metadata/projects.txt');
      setExp(exp);
      setProj(proj);
      const captions = await fetchCaptions();
      if (captions){
        setCap(captions);
      }      
    };
    fetchDataAndSet(); // Invoke the async function inside useEffect
  }, []);

  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout {...cap}/>}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<ExperiencePage/>}/>
          <Route path="/about" element={<About/>}/>
          {exp && (
            exp.map((experience, index) => (
              <Route key={index} path={`/experience/${experience}`} element={<ExperienceDetails/>} />
            ))
          )}
          {proj && (
            proj.map((project, index) => {
              console.log(project);
              return (
                <Route key={index} path={`/project/${project}`} element={<ProjectDetails />} />
              );
            })
          )}

        </Route>
      </Routes>
    </HashRouter>
    </>
    
    
  );
}


