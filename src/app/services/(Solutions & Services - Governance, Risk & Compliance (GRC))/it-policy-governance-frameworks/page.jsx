import React from 'react'
import SimpleHero from './components/HeroSection'
import RulesSection from './components/RulesSection'
import DeliverablesSection from './components/DeliverablesSection'
import ValueSection from './components/ValueSection'
import WhereWeApply from './components/WhereWeApply'
import MaturityModel from './components/MaturityModel'
import PolicyAndFooter from './components/PolicyAndFooter'

const page = () => {
  return (
    <div>
<SimpleHero/>
<RulesSection/>
<DeliverablesSection/>
<ValueSection/>
<WhereWeApply/>
<MaturityModel/>
<PolicyAndFooter/>


    </div>
  )
}

export default page