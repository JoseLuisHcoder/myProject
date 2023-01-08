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
            <h3 className='home__subtitle'>Development Full Stack</h3>
            <div className='home__box'></div>

        </div>
        
    </div>
  )
}

export default Home