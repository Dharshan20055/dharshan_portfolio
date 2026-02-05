import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './componnts/header/Header'
import Hero from './componnts/hero/Hero'
import About from './componnts/about'
import Skills from './componnts/skill'
import Projects from './componnts/projects'
import ContactPage from './componnts/hero/contact'

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactPage />
    </div>
  )
}

export default App
