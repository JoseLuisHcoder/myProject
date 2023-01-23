import React, { useEffect } from 'react'
import CardQuotes from '../../components/CardQuotes/CardQuotes'

import './Home.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faFile} from '@fortawesome/free-solid-svg-icons'
import ('../../App.css')



  
const Home = () => {
  const handleClickEmailSend = () => {
    window.open(`mailto:zonajl@gmail.com?subject=Contact&body=Hello Jose Luis`);
  }

  useEffect(() => {
    consoleText(['Front-end Developer', 'Developer Javascript','Web Developer', 'Back-end Developer', 'Full Stack Developer'], 'text',['#FF4D00','#FF4D00','#FF4D00']);
  }, []);
  
  const consoleText =(words, id, colors) => {
    if (colors === undefined) colors = ['#fff'];
    let visible = true;
    let con = document.getElementById('console');
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    let target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function() {
  
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount)
        window.setTimeout(function() {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute('style', 'color:' + colors[0])
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function() {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += x;
      }
    }, 120)
    window.setInterval(function() {
      if (visible === true) {
        con.className = 'console-underscore hidden'
        visible = false;
  
      } else {
        con.className = 'console-underscore'
  
        visible = true;
      }
    }, 400)
  }

  
  return (
    <div className='home'>
      <CardQuotes />
        <div className='home__body'>
                      
            <h1 className='home__title'>JOSE LUIS HUANCA</h1>
            <div className='console-container'> 
                <span id='text'></span>
                <div className='console-underscore' id='console'><span className='console__guion'>&#95;</span></div>
            </div>
            <div className='home__box'></div>

        </div>
        <div className='hidden__box'> <a href=""></a></div>
        <div className='home__contact'>
        
                <div className='home__enlaces'>
                      <a href="https://drive.google.com/file/d/10EM6DdShKYsq6wOaEN69aBRpBHMxoVCY/view?usp=sharing" target="_blank">
                          
                          <FontAwesomeIcon className='home__cv' icon={faFile} />
                                            
                      </a>
                      
                      <a href="https://www.linkedin.com/in/joseluishc" target="_blank">
                          <FontAwesomeIcon className='home__linkedin' icon={faLinkedin} />
                      </a>
                      <a href="https://github.com/JoseLuisHcoder" target="_blank">
                      <FontAwesomeIcon className='home__git' icon={faGithub} />
                      </a>
                     
              </div>
              
            <div className='home__btn'>
              <button onClick={handleClickEmailSend} className='btn__contact'>Contact me!</button>

            </div>
        </div>
            
    </div>
  )
}

export default Home