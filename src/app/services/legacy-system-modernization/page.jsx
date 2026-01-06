import React from 'react'
import HeroSection from './components/HeroSection'
import FutureProofSection from './components/FutureProofSection'
import WhatWeDeliver from './components/WhatWeDeliver'
import FrameworkSection from './components/FrameworkSection'
import ModernizationValue from './components/ModernizationValue'
import IndustryApplications from './components/IndustryApplications'
import WhyXpace from './components/WhyXpace'



const page = () => {
  return (
    <div>
      <HeroSection/>
      <FutureProofSection/>
      <WhatWeDeliver/>
      <FrameworkSection/>
      <ModernizationValue/>
      <IndustryApplications/>
   <WhyXpace/>
    </div>
  )
}

export default page
