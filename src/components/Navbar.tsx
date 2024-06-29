import { Link } from 'react-router-dom';

import './styling/Navbar.css';

export default function Navbar() {
  
  return (
    <nav className='nav'>
      <Link to="/">
         <img src="./logo.svg" height="50" alt="React Bootstrap logo" />
      </Link>
      <ul>
        <li>
          <Link to="/experience" className='wordLink'>Experience</Link>
        </li>
        <li>
          <Link to="/projects" className='wordLink'>Projects</Link>
        </li>
      </ul>
    </nav>
  )
};
