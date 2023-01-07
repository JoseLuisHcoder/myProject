import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Home from './pages/Home/Home';

import AboutMe from './pages/AboutMe/AboutMe';
import WorkExperiencie from './pages/WorkExperiencie/WorkExperiencie';
import Projects from './pages/Projects/Projects';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';




function App() {
 
const [darkMode, setDarkMode] = useState(false)
 

  return (
    <div className={darkMode ? "App dark": "App"}>
      <Sidebar 
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      />
    
      <main className='main'>
          <Home />
          <AboutMe />
          <WorkExperiencie />
          <Projects />
          
        </main>      
    <Footer />
    </div>
  )
}

export default App
