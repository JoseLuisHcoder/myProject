import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CardQuotes from './components/CardQuotes';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';




function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toogleDarkMode = () => setDarkMode(!darkMode)



  return (
    <div className={darkMode ? "App dark" : "App"}>
     <NavBar />
      <button className='btn__dark' onClick={toogleDarkMode}>dark mode</button>
      
      <CardQuotes  />
      <Home />
      
    </div>
  )
}

export default App
