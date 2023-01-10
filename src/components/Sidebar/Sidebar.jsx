import React, { useState } from 'react'

import './Sidebar.css'
import '../../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRocket} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faFile} from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({darkMode, setDarkMode}) => {

    const handleDarkMode = () => setDarkMode(!darkMode)

  return (
    <div className='sidebar'>
        
            <a href="#">
            <FontAwesomeIcon className='sidebar__icon' icon={faRocket} />

            </a>
            <h2 className='sidebar__text'>WELCOME</h2>
            <div className='sidebar__enlaces'>
                <a href="https://drive.google.com/file/d/1bEjdiUqSppzNpX67fgrtJqpFX_Ovq6s3/view?usp=share_link" target="_blank">
                    <FontAwesomeIcon icon={faFile} />
                </a>
                <a href="https://www.linkedin.com/in/joseluishc" target="_blank">
                    <FontAwesomeIcon className='sidebar__linkedin' icon={faLinkedin} />
                </a>
                <a href="https://github.com/JoseLuisHcoder" target="_blank">
                <FontAwesomeIcon className='sidebar__git' icon={faGithub} />
                </a>
            </div>
            <div className='sidebar__btn'>
                <label className='switch'>
                    <input type="checkbox" checked={darkMode} onChange={handleDarkMode} />
                    <span className="slider round"></span>
                </label>
            </div>
               
        </div>
  )
}

export default Sidebar