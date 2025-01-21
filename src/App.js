import React from 'react'
import './App.css'
import Header from './componnts/header/Header'
import Hero from './componnts/hero/Hero'
import About from './componnts/about'
import Skills from './componnts/skill'
import Projects from './componnts/projects'
import ContactPage from './componnts/hero/contact'

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <ContactPage/>
    </>
  )
}

export default App
