import { Routes, Route } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import ExperiencePage from './components/Experience';
import ExperienceDetails from './components/ExperienceDetails'
import Layout from './components/Layout';
import { HashRouter } from 'react-router-dom';
import { ExperienceProps } from './interface/App.types';
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  const [exp, setExp]  = useState<ExperienceProps | null>(null); // Specify type for 'data'
  // const [proj, setProj] = useState<string[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const expResponse = await fetch('./data/experience.json');
        const expData = await expResponse.json();
        setExp(expData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  },[]);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<ExperiencePage {...exp}/>}/>
          {exp && (
            Object.keys(exp).map((comp, index) => (
              <Route key={index} path={`/experience/${exp[comp].short}`} element={<ExperienceDetails {...exp[comp]} />} />
            ))
          )}
        </Route>
      </Routes>
    </HashRouter>
    
  );
}
