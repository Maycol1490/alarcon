import React from 'react'
import '../styles/About.css'
import fotoPerfil from '../assets/logo-.jpeg'
import noticia1 from '../assets/noticia1.mp4'
import noticia2 from '../assets/noticia2.mp4'
import noticia3 from '../assets/noticia3.mp4'
import noticia4 from '../assets/noticia4.mp4'



const About = () => {
  return (
    <section>
      <div>
        <div className="card">
          <div className="card_load">
            <img src={fotoPerfil} alt="" />
          </div>
          <div>
            <div className="card_load_extreme_title">
              <h1>
                Camilo Alarcon
              </h1>
            </div>
            <div className="card_load_extreme_descripion">
              <h4>Director General.</h4>
              <p>
              Abogado de la universidad Libre, especialista en Derecho Penal y Criminalística de la misma universidad y especialista en Derecho Tributario de la Universidad Externado de Colombia. Actualmente se desempeña como Director General de la firma Alarcón & Asociados. Ha sido defensa de confianza en procesos penales complejos y de relevancia nacional. 
              Es preciso exaltar su conocimiento y experiencia en los asuntos jurídicos en materia penal por su gran capacidad de oratoria y argumentación.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='noticias-perfil'>
        <h3 className='subtitle-perfil'>Noticias</h3>
        <div className='galeria-perfil'>
          <video src={noticia1} controls></video>
          <video src={noticia2} controls></video>
          <video src={noticia3} controls></video>
          <video src={noticia4} controls></video>
        </div>
      </div>
    </section>
  )
}

export default About