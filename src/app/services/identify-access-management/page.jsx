import React from 'react'
import HeroSection from './components/HeroSection'
import TrustSection from './components/TrustSection'
import IdentitySuite from './components/IdentitySuite'
import ValueOfControl from './components/ValueOfControl'
import WhereWeApply from './components/WhereWeApply'
import MaturityModel from './components/MaturityModel'
import FooterCTA from './components/FooterCTA'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <TrustSection/>
      <IdentitySuite/>
      <ValueOfControl/>
      <WhereWeApply/>
      <MaturityModel/>
      <FooterCTA/>
    </div>
  )
}

export default page
