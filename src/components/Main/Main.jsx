import React from 'react'
import './Main.css'
import Home from '../../pages/Home/Home'
import AboutMe from '../../pages/AboutMe/AboutMe'
import MySkills from '../../pages/MySkills/MySkills'
import Projects from '../../pages/Projects/Projects'


const Main = () => {
  return (
    <div className='main__container'>
        <Home  />
        <AboutMe />
        <MySkills />
        <Projects />

    </div>
  )
}

export default Main