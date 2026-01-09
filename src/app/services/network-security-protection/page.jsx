import React from 'react'
import HeroSection from './components/HeroSection'
import ZeroTrustSection from './components/ZeroTrustSection'
import ProtectionGrid from './components/ProtectionGrid'
import ValueSection from './components/ValueSection'
import Methodology from './components/Methodology'
import FinalCTA from './components/FinalCTA'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <ZeroTrustSection/>
      <ProtectionGrid/>
      <ValueSection/>
      <Methodology/>
      <FinalCTA/>
    </div>
  )
}

export default page
