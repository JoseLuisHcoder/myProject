import React from 'react'
import './Aboutme.css'
import '../../App.css'

const AboutMe = () => {
  return (
    <div className='about'>

      <div className='about__body'>
        <div className='about__body__content'>
          <h1 className='about__title'>ABOUT ME</h1>
          <h3 className='about__subtitle'>Whoami</h3>
          <div className='about__box'></div>
        </div>
        <div className='about__p'>

            <p>
              ¡Hola! mi nombre es <span className='about__p__name'>Jose Luis</span>, tengo una rutina, la cual me ayudó mucho a mejorar como persona y programador, todos los días me levanto a las 5:45 de la mañana y durante 10 minutos cierro mis ojos y medito.  En este tiempo agradezco a quien corresponde, hablo conmigo mismo y analizo lo que hice el día anterior y cómo será el presente día.
            </p>
            <p>
              He desarrollado proyectos solo y en equipo utilizando git y github. Me adapto al entorno de trabajo y a las tecnologías que se requiera.
            </p>
            <p>
              La Programación es un continuo aprender, y eso me agrada mucho; constantemente estoy mejorando mis habilidades de autoaprendizaje y comunicación para expresar mis ideas de forma técnica y contribuir a la solución práctica o el cumplimiento de los objetivos propuestos.
            </p>
            <p><span className='about__p__prueba'>Ponme a prueba</span>!</p>
        </div>

        <div className='about__btn'>
        <button className='btn'>Contact me!</button>

        </div>
      </div>
      <div className='about__img'>
        <span></span>
      </div>
    </div>
  )
}

export default AboutMe