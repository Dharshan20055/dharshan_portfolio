import React from 'react'
import './Hero.css'
import Img from '../assests/newimage.jpeg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


function Hero() {
  return (
    <>
      <div className="hero" id="home">
        <div className="right">
          <div className="image"> <img src={Img} alt='' /></div>
        </div>
        <div className="left">
          <h2>Hello</h2>
          <h1>I am Dharshan</h1>
          <h3>Computer Science <span>Engineer</span></h3>
          <p>I’m Dharshan M, a passionate Computer Science Engineering student with strong interests in programming and full-stack web development. I enjoy building practical and innovative software solutions that solve real-world problems.</p>
          <div className="social-links-hero">
            <a href="https://github.com/Dharshan20055" target="_blank" rel="noopener noreferrer" className="social-btn github">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/dharshan-m-377080309/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

      </div>
    </>
  )
}

export default Hero