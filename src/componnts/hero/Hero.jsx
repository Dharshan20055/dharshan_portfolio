import React from 'react'
import './Hero.css'
import Img from '../assests/Img.jpg'


function Hero() {
  return (
    <>
      <div className="hero">
        <div className="right">
          <div className="image"> <img src={Img} alt='' /></div> 
        </div>
        <div className="left">
          <h2>Hey</h2>
          <h1>I am Dharshan</h1>
          <h3>Computer Science <span>Engineer</span></h3>
          <p>I am Dharshan M, an ambitious engineering student skilled in programming and web development. I have worked on innovative projects like an Alumni App and Portfolio Website, showcasing my creativity and technical expertise.</p>
          <div className="buttton"><button className='h-btn'><a href="#contact">Contact</a></button></div>
        </div>
        
      </div>
    </>
  )
}

export default Hero