import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import HeroSection from './components/heroSection.jsx'
import Service from './components/Service.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-green-100 '>
    <Header/>
     <HeroSection/>
     <Service/>
     <Footer/>
    </div>
  )
}

export default App
