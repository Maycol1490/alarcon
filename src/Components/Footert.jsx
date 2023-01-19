import React from 'react'
import { NavLink } from 'react-router-dom'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import LogoSin from '../assets/1logo-nav.png'
import foto from '../assets/logo-.jpeg'
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs"

const Footert = () => {
  return (
      <>
    <footer className='footer'>
      <NavLink to='/Home'>
      <div className='logo-footer'>
        <img src={LogoSin} alt="" />
      </div>
      </NavLink>
      <div className='iconos-footer'>
        <i><BsLinkedin /></i>
        <i><BsInstagram /></i>
        <i><BsFacebook /></i>
      </div>
      <h3 className='telefono-footer'>telefonos & correo</h3>
    </footer>
    <div>
    <FloatingWhatsApp
          phoneNumber='+57 3166252214'
          accountName='Alarcon & Abogados Asociados'
          chatMessage='Hola en que puedo ayudarte'
          statusMessage='Disponible'
          avatar={foto}
          className='floating-whatsapp floating-whatsapp-button'
        />
    </div>
    </>
  )
}

export default Footert