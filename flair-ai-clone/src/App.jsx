import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/HeroSection'
import Screen from './Components/screen'
import Carousel from './Components/Carousel'
import MarketingSection from './Components/MarketingSection'
import StageScene from './Components/StageScene'
import VideoContentSection from './Components/VideoContentSection'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Hero />
    <Screen />
    <Carousel />
    <MarketingSection />
    <StageScene />
    <VideoContentSection />
    </>
  )
}

export default App
