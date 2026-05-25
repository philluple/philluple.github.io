import { Link, useLocation } from 'react-router-dom';

export default function Logo() {
  const location = useLocation();
  const isDark = location.pathname !== '/' && location.pathname !== '/about';
  const color = isDark ? 'var(--default-bg)' : 'var(--dark-blue)';

  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <div id='logo-container'>
        <div id='logo-title' style={{ color }}>Phillip Le</div>
        <div id='logo-sub' style={{ color }}>Software Engineer</div>
      </div>
    </Link>
  );
}
