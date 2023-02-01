import React from 'react'
import '../styles/Servicios.css'
import { FaBalanceScale, FaBriefcase, FaCity, FaHandshake } from "react-icons/fa"

const Servicios = () => {
  return (
    <div>
      <div className='servicios'>
        <div className="blog-card">
          <div className="meta">
            <div className="photo"><i><FaBalanceScale /></i></div>
          </div>
          <div className="description">
            <h1>DERECHO PENAL</h1>
            <p>Alarcon & Abogados Asociados, se ha destacado por asumir defensas penales de manera diligente, seria y estudiosa buscando obtener el mayor beneficio a nuestros clientes y siendo un aliado fuerte en la garantía de los derechos humanos inherentes al procesado</p>
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">VER MAS</span>
            </button>
          </div>
        </div>
        <div className="blog-card2">
          <div className="meta">
            <div className="photo"><i><FaBriefcase /></i></div>
          </div>
          <div className="description">
            <h1>DERECHO LABORAL Y DE LA SEGURIDAD SOCIAL</h1>
            <p>Alarcon & Abogados Asociados reconoce que las relaciones laborales son esenciales para su éxito particular o empresarial. Nuestra firma cuenta con especialistas en el Derecho Laboral y de Seguridad Social capacitados en asumir litigios laborales ante cualquier instancia judicial y en defensa, de un lado, de los derechos laborales del trabajador colombiano y, de otro lado, de intereses empresariales. </p>
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">VER MAS</span>
            </button>
          </div>
        </div>
        <div className="blog-card">
          <div className="meta">
            <div className="photo"><i><FaCity /></i></div>
          </div>
          <div className="description">
            <h1>DERECHO PRIVADO</h1>
            <p>Nuestra firma cuenta con amplia experiencia en resolver problemas jurídicos de naturaleza privada o civil, brindando acompañamiento, asesoría y representación en las distintas acciones que integran esta área del Derecho.</p>
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">VER MAS</span>
            </button>
          </div>
        </div>
        <div className="blog-card2">
          <div className="meta">
            <div className="photo"><i><FaHandshake /></i></div>
          </div>
          <div className="description">
            <h1>DERECHO TRIBUTARIO</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">VER MAS</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Servicios