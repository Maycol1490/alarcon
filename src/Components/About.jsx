import React from 'react'
import '../styles/About.css'
import fotoPerfil from '../assets/logo-.jpeg'
import noticia1 from '../assets/video1.mp4'
import noticia2 from '../assets/video2.mp4'
import noticia3 from '../assets/video3.mp4'
import noticia4 from '../assets/video4.mp4'



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
              <p>
                Alarcon & Abogados Asociados, es una firma de especialistas en distintas áreas del derecho enfocados en adelantar asesorías y representaciones judiciales exitosas, reconocidos por su alto compromiso y empeño en casos de alta complejidad a nivel nacional.
                Contamos con aliados estratégicos y profesionales capacitados en dar acompañamiento a cada una de las etapas del proceso judicial que usted enfrenta.
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