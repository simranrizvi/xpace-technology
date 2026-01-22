import React from 'react'
import { HeroSection } from './components/HeroSection'

import DevSecOpsSection from './components/DevSecOpsSection'
import ToolchainSection from './components/ToolchainSection'
import IntegratedSecurity from './components/IntegratedSecurity'
import UseCases from './components/UseCases'
import TransformationRoadmap from './components/TransformationRoadmap'
import FooterAIOps from './components/FooterAIOps'

const page = () => {
  return (
    <div>
      <HeroSection/>
     
      <DevSecOpsSection/>
      <ToolchainSection/>
      <IntegratedSecurity/>
      <UseCases/>
      <TransformationRoadmap/>
      <FooterAIOps/>
    </div>
  )
}

export default page
