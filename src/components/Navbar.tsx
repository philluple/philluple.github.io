import { Link, useLocation } from 'react-router-dom';
import { FC, CSSProperties } from 'react';
import Logo from './Logo';
import './styling/Navbar.css';
import { captions } from '../data';
import aboutBackgroundImage from '../assets/about.svg';

type NavConfig = {
  linkClass: 'wordLink-default' | 'wordLink-white';
  header: string | null;
  caption: string | null;
  backgroundStyle: CSSProperties;
};

function getNavConfig(pathname: string): NavConfig {
  const dark = (bg: string): NavConfig['backgroundStyle'] => ({
    backgroundColor: bg,
    height: '300px',
  });

  if (pathname === '/experience/bloomberg') return {
    linkClass: 'wordLink-white', header: 'Bloomberg LP',
    caption: captions['bloomberg'], backgroundStyle: dark('var(--bloomberg)'),
  };
  if (pathname === '/experience') return {
    linkClass: 'wordLink-white', header: 'Formative Experiences',
    caption: captions['experience'], backgroundStyle: dark('var(--dark-blue)'),
  };
  if (pathname === '/experience/jpl') return {
    linkClass: 'wordLink-white', header: 'NASA Jet Propulsion Lab',
    caption: captions['jpl'], backgroundStyle: dark('var(--nasa)'),
  };
  if (pathname === '/experience/relativity') return {
    linkClass: 'wordLink-white', header: 'Relativity Space',
    caption: captions['relativity'], backgroundStyle: dark('var(--rela)'),
  };
  if (pathname === '/experience/columbia') return {
    linkClass: 'wordLink-white', header: 'Course Assistant for Advanced Programming in C',
    caption: captions['columbia'], backgroundStyle: dark('var(--ta)'),
  };
  if (pathname === '/projects') return {
    linkClass: 'wordLink-white', header: 'Personal Projects',
    caption: captions['projects'], backgroundStyle: dark('var(--dark-blue)'),
  };
  if (pathname === '/project/lionpool') return {
    linkClass: 'wordLink-white', header: 'Founder of Lion Pool',
    caption: captions['lionpool'], backgroundStyle: dark('var(--ta)'),
  };
  if (pathname === '/project/stepitup') return {
    linkClass: 'wordLink-white', header: 'Lead Developer for Step It Up!',
    caption: captions['stepitup'], backgroundStyle: dark('var(--step-it-up)'),
  };
  if (pathname === '/project/phillipcodes') return {
    linkClass: 'wordLink-white', header: 'Designer and Developer for Personal Website',
    caption: captions['phillipcodes'], backgroundStyle: dark('var(--dark-blue)'),
  };
  if (pathname === '/about') return {
    linkClass: 'wordLink-default', header: null, caption: null,
    backgroundStyle: {
      backgroundColor: 'var(--default-bg)',
      width: '100vw', height: '300px',
      backgroundImage: `url(${aboutBackgroundImage})`,
      backgroundSize: 'cover', backgroundPosition: 'center',
    },
  };
  return {
    linkClass: 'wordLink-default', header: null, caption: null,
    backgroundStyle: { backgroundColor: 'inherit', height: '80px' },
  };
}

const Navbar: FC = () => {
  const location = useLocation();
  const { linkClass, header, caption, backgroundStyle } = getNavConfig(location.pathname);
  const showInfo = header !== null && caption !== null;

  return (
    <div className='nav-background' style={backgroundStyle}>
      <nav className='nav'>
        <Logo />
        <ul>
          <li><Link to="/experience" className={linkClass}>EXPERIENCE</Link></li>
          <li><Link to="/projects" className={linkClass}>PROJECTS</Link></li>
          <li><Link to="/about" className={linkClass}>ABOUT</Link></li>
        </ul>
      </nav>
      <div className={`info-container ${showInfo ? 'info-visible' : ''}`}>
        <div className='header'>{header ?? ''}</div>
        <div className='caption'>{caption ?? ''}</div>
      </div>
    </div>
  );
};

export default Navbar;
