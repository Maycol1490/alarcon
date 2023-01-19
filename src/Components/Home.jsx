import React from 'react'
import { FaBalanceScale, FaBriefcase, FaCity, FaHandshake } from "react-icons/fa"
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <div className='home'>
        <p className='descricion-home'>Sé que todas esas horas de sacrificio y dedicación valdrán
          la pena cuando vemos el rostro de nuestros clientes satisfechos.</p>
        <NavLink to='/About'>
          <button className='btn-home'>Abogados</button>
        </NavLink>
      </div>
      <section  className='servicios'>
        <NavLink to='/Servicios'>
        <h2 className='title-servicios'>Areas De Práctica</h2>
        </NavLink>
        <ul className='ul-servicios'>
          <li><i><FaCity /></i> Derecho Privado</li>
          <li><i><FaBalanceScale /></i> Derecho Penal</li>
          <li><i><FaBriefcase /></i> Derecho Laboral & Seguridad social</li>
          <li><i><FaHandshake /></i> Derecho Civil</li>
        </ul>
      </section>

    </div>
  )
}

export default Home


//! iconos FaBalanceScale  GiToyMallet MdAccountBalance  FaBriefcase