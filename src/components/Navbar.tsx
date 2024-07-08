import { Link, useLocation } from 'react-router-dom';
import { FC, useState, useEffect, CSSProperties } from 'react'; // Import CSSProperties
import Logo from './Logo';
import './styling/Navbar.css';
import { Captions } from '../interface/App.types';

// Import the image for the about background
import aboutBackgroundImage from '../assets/about.svg';

const Navbar: FC<Captions> = (captions) => {
  const [linkClass, setLinkClass] = useState('wordLink-default');
  const [header, setHeader] = useState<string | null>(null);
  const [caption, setCaption] = useState<string | null>(null);
  const [backgroundStyle, setBackgroundStyle] = useState<CSSProperties>({ // Specify CSSProperties type
    backgroundColor: 'var(--default-bg)', // Use as a string
    height: '80px' // Default height
  });
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/experience') {
      setHeader("Formative Experiences");
      setCaption(captions["experience"]);
      setLinkClass('wordLink-white');
      setBackgroundStyle({
        backgroundColor: 'var(--dark-blue)',
        height: '300px'
      });
    } else if (location.pathname === '/experience/jpl') {
      setHeader("NASA Jet Propulsion Lab");
      setCaption(captions["jpl"]);
      setLinkClass('wordLink-white');
      setBackgroundStyle({
        backgroundColor: 'var(--nasa)',
        height: '300px'
      });
    } else if (location.pathname === '/experience/relativity') {
      setHeader("Relativity Space");
      setCaption(captions["relativity"]);
      setLinkClass('wordLink-white');
      setBackgroundStyle({
        backgroundColor: 'var(--rela)',
        height: '300px'
      });
    } else if (location.pathname === '/experience/columbia') {
      setHeader("Course Assistant for Advanced Programming in C");
      setCaption(captions["columbia"]);
      setLinkClass('wordLink-white');
      setBackgroundStyle({
        backgroundColor: 'var(--ta)',
        height: '300px'
      });
    } else if (location.pathname === '/projects') {
      setHeader("Personal Projects");
      setCaption(captions["projects"]);
      setLinkClass('wordLink-white');
      setBackgroundStyle({
        backgroundColor: 'var(--dark-blue)',
        height: '300px'
      });
    } else if (location.pathname === '/project/lionpool'){
      setHeader("Founder of Lion Pool");
      setCaption(captions["lionpool"]);
      setLinkClass('wordLink-white');
      setBackgroundStyle({
        backgroundColor: 'var(--ta)',
        height: '300px'
      });
    } else if (location.pathname === '/project/stepitup'){
      setHeader("Lead Developer for Step It Up!");
      setCaption(captions["stepitup"]);
      setLinkClass('wordLink-white');
      setBackgroundStyle({
        backgroundColor: 'var(--step-it-up)',
        height: '300px'
      });
    } else if (location.pathname === '/project/phillipcodes'){
      setHeader("Designer and Developer for Personal Website");
      setCaption(captions["phillipcodes"]);
      setLinkClass('wordLink-white');
      setBackgroundStyle({
        backgroundColor: 'var(--dark-blue)',
        height: '300px'
      });
    } else if (location.pathname === '/') {
      setHeader(null);
      setCaption(null);
      setLinkClass('wordLink-default');
      setBackgroundStyle({
        backgroundColor: 'inherit',
        height: '80px'
      });
    } else if (location.pathname === '/about') {
      setHeader(null);
      setCaption(null);
      setLinkClass('wordLink-default');
      setBackgroundStyle({
        backgroundColor: 'inherit',
        width: "100vw",
        height: "300px",
        backgroundImage: `url(${aboutBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      });
    } else {
      setHeader(null);
      setCaption(null);
      setLinkClass('wordLink-default');
      setBackgroundStyle({
        backgroundColor: 'inherit',
        height: '80px'
      });
    }
  }, [location.pathname, captions, aboutBackgroundImage]);

  return (
    <div className='nav-background' style={backgroundStyle}>
      <nav className='nav'>
        <Logo />
        <ul>
          <li>
            <Link to="/experience" className={linkClass}>EXPERIENCE</Link>
          </li>
          <li>
            <Link to="/projects" className={linkClass}>PROJECTS</Link>
          </li>
          <li>
            <Link to="/about" className={linkClass}>ABOUT</Link>
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
  );
};

export default Navbar;
