import React from 'react'
import '../styles/About.css'
import fotoPerfil from '../assets/logo-.jpeg'
import noticia1 from '../assets/1logo-nav.png'
import noticia2 from '../assets/imagen1.jpg'
import noticia3 from '../assets/imagen2.jpg'
import noticia4 from '../assets/imagen3.jpg'
import noticia5 from '../assets/imagen4.jpg'


const About = () => {
  return (
    <section>
      <div>
        <div class="card">
          <div class="card_load">
            <img src={fotoPerfil} alt="" />
          </div>
          <div>
            <div class="card_load_extreme_title">
              <h1>
               Camilo Alarcon
              </h1>
            </div>
            <div class="card_load_extreme_descripion">
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
          <img src={noticia1} alt="" />
          <img src={noticia2} alt="" />
          <img src={noticia3} alt="" />
          <img src={noticia4} alt="" />
          <img src={noticia5} alt="" />
        </div>
      </div>
    </section>
  )
}

export default About