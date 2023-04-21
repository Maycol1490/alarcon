import React from 'react'
import '../styles/ServiciosG.css'
import Imagen4 from '../assets/imagen4.jpg'

const DerechoT = () => {
  return (
    <div className='servicios-generales'>
        <div className='imagen-general'>
            <img src={Imagen4} alt="derecho tributario alarconabogadosyasociados.com" />
        </div>
        <div className='container-generales'>
            <h1 className='titulo-generales'>DERECHO TRIBUTARIO: </h1>
            <h3 className='subtitulo-generales'>Nuestros servicios</h3>       
            <ul>
                <li> Asesoría en temas de impuestos: IVA, Impuesto de sociedades, Impuesto a la renta, etc.</li>
                <li>Asesoramiento fiscal tanto a personas físicas como jurídicas.</li>
                <li>Elaboración de la declaración en la renta.</li>
                <li>Otros servicios legales.</li>
            </ul>
        </div>
    </div>
  )
}

export default DerechoT