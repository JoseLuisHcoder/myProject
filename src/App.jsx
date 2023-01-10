import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './components/Sidebar/Sidebar.css'
import './App.css'


import Sidebar from './components/Sidebar/Sidebar';
import MyFooter from './components/MyFooter/MyFooter';
import Main from './components/Main/Main';




function App() {
 
const [darkMode, setDarkMode] = useState(false)
 

  return (
    <div className={darkMode ? "App dark": "App"}>
      <Sidebar 
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      />
      <Main />
       
      <MyFooter />
    </div>
  )
}

export default App
