import React from 'react'
import HeroSection from './Components/HeroSection/HeroSection'
import { Routes, Route } from 'react-router-dom'
import Cards from './Components/Cards/Cards'
import LegacySection from './Components/LegacySection/LegacySection'

import TestimonialV2 from './Components/TestimonialV2/TestimonialV2'
import FaqSection from './Components/FaqSection/FaqSection'
import Logos from './Components/Logos/Logos'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div>
      <HeroSection/>
      <Cards/>
      <LegacySection/>
      <TestimonialV2/>
      <FaqSection/>
      <Logos/>
      <Footer/>
    </div>
  )
}

export default App




