import React from 'react'
import '../styles/ServiciosG.css'
import Imagen1 from '../assets/imagen1.jpg'


const DerechoP = () => {
    return (
        <section className='servicios-generales'>
            <div className='imagen-general'>
                <img src={Imagen1} alt="" />
            </div>
            <div className='container-generales'>
                <h1 className='titulo-generales'>DERECHO PENAL.</h1>
                <h3 className='subtitulo-generales'>Nuestros servicios</h3>
                <h3 className='subtitulo-generales'>DERECHO PENAL PARA PERSONA NATURAL</h3>
                <ul>
                    <li>Acompañamiento y representación en la formulación de denuncias ante la Fiscalía General de la Nación o quejas disciplinarias.</li>
                    <li>Representación judicial en todas las etapas del proceso penal como defensa técnica o representante de víctimas.</li>
                    <li>Representación de víctimas en procesos penales, incluyendo etapas extraprocesales, judiciales y formulando incidente en reparación de víctimas.</li>
                    <li>Representación como acusador privado.</li>
                    <li>Análisis legal preventivo ante la comisión de cualquier conducta delictiva, consulta de información en materia penal que evidencie la necesidad de iniciar labores de defensa.</li>
                    <li>Investigación, recaudo de evidencias físicas o elementos materiales probatorios a cargo de investigadores privados como aliados estratégicos.</li>
                    <li>Asesoría en materia penal y criminalística. </li>
                    <li>Representación en procesos de extinción de dominio.</li>
                    <li>Otros servicios legales.</li>
                </ul>
                <h3 className='subtitulo-generales'>DERECHO PENAL PARA EL SECTOR EMPRESARIAL</h3>
                <ul>
                    <li>Asesoría y representación especializada en materia de delitos económicos, tributarios o fiscales.</li>
                    <li>Otros servicios legales.</li>
                </ul>
            </div>
        </section>
    )
}

export default DerechoP