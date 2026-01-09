import React from 'react'
import ComplianceHero from './components/ComplianceHero'
import GovernanceSection from './components/GovernanceSection'
import TechnicalControls from './components/TechnicalControls'
import ValueOfCompliance from './components/ValueOfCompliance'

import ComplianceSection from './components/ComplianceSection'
import ComplianceLifecycle from './components/ComplianceLifecycle'
import CTASection from './components/CTASection'

const page = () => {
  return (
    <div>
      <ComplianceHero/>
      <GovernanceSection/>
      <TechnicalControls/>
      <ValueOfCompliance/>
      <ComplianceSection/>
      <ComplianceLifecycle/>
      <CTASection/>
    </div>
  )
}

export default page
