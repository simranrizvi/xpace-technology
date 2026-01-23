import React from 'react'
import HeroSection from './components/HeroSection'
import OperationalSection from './components/OperationalSection'
import ResilienceSuite from './components/ResilienceSuite'
import PreparednessSection from './components/PreparednessSection'
import IndustriesSection from './components/IndustriesSection'
import ResilienceFramework from './components/ResilienceFramework'
import FooterSections from './components/FooterSections'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <OperationalSection/>
      <ResilienceSuite/>
      <PreparednessSection/>
      <IndustriesSection/>
      <ResilienceFramework/>
      <FooterSections/>
    </div>
  )
}

export default page
