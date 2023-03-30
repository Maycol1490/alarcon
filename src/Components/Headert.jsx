import React from 'react'
import '../styles/Headert.css'
import { NavLink } from 'react-router-dom'
import { FaBars, FaEnvelopeOpenText } from "react-icons/fa";
import Logo from '../assets/500.png'
import { useState } from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"


const Headert = () => {
  const [navMobil, setnavMobil] = useState(false)
  const [navOpen, setnavOpen] = useState(false)

  //e.target.reset()

  const handleNav = () => {
    setnavMobil(!navMobil);
  }

  return (
    <header className='header'>
      <div className='redes-header'>
        <a href="mailto:inf@alarconabogados.com"><i><FaEnvelopeOpenText /></i>inf@alarconabogados.com</a>
        <div className='iconos-header'>
          <a href="https://twitter.com/AlarconyAsoc" target='_blank'>
          <i><BsTwitter /></i>
          </a>
          <a href="https://www.instagram.com/alarconyasociados_/" target='_blank'>
          <i><BsInstagram /></i>
          </a>
          <a href="" target='_blank'>
          <i><BsFacebook /></i>
          </a>
        </div>
      </div>
      <div className='menu-header'>
        <div className='imangen-logo'>
          <NavLink to='/'><img src={Logo} alt="Alarcon Y Asociados" /></NavLink>
        </div>
        <nav className='nav'>
          <ul>
            <li><NavLink to='/About'>Quienes Somos</NavLink></li>
            <li><NavLink to='/Servicios'>Areas De Práctica</NavLink></li>
            <li><NavLink to='/Contact' >Contacto</NavLink></li>
          </ul>
        </nav>
        <div className='nav-movil'><FaBars onClick={handleNav} />
        <nav className={`'nav-mobil' ${navMobil ? 'nav-mobil' : 'nav-none'}`}>
          <ul>
            <li><NavLink to='/About' onClick={handleNav}>Quienes Somos</NavLink></li>
            <li><NavLink to='/Servicios' onClick={handleNav}>Areas De Práctica</NavLink></li>
            <li><NavLink to='/Contact' onClick={handleNav}>Contacto</NavLink></li>
          </ul>
        </nav>
        </div>
      </div>
    </header>
  )
}

export default Headert