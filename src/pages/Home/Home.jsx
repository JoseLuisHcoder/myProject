import React, { useEffect } from 'react'
import CardQuotes from '../../components/CardQuotes/CardQuotes'

import ('../../App.css')
import './Home.css'


  
const Home = () => {

  useEffect(() => {
    consoleText(['Front-end Developer', 'Web developer', 'Back-end Developer'], 'text',['#FF4D00','#FF4D00','#FF4D00']);
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
                <div className='console-underscore' id='console'>&#95;</div>
            </div>
            <div className='home__box'></div>

        </div>
        
    </div>
  )
}

export default Home