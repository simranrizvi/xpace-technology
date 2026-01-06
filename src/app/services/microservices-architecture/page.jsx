import React from 'react'
import ResilientHero from './components/ResilientHero'
import EvolutionArchitecture from './components/EvolutionArchitecture'
import StrategicEngineering from './components/StrategicEngineering'
import ROIMicroservices from './components/ROIMicroservices'
import WhereWeApply from './components/WhereWeApply'
import MigrationStrategy from './components/MigrationStrategy'

const page = () => {
  return (
    <div>
      <ResilientHero/>
      <EvolutionArchitecture/>
      <StrategicEngineering/>
      <ROIMicroservices/>
      <WhereWeApply/>
      <MigrationStrategy/>
    </div>
  )
}

export default page
