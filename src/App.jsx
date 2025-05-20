import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import './index.css' // Make sure CSS is imported
import About from './components/About'
import Stats from './components/Stats'
import EasyToUse from './components/EasyToUse'
import Services from './components/Services'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About/>
        <Stats/>
        <EasyToUse/>
        <Services/>
      </main>
    </>
  )
}

export default App