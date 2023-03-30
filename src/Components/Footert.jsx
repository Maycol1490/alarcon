import React from 'react'
import '../styles/Footert.css'
import { NavLink } from 'react-router-dom'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import LogoSin from '../assets/500.png'
import foto from '../assets/logo-.jpeg'
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"
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
          <h3 className='titulo-footer'>Datos De Contacto</h3>
          <ul>
            <li><i><FaLocationArrow /></i> Cra. 4 #8-63, Cali, Valle del Cauca</li>
            <li><i><FaLocationArrow /></i>Oficina N.  302.</li>
            <li><i><FaEnvelopeOpenText /></i>consultasjuridicas1122@gmail.com</li>
            <li><i><FaWhatsapp /></i>318-375-4282</li>
          </ul>
        </div>
        <div className='redes-footer'>
          <div className='iconos-footer'>
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
      </footer>
      <div>
        <FloatingWhatsApp
          phoneNumber='+57 3183754282'
          accountName='Alarcon & Abogados Asociados'
          chatMessage='Gracias por comunicarte con Camilo Alarcon & abogados asociados. Por favor, hazme saber en qué área del derecho podemos ayudarte.'
          statusMessage='Disponible'
          avatar={foto}
          chatboxHeight='400px'
        />
      </div>
    </>
  )
}

export default Footert