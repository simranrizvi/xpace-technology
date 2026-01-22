import React from 'react'
import Hero from './components/HeroSection'
import DigitalInfrastructure from './components/DigitalInfrastructure'
import CloudSuite from './components/CloudSuite'
import CloudValueSection from './components/CloudValueSection'
import ApplySection from './components/ApplySection'
import FlightPath from './components/FlightPath'
import CloudInfrastructureSection from './components/CloudInfrastructureSection'
import ValueCloudFirst from './components/ValueCloudFirst'

const page = () => {
  return (
    <div>
      <Hero/>
      <DigitalInfrastructure/>
      <CloudSuite/>
      <ValueCloudFirst/>
      <ApplySection/>
      <FlightPath/>
      <CloudInfrastructureSection/>
    </div>
  )
}

export default page
