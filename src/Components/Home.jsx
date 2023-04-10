import React from 'react'
import '../styles/Home.css'
import { FaBalanceScale, FaBriefcase, FaCity, FaHandshake } from "react-icons/fa"
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <div className='home'>
        <p className='descricion-home'>Defender es un compromiso con nuestra labor y su confianza.</p>
        <NavLink to='/About'>
          <button className='btn-home'>Asociados</button>
        </NavLink>
      </div>
      <section className='servicios-home'>
        <NavLink to='/Servicios'>
          <h2 className='title-servicios'>Areas De Práctica</h2>
        </NavLink>
        <ul className='ul-servicios'>
          <NavLink to='/DerechoP'>
            <li><i><FaBalanceScale /></i> Derecho Penal</li>
          </NavLink>
          <NavLink to='/DerechoPr'>
            <li><i><FaCity /></i> Derecho Privado</li>
          </NavLink>
          <NavLink to='/DerechoA'>
            <li><i><FaBriefcase /></i> Derecho Laboral & Seguridad social</li>
          </NavLink>
          <NavLink to='/DerechoT'>
            <li><i><FaHandshake /></i> Derecho Tributario</li>
          </NavLink>
        </ul>
      </section>

    </div>
  )
}

export default Home


//! iconos FaBalanceScale  GiToyMallet MdAccountBalance  FaBriefcase