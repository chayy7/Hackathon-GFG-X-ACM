import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/HeroSection'
import Carousel from './Components/Carousel'
import MarketingSection from './Components/MarketingSection'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Hero />
    <Carousel />
    <MarketingSection />
    </>
  )
}

export default App
