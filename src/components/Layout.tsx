import { Outlet } from 'react-router-dom';
import { CaptionProps } from '../interface/App.types';
import { FC } from 'react';
import Navbar from './Navbar';

const Layout: FC<CaptionProps> = (captions) =>{
  return (
    <>
      <Navbar {...captions}/>
      <Outlet />
    </>
  );
}

export default Layout
