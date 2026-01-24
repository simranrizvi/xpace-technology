import React from 'react'
import HeroSection from './components/HeroSection'
import DecisionMakingSection from './components/DecisionMakingSection'
import AssessmentSuite from './components/AssessmentSuite'
import VisibilitySection from './components/VisibilitySection'
import WhereWeApply from './components/WhereWeApply'
import NistMethodology from './components/NistMethodology'
import RiskScoringSection from './components/RiskScoringSection'

const page = () => {
  return (
    <div>
        <HeroSection/>
        <DecisionMakingSection/>
        <AssessmentSuite/>
        <VisibilitySection/>
        <WhereWeApply/>
        <NistMethodology/>
        <RiskScoringSection/>
    </div>
  )
}

export default page
