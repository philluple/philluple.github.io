import { Link, useResolvedPath, useMatch } from 'react-router-dom'; // Import appropriate hooks from your routing library
import "./styling/Navbar.css"

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  // Add any other props you want to pass down to the Link component
}

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/">
                <img
                src="/logo.svg"
                height="40"
                className="d-inline-block align-top"
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

const CustomLink: React.FC<CustomLinkProps> = ({ to, children, className, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} className={className} {...props}>
          {children}
        </Link>
      </li>
    );
};
  
  