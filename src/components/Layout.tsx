import { Outlet } from 'react-router-dom';
import { FC } from 'react';
import Navbar from './Navbar';

const Layout: FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
