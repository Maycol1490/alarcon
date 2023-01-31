import React from 'react'
import '../styles/Headert.css'
import { NavLink } from 'react-router-dom'
import { FaBars} from "react-icons/fa";
import Logo from '../assets/1logo-nav.png'
import { useState } from 'react';


const Headert = () => {
  const [nav, setnav] = useState(false)
  
  
  const handleNav = () => {
    setnav(true)
  }

  return (
    <header className='header'>
      <div className='imangen-logo'>
        <NavLink to='/Home'><img src={Logo} alt="Alarcon Y Asociados" /></NavLink>
      </div>
      <nav className='nav'>
        <ul>
          <li><NavLink to='/About'>Quines Somos</NavLink></li>
          <li><NavLink to='/Servicios'>Areas De Práctica</NavLink></li>
          <li><NavLink to='/Contact'>Contacto</NavLink></li>
        </ul>
      </nav>
      <div className='nav-movil'><FaBars onClick={handleNav}/></div>
    </header>
  )
}

export default Headert