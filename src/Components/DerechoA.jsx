import React from 'react'
import '../styles/ServiciosG.css'
import Imagen2 from '../assets/imagen2.jpg'

const DerechoA = () => {
  return (
    <div className='servicios-generales'>
        <div className='imagen-general'>
            <img src={Imagen2} alt="" />
        </div>
        <div className='container-generales'>
            <h1 className='titulo-generales'>DERECHO LABORAL Y DE LA SEGURIDAD SOCIAL.</h1>
            <h3 className='subtitulo-generales'>Nuestros servicios</h3>
            <h3 className='subtitulo-generales'>DERECHO LABORAL PARA TRABAJADORES</h3>
            <ul>
                <li>Demandas por despidos sin justa causa o representación en procesos ordinarios laborales.</li>
                <li>Cobro de indemnizaciones, salarios y prestaciones sociales.</li>
                <li>Asesoría encaminada al reintegro por estabilidad laboral reforzada.</li>
                <li>Acompañamiento y asesoría en transacciones y conciliaciones laborales.</li>
                <li>Asistencia en procesos de fuero sindical y otros.</li>
                <li>Acciones de tutela.</li>
                <li>Otros servicios legales.</li>
            </ul>
            <h3 className='subtitulo-generales'>DERECHO LABORAL EMPRESARIAL: </h3>
            <ul>
                <li>Elaboración de contratos laborales.</li>
                <li>Acompañamiento y asesoría en la terminación de contratos.</li>
                <li>Asesoría en procesos disciplinarios.</li>
                <li>Acompañamiento en la creación de normatividad interna empresarial tales como reglamentos internos de trabajo entre otros.</li>
                <li>Otros servicios legales.</li>
            </ul>
        </div>
    </div>
  )
}

export default DerechoA