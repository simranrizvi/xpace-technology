import React from 'react'
import EncryptionHero from './components/EncryptionHero'
import LastLineOfDefense from './components/LastLineOfDefense'
import MathematicalSecurity from './components/MathematicalSecurity'

import EncryptionLifecycle from './components/EncryptionLifecycle'
import HomomorphicSection from './components/HomomorphicSection'

const page = () => {
  return (
    <div>
      <EncryptionHero/>
      <LastLineOfDefense/>
      <MathematicalSecurity/>
      <EncryptionLifecycle/>
      <HomomorphicSection/>
    </div>
  )
}

export default page
