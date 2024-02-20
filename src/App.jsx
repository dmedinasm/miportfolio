import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Foot from './components/Foot'



function App() {


  return (
    <>
      <header >
        <NavBar />
      </header>
      <main>
        <Hero />
        <Projects />
      </main>
      <footer>
        <Foot />
      </footer>
    </>
  )
}

export default App
