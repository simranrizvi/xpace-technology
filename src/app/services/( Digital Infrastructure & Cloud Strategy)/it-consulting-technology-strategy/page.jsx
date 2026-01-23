import React from 'react'
import StrategicAdvisoryHero from './components/StrategicAdvisoryHero'
import InnovationSection from './components/InnovationSection'
import StrategicConsultingSuite from './components/StrategicConsultingSuite'
import StrategicClarity from './components/StrategicClarity'
import ConsultingMethodology from './components/ConsultingMethodology'
import AIGovernanceSection from './components/AIGovernanceSection'

const page = () => {
  return (
    <div>
      <StrategicAdvisoryHero/>
      <InnovationSection/>
      <StrategicConsultingSuite/>
      <StrategicClarity/>
      <AIGovernanceSection/>
      
    </div>
  )
}

export default page
