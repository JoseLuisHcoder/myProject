import React, { useState } from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRocket} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faHouse} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

    

 

  return (
    <nav className='navbar'>
        <section className='navbar__content'>
            <FontAwesomeIcon className='navbar__icon' icon={faRocket} />
            <a href=""></a>
            <h2 className='navbar__text'>WELCOME</h2>
            <div className='navbar__enlaces'>
                <a href="#">
                    <FontAwesomeIcon icon={faHouse} />
                </a>
                <a href="https://www.linkedin.com/in/joseluishc" target="_blank">
                    <FontAwesomeIcon className='navbar__linkedin' icon={faLinkedin} />
                </a>
                <a href="https://github.com/JoseLuisHcoder" target="_blank">
                <FontAwesomeIcon className='navbar__git' icon={faGithub} />
                </a>
            </div>
            
        
        </section>
       
        </nav>
  )
}

export default NavBar