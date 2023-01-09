import React from 'react'
import './Aboutme.css'
import '../../App.css'

const AboutMe = () => {

  const handleClick = () => {
    window.open(`mailto:zonajl@gmail.com?subject=Contact&body=Hello Jose Luis`);
  }
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
            Hello! My name is <span className='about__p__name'>Jose Luis</span>, I have a routine which has helped me a lot to improve as a person and programmer. Every day I wake up at 5:45 in the morning and for 10 minutes I close my eyes and meditate. During this time I thank whoever is appropriate, I speak to myself and I analyze what I did the previous day and how the present day will be.
          </p>
          <p>
            I have developed projects both individually and as part of a team using git and github. I am able to adapt to the work environment and technologies that are required.
          </p>
          <p>
            Programming is a continuous learning process, and I really like that; I'm constantly improving my self-learning and communication skills to express my ideas in a technical way and contribute to practical solutions or the achievement of proposed goals.
          </p>
          <p><span className='about__p__prueba'>Put me to the test</span>!</p>
        </div>

        <div className='about__btn'>
          <button onClick={handleClick} className='btn__contact'>Contact me!</button>

        </div>
      </div>
      <div className='about__img'>
        <div className="backg">
          <div className="planet">
            <div className="r1"></div>
            <div className="r2"></div>
            <div className="r3"></div>
            <div className="r4"></div>
            <div className="r5"></div>
            <div className="r6"></div>
            <div className="r7"></div>
            <div className="r8"></div>
            <div className="shad"></div>
          </div>
          <div className="stars">
            <div className="s1"></div>
            <div className="s2"></div>
            <div className="s3"></div>
            <div className="s4"></div>
            <div className="s5"></div>
            <div className="s6"></div>
          </div>
          <div className="an">
            <div className="tank"></div>
            <div className="astro">

              <div className="helmet">
                <div className="glass">
                  <div className="shine"></div>
                </div>
              </div>
              <div className="dress">
                <div className="c">
                  <div className="btn1"></div>
                  <div className="btn2"></div>
                  <div className="btn3"></div>
                  <div className="btn4"></div>
                </div>
              </div>
              <div className="handl">
                <div className="handl1">
                  <div className="glovel">
                    <div className="thumbl"></div>
                    <div className="b2"></div>
                  </div>
                </div>
              </div>
              <div className="handr">
                <div className="handr1">
                  <div className="glover">
                    <div className="thumbr"></div>
                    <div className="b1"></div>
                  </div>
                </div>
              </div>
              <div className="legl">
                <div className="bootl1">
                  <div className="bootl2"></div>
                </div>
              </div>
              <div className="legr">
                <div className="bootr1">
                  <div className="bootr2"></div>
                </div>
              </div>
              <div className="pipe">
                <div className="pipe2">
                  <div className="pipe3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe