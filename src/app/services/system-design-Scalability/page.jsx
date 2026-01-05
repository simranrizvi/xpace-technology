import React from 'react'
import HeroSection from './components/HeroSection'
import ReliabilitySection from './components/ReliabilitySection'
import CoreCapabilities from './components/CoreCapabilities'

import ScalableValue from './components/ScalableValue'
import IndustryApplications from './components/IndustryApplications'
import EngineeringLifecycle from './components/EngineeringLifecycle'
import FooterCTA from './components/FooterCTA'


const page = () => {
  return (
    <div>

<HeroSection/>
<ReliabilitySection/>
<CoreCapabilities/>
{/* <ExpertiseSection/> */}
<ScalableValue/>
<IndustryApplications/>
<EngineeringLifecycle/>
<FooterCTA/>

    </div>
  )
}

export default page