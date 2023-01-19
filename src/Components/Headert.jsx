import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/1logo-nav.png'


const Headert = () => {

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
    </header>
  )
}

export default Headert