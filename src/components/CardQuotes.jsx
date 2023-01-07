import React, { useEffect, useState } from 'react'
import quotes from '../utils/quotes.json'
import '../App.css'

const CardQuotes = () => {

    const getIndexRandom = arr => Math.floor(Math.random() * arr.length)
  const firstQuote = quotes[getIndexRandom(quotes)]

  const [randomQuote, setRandomQuote] = useState(firstQuote)

  useEffect(() => {
    const getRandomQuoteAll = () => {
      setRandomQuote(quotes[getIndexRandom(quotes)])
    }

    const interval = setInterval(getRandomQuoteAll, 5000)
    return () => clearInterval(interval)

  }, [])

  return (
    <div className='cq__body'>
        <p className='cq__p'>"{randomQuote.quote}"</p>
        <h3 className='cq__author'>{randomQuote.author}</h3>
    </div>
  )
}

export default CardQuotes