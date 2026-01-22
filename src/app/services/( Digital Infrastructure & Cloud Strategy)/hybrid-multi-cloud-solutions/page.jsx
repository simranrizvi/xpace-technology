import React from 'react'
import { HeroSection } from './components/HeroSection'
import { InfrastructureSection } from './components/InfrastructureSection'
import { HybridCloudSuite } from './components/HybridCloudSuite'
import { DiversificationSection } from './components/DiversificationSection'
import { UseCasesSection } from './components/UseCasesSection'
import IntegrationSection from '../../ai-systems-integration/components/IntegrationSection'
import { DistributedCloudSection } from './components/DistributedCloudSection'

const page = () => {
  return (
    <div>
     <HeroSection/>
     <HybridCloudSuite/>
     <DiversificationSection/>
     <UseCasesSection/>
       <InfrastructureSection/>
       <DistributedCloudSection/>
     
    </div>
  )
}

export default page
