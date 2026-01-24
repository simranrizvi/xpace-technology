import React from 'react'
import ComplianceHero from './components/ComplianceHero'
import RegulatoryMaze from './components/RegulatoryMaze'
import ComplianceSuite from './components/ComplianceSuite'
import CertificationValue from './components/CertificationValue'
import ComplianceCards from './components/ComplianceCards'
import PathToCertification from './components/PathToCertification'
import ComplianceCTA from './components/ComplianceCTA'

const page = () => {
  return (
    <div>
        <ComplianceHero/>
        <RegulatoryMaze/>
        <ComplianceSuite/>
        <CertificationValue/>
        <ComplianceCards/>
        <PathToCertification/>
        <ComplianceCTA/>
    </div>
  )
}

export default page