import React from 'react'
import CardQuotes from '../../components/CardQuotes/CardQuotes'

import ('../../App.css')
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <CardQuotes />
        <div className='home__body'>
            <h1 className='home__title'>JOSE LUIS HUANCA</h1>
            <div className='console-container'> 
                <span id='text'></span>
                <div class='console-underscore' id='console'>&#95;</div>
            </div>
            <div className='home__box'></div>

            {/* <div class='console-container'>
              <span id='text'></span>
              <div class='console-underscore' id='console'>&#95;</div>
            </div> */}


        </div>
        
    </div>
  )
}

export default Home