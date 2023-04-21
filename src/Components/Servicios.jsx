import React from 'react'
import '../styles/Servicios.css'
import { Link} from 'react-router-dom'
import Imagen1 from '../assets/imagen1.jpg'
import Imagen2 from '../assets/imagen2.jpg'
import Imagen3 from '../assets/imagen3.jpg'
import Imagen4 from '../assets/imagen4.jpg'


const Servicios = () => {
  return (
    <div>
      <div className='servicios'>
        <div className="blog-card">
          <div className="meta">
            <div className="photo"><img src={Imagen1} alt="Derecho Penal alarconabogadosyasociados.com" /></div>
          </div>
          <div className="description">
            <h1>DERECHO PENAL</h1>
            <p>Alarcon & Abogados Asociados, se ha destacado por asumir defensas penales de manera diligente, seria y estudiosa buscando obtener el mayor beneficio a nuestros clientes y siendo un aliado fuerte en la garantía de los derechos humanos inherentes al procesado.</p>
            <Link to='/DerechoP'>
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">VER MAS</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="blog-card2">
          <div className="meta">
            <div className="photo"><img src={Imagen2} alt="Derecho laboral alarconabogadosyasociados.com" /></div>
          </div>
          <div className="description">
            <h1>DERECHO LABORAL Y DE LA SEGURIDAD SOCIAL</h1>
            <p>Alarcon & Abogados Asociados reconoce que las relaciones laborales son esenciales para su éxito particular o empresarial. Nuestra firma cuenta con especialistas en el Derecho Laboral y de Seguridad Social capacitados en asumir litigios laborales ante cualquier instancia judicial y en defensa, de un lado, de los derechos laborales del trabajador colombiano y, de otro lado, de intereses empresariales. </p>
            <Link to='/DerechoA'>
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">VER MAS</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="blog-card">
          <div className="meta">
            <div className="photo"><img src={Imagen3} alt="derecho privado alarconabogadosyasociados.com" /></div>
          </div>
          <div className="description">
            <h1>DERECHO PRIVADO</h1>
            <p>Nuestra firma cuenta con amplia experiencia en resolver problemas jurídicos de naturaleza privada o civil, brindando acompañamiento, asesoría y representación en las distintas acciones que integran esta área del Derecho.</p>
            <Link to='/DerechoPr'>
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">VER MAS</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="blog-card2">
          <div className="meta">
            <div className="photo"><img src={Imagen4} alt="derecho tributario alarconabogadosyasociados.com" /></div>
          </div>
          <div className="description">
            <h1>DERECHO TRIBUTARIO</h1>
            <p>Alarcon & Abogados Asociados  se encuentra comprometida en brindar una excelente asesoría en aspectos tributarios para personas naturales y jurídicas.</p>
            <Link to='/DerechoT'>           
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">VER MAS</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Servicios