import React from 'react'
import HeroSection from './components/HeroSection'
import ProactiveSection from './components/ProactiveSection'
import AnalyticEngines from './components/AnalyticEngines'
import ValueSection from './components/ValueSection'
import IndustryAndProcess from './components/IndustryAndProcess'
import PrescriptiveAndCTA from './components/PrescriptiveAndCTA'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <ProactiveSection/>
      <AnalyticEngines/>
      <ValueSection/>
      <IndustryAndProcess/>
      <PrescriptiveAndCTA/>
    </div>
  )
}

export default page
