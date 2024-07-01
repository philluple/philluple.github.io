import './styling/Logo.css'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function Logo(){
    const location = useLocation();
    const [titleID, setTitleID] = useState('title-base')
    const [subID, setSubID] = useState('sub-base')

    useEffect(() =>{
      if (location.pathname === '/' || location.pathname == '/about'){
        setTitleID('title-base')
        setSubID('sub-base')
      } else {
        setTitleID('title-white')
        setSubID('sub-white')
      }
    });
    
    return (
      <>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div id='logo-container'>
          <div id={titleID}>Phillip Le</div>
          <div id={subID}>Software Engineer</div>
        </div>
      </Link>
        
      </>
    )
}
