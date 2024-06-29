import { Link, useLocation } from 'react-router-dom';
import { FC, useState, useEffect } from 'react';
import Logo from './Logo'
import './styling/Navbar.css';
import { CaptionProps } from '../interface/App.types';

const Navbar: FC<CaptionProps> = (captions) =>{
  const [linkClass, setLinkClass] = useState('wordLink-default');
  const [header, setHeader] = useState<string | null>(null);
  const [caption, setCaption] =  useState<string | null>(null);
  const location = useLocation();

  const [backgroundStyle, setBackgroundStyle] = useState({
    backgroundColor: 'var(--default-bg)', // Use as a string
    height: '80px' // Default height
  });
  // Update background style based on location.pathname
  useEffect(() => {
    if (location.pathname === '/experience') {
      setHeader("Formative Experiences");
      setCaption(captions["experience"]);
      setLinkClass('wordLink-white')
      setBackgroundStyle({
        backgroundColor: 'var(--dark-blue)',
        height: '300px' // Adjusted height for homepage
      });
    } else if (location.pathname === '/experience/jpl') {
      setHeader("NASA Jet Propulsion Lab");
      setCaption(captions["jpl"]);
      setLinkClass('wordLink-white')
      setBackgroundStyle({
        backgroundColor: 'var(--nasa)', 
        height: '300px' 
      });
    } else if (location.pathname == '/experience/relativity'){
        setHeader("Relativity Space")
        setCaption(captions["relativity"])
        setLinkClass('wordLink-white')
        setBackgroundStyle({
          backgroundColor: 'var(--rela)', 
          height: '300px' 
        });
    } else if (location.pathname == '/experience/columbia'){
      setHeader("Course Assistant for Advanced Programming in C")
      setCaption(captions["columbia"])
      setLinkClass('wordLink-white')
      setBackgroundStyle({
        backgroundColor: 'var(--ta)', 
        height: '300px' 
      });
    } else if (location.pathname == '/projects'){
      setHeader("Personal Projects")
      setCaption(captions["projects"])
      setLinkClass('wordLink-white')
      setBackgroundStyle({
        backgroundColor: 'var(--dark-blue)', 
        height: '300px' 
      });
    }
      else if (location.pathname == '/'){
        setHeader(null)
        setCaption(null)
        setLinkClass('wordLink-default')
        setBackgroundStyle({
          backgroundColor: 'inherit', 
          height: '80px' 
      });
    }
  }, [location.pathname]);
  
  return (
    <div className='nav-background' style={backgroundStyle}>
      <nav className='nav'>
        <Logo/>
        <ul>
          <li>
            <Link to="/experience" className={linkClass}>Experience</Link>
          </li>
          <li>
            <Link to="/projects" className={linkClass}>Projects</Link>
          </li>
        </ul>
      </nav>
      {header && caption && (
      <div className='info-container'>
        <div className='header'>{header}</div>
        <div className='caption'>{caption}</div>
      </div>
    )}
    </div>
  )
};

export default Navbar;