import React from 'react'


function Header() {
  return (
    <>
     <div className='header'>
       <div className="logo">
        <h1>Dhar<span>shan</span></h1>
       </div>
       <div className="navbar">
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#skill'>Skills</a></li>
          <li><a href='#project'>Projects</a></li>
          
        </ul>
       </div>
       <div className="button"><button className='btn'><a href='#contact'>Contact</a></button></div>
     </div>
    </>
  )
}

export default Header
