import React from 'react'
import '../styles/Footert.css'
import { NavLink } from 'react-router-dom'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import LogoSin from '../assets/1logo-nav.png'
import foto from '../assets/logo-.jpeg'
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs"
import { FaEnvelopeOpenText, FaLocationArrow, FaWhatsapp } from 'react-icons/fa'

const Footert = () => {
  return (
    <>
      <footer className='footer'>
        <NavLink to='/Home'>
          <div className='logo-footer'>
            <img src={LogoSin} alt="" />
          </div>
        </NavLink>
          <div className='contacto-footer'>
            <h3 className='titulo-footer'>Datos de contacto</h3>
            <ul>
              <li><i><FaLocationArrow /></i> Cra. 4 #8-63, Cali, Valle del Cauca</li>
              <li><i><FaLocationArrow /></i>Oficina N.  302.</li>
              <li><i><FaEnvelopeOpenText /></i>consultasjuridicas1122@gmail.com</li>
              <li><i><FaWhatsapp /></i>318-375-4282</li>
            </ul>
          </div>
        <div className='redes-footer'>
          <div className='iconos-footer'>
            <i><BsLinkedin /></i>
            <i><BsInstagram /></i>
            <i><BsFacebook /></i>
          </div>
        </div>
      </footer>
      <div>
        <FloatingWhatsApp
          phoneNumber='+57 3183754282'
          accountName='Alarcon & Abogados Asociados'
          chatMessage='Gracias por comunicarte con Camilo Alarcon & abogados asociados. Por favor, hazme saber en qué área del derecho podemos ayudarte.'
          statusMessage='Disponible'
          avatar={foto}
          chatboxHeight='350px'
        />
      </div>
    </>
  )
}

export default Footert