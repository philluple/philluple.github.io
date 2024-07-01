import { Routes, Route } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import ExperiencePage from './components/Experience';
import ExperienceDetails from './components/ExperienceDetails'
import Layout from './components/Layout';
import { HashRouter } from 'react-router-dom';
import { ExperienceProps, CaptionProps, dataType } from './interface/App.types';
import { fetchData } from './utils/fetchFile';
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  const [exp, setExp]  = useState<ExperienceProps | null>(null); // Specify type for 'data'
  const [cap, setCap] = useState<CaptionProps | null>(null);
  // const [proj, setProj] = useState<string[]>([]);
  useEffect(() => {
    const fetchDataAndSet = async () => {
      try {
        const experienceData = await fetchData(dataType.EXPERIENCE); 
        const captionData = await fetchData(dataType.CAPTIONS);
        if (experienceData) {
          setExp(experienceData as ExperienceProps);
        }
        if (captionData) {
          setCap(captionData as CaptionProps);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
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
          <Route path="/experience" element={<ExperiencePage {...exp}/>}/>
          <Route path="/about" element={<h1>Hello</h1>}/>
          {exp && (
            Object.keys(exp).map((comp, index) => (
              <Route key={index} path={`/experience/${exp[comp].short}`} element={<ExperienceDetails {...exp[comp]} />} />
            ))
          )}
        </Route>
      </Routes>
    </HashRouter>
    </>
    
    
  );
}


