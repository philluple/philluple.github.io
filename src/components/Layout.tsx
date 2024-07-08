import { Outlet } from 'react-router-dom';
import { Captions } from '../interface/App.types';
import { FC } from 'react';
import Navbar from './Navbar';

const Layout: FC<Captions> = (captions) =>{
  return (
    <>
      <Navbar {...captions}/>
      <Outlet />
    </>
  );
}

export default Layout
