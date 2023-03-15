import React from 'react'
import '../styles/ServiciosG.css'
import Imagen3 from '../assets/imagen3.jpg'


const DerechoPr = () => {
  return (
    <div className='servicios-generales'>
        <div className='imagen-general'>
            <img src={Imagen3} alt="" />
        </div>
        <div className='container-generales'>
            <h1 className='titulo-generales'>DERECHO PRIVADO.</h1>
            <h3 className='subtitulo-generales'>Nuestros servicios</h3>
            <ul>
                <li>Representación en el área del Derecho de Familia, tal como la fijación de alimentos, custodia, visitas ante los Jueces de Familia o entidades garantes de derechos del niño, representación en procesos de divorcio contencioso o voluntario, elaboración de testamentos, representación en procesos de sucesión entre otros. </li>
                <li>Elaboración en contratos civiles y comerciales.</li>
                <li>Acompañamiento y representación en procesos civiles tales como sucesiones, prescripciones, responsabilidad contractual y extracontractual.</li>
                <li>Estudio de títulos en la adquisición de bienes.</li>
                <li>Representación  en asuntos referentes a la propiedad posesión y tenencia de inmuebles</li>
                <li>Asistencia jurídica en conciliaciones extrajudiciales en los distintos ámbitos del derecho privado.</li>
                <li>Asistencia en el ámbito de la propiedad horizontal y arrendamientos.</li>
                <li>Gestión ejecutiva de obligaciones de dar o de hacer.</li>
                <li>Otros servicios legales.</li>
            </ul>
        </div>
    </div>
  )
}

export default DerechoPr