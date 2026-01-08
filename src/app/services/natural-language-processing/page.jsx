import React from 'react'
import LanguageHero from './components/LanguageHero'
import LanguageLogic from './components/LanguageLogic'
import DeliverSection from './components/DeliverSection'
import LanguageApplications from './components/LanguageApplications'
import NLPPipelineAndCTA from './components/PipelineSection'
import RagAndCta from './components/RagAndCta'

const page = () => {
  return (
    <div>
      <LanguageHero/>
      <LanguageLogic/>
      <DeliverSection/>
      <LanguageApplications/>
      <NLPPipelineAndCTA/>
      <RagAndCta/>
    </div>
  )
}

export default page
