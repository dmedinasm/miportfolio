import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Foot from './components/Foot'
import AboutMe from './components/AboutMe'

function App () {
  return (
    <>
      <header >
        <NavBar />
      </header>
      <main>
        <Hero />
        <AboutMe />
        <Projects />
      </main>
      <footer>
        <Foot />
      </footer>
    </>
  )
}

export default App
