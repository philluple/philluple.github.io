import { Link } from 'react-router-dom'; // Import appropriate hooks from your routing library
import "./styling/Navbar.css"


export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/">
                <img
                src="/logo.svg"
                height="40"
                alt="React Bootstrap logo"
                />
            </Link>
            <ul>
                <li>
                    <Link to="/experience">Experience</Link>
                </li>
                
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
            
        </nav>
    );
}

  
  