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
                Camilo Alarcon Perdomo.
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
      <div>
        <div className="card">
          <div className="card_load">
            <img src={fotoPerfil} alt="" />
          </div>
          <div>
            <div className="card_load_extreme_title">
              <h1>
                Mauricio Martinez 
              </h1>
            </div>
            <div className="card_load_extreme_descripion">
              <h4>Asociados</h4>
              <p>
              Abogado egresado de la Universidad Libre, Litigante en derecho privado con énfasis en la defensa jurídica en procesos de carácter judicial, Actualmente se desempeña como asesor externo de varias empresas de la región, asesor principal externo de profesionales asociados empresa dedicada a la recuperación de cartera y 
              asesoría jurídica bajo la lay 675 de 2001, como profesional se destaca su capacidad de análisis de las causas que motivan el servicio para establecer la mejor estrategia y asesorarlo durante todo el proceso, tomando los asuntos a él conferidos con responsabilidad y dinamismo, gracias su experiencia cuenta con una alta valoración de sus clientes siendo un sello de respaldo para estos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card">
          <div className="card_load">
            <img src={fotoPerfil} alt="" />
          </div>
          <div>
            <div className="card_load_extreme_title">
              <h1>
                Amir Abdul Rahim Lopez 
              </h1>
            </div>
            <div className="card_load_extreme_descripion">
              <h4>Asociados</h4>
              <p>
              Abogado egresado de la universidad Libre de Cali, especialista en Derecho Penal y Magister en criminalística y ciencias forenses de la misma universidad, Actualmente se desempeña como defensor de confianza en procesos penales en casos de conocimiento público, desarrollando defensas estratégicas sólidas a partir de pruebas periciales  científicas las cuales brindan plena garantía ante órganos de cierre como la Corte Suprema de Justicia, donde 
              ha tenido la oportunidad de manejar casos en delitos como Concierto para delinquir, narcotráfico, lavado de activos, porte de armas de uso privativo, tráfico de estupefacientes, terrorismo, delitos sexuales y procesos de extinción de dominio, entre otros. Es menester destacar su compromiso profesional con cada uno de sus procesos, su gran capacidad argumentativa y resolutiva en momentos clave del proceso.
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