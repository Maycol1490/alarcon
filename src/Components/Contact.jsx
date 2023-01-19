import React from 'react'

const Contact = () => {
  return (
    <section className='container-contacto'>
      <h2 className='titulo-contacto'>Contacto</h2>
      <div className='container-inf-contacto'>
        <div className='inf-contacto'>
          <h3>Cra. 4 #8-63, Cali, Valle del Cauca, Colombia  Oficina N.  302.</h3>
          <h3>correo</h3>
      </div>
      <div className='mapa-contacto'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.330548500993!2d-76.54343182724736!3d3.451171160005551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6650189578f%3A0x26eb5e6da6531d3f!2sCra.%204%20%238-63%2C%20San%20Pedro%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses-419!2sco!4v1673892794080!5m2!1ses-419!2sco"
          style={{ width: '500px', height: '500px' }}></iframe>
      </div>
    </div>
    </section >
  )
}
export default Contact
// import {FloatingWhatsApp} from 'react-floating-whatsapp'         <FloatingWhatsApp phoneNumber='+57 3166252214'> f</FloatingWhatsApp>