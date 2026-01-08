import React from 'react'
import SeamlessHero from './components/SeamlessHero'
import IntegrationSection from './components/IntegrationSection'
import PredictiveHero from './components/PredictiveHero'
import ProductionScenarios from './components/ProductionScenarios'
import IntegrationLifecycle from './components/IntegrationLifecycle'
import EnterpriseCTA from './components/EnterpriseCTA'

const page = () => {
  return (
    <div>
      <SeamlessHero/>
      <IntegrationSection/>
      <PredictiveHero/>
      <ProductionScenarios/>
      <IntegrationLifecycle/>
      <EnterpriseCTA/>
    </div>
  )
}

export default page
