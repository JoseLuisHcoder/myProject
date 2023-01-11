import React, { useEffect, useState } from 'react'
import quotes from '../../utils/quotes.json'
import '../../App.css'
import './CardQuotes.css'

const CardQuotes = () => {

    const getIndexRandom = arr => Math.floor(Math.random() * arr.length)
  const firstQuote = quotes[getIndexRandom(quotes)]

  const [randomQuote, setRandomQuote] = useState(firstQuote)

  useEffect(() => {
    const getRandomQuoteAll = () => {
      setRandomQuote(quotes[getIndexRandom(quotes)])
    }

    const interval = setInterval(getRandomQuoteAll, 4000)
    return () => clearInterval(interval)

    


  }, [])

  return (
    <div className='cq__body'>
      <div className='cq__container'>
         <p className='cq__p'>"{randomQuote.quote}"</p>
        <h4 className='cq__author'>{randomQuote.author}</h4>

      </div>
    </div>
  )
}

export default CardQuotes