import React from 'react'


function Header({ toggleTheme, theme }) {
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
        <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button onClick={toggleTheme} className='theme-toggle-btn' style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem', color: 'var(--text-color)' }}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <div className="button"><button className='btn'><a href='#contact'>Contact</a></button></div>
        </div>
      </div>
    </>
  )
}

export default Header
