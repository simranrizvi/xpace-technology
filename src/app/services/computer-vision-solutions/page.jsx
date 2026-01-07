import React from 'react'
import HeroSection from './components/HeroSection'
import AutomationSection from './components/AutomationSection'
import CapabilitiesSection from './components/CapabilitiesSection'
import IndustryAndPipeline from './components/IndustryAndPipeline'
import WhyXpaceAndCTA from './components/WhyXpaceAndCTA'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <AutomationSection/>
      <CapabilitiesSection/>
      <IndustryAndPipeline/>
      <WhyXpaceAndCTA/>
    </div>
  )
}

export default page
