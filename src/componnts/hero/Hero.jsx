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
          <h2>Hello,</h2>
          <h1>I'm Dharshan M</h1>
          <h3>Computer Science Engineer | <span>Full Stack Developer</span></h3>
          <p>I am a passionate Computer Science Engineering graduate with a strong foundation in Java, Web Development, SQL, and Software Engineering. I enjoy building scalable and user-friendly applications that solve real-world problems. My goal is to start my career as a Software Developer and continuously enhance my technical expertise through hands-on projects and industry experience.</p>
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