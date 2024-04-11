import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Aboutme from './Components/Aboutme'
import Service from './Components/Service'
import Work from './Components/Work'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


function App() {
 

  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutme/>
      <Service />
      <Work />
      <Contact />
      <Footer />
    </div>
        
  )
}

export default App
