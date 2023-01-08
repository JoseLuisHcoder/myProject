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
            Hello! My name is<span className='about__p__name'>Jose Luis</span>, I have a routine which has helped me a lot to improve as a person and programmer. Every day I wake up at 5:45 in the morning and for 10 minutes I close my eyes and meditate. During this time I thank whoever is appropriate, I speak to myself and I analyze what I did the previous day and how the present day will be.
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
        <button onClick={handleClick} className='btn'>Contact me!</button>

        </div>
      </div>
      <div className='about__img'>
      <div class="backg">
		<div class="planet">
			<div class="r1"></div>
			<div class="r2"></div>
			<div class="r3"></div>
			<div class="r4"></div>
			<div class="r5"></div>
			<div class="r6"></div>
			<div class="r7"></div>
			<div class="r8"></div>
			<div class="shad"></div>
		</div>
		<div class="stars">
			<div class="s1"></div>
			<div class="s2"></div>
			<div class="s3"></div>
			<div class="s4"></div>
			<div class="s5"></div>
			<div class="s6"></div>
		</div>
		<div class="an">
			<div class="tank"></div>
			<div class="astro">
					
					<div class="helmet">
						<div class="glass">
							<div class="shine"></div>
						</div>
					</div>
					<div class="dress">
						<div class="c">
							<div class="btn1"></div>
							<div class="btn2"></div>
							<div class="btn3"></div>
							<div class="btn4"></div>
						</div>
					</div>
					<div class="handl">
						<div class="handl1">
							<div class="glovel">
								<div class="thumbl"></div>
								<div class="b2"></div>
							</div>
						</div>
					</div>
					<div class="handr">
						<div class="handr1">
							<div class="glover">
								<div class="thumbr"></div>
								<div class="b1"></div>
							</div>
						</div>
					</div>
					<div class="legl">
						<div class="bootl1">
							<div class="bootl2"></div>
						</div>
					</div>
					<div class="legr">
						<div class="bootr1">
							<div class="bootr2"></div>
						</div>
					</div>
					<div class="pipe">
						<div class="pipe2">
							<div class="pipe3"></div>
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