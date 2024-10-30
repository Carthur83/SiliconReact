import React, { useEffect, useState } from 'react'
import SiliconLogo from '../images/siliconlogo.svg'
import { Link, NavLink } from 'react-router-dom';



function Header() {
  
  
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkmodeOn, setIsDarkmodeOn] = useState(false);
  
  function switchToDark() {
    const newMode = !isDarkmodeOn;
    setIsDarkmodeOn(newMode);

    if(newMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme','dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if(savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
      setIsDarkmodeOn(true)
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      setIsDarkmodeOn(false)
    }
  
  }, [])
  

  function openMenu() {
    setIsOpen(value => !value);
  }

  return (
    <header>
      <div className="container">

        <Link to="/" id="silicon-logotype">
          <img src={SiliconLogo} alt="Silicon logo" />
          <p className='text-xl'>Silicon</p>
        </Link>

        <div className="btn-toggle-dark">
          <span className="text-dark-mode">Dark mode</span>
          <label className="switch">
            <input type="checkbox" onChange={switchToDark} checked={isDarkmodeOn}/>
            <span className="slider round"></span>
          </label>
        </div>

        <button className="btn-menu" aria-label="open menu" onClick={openMenu}>
          <i className="fa-sharp fa-regular fa-bars"></i>
        </button>

        <nav className={`navbar ${isOpen ? 'open-nav' : ''}`}>

          <div className='link-container'>
            <Link to="/" className='text-m links'>Home</Link>
            <NavLink to="/appfeatures" className='text-m links'>Features</NavLink>
            <NavLink to="/contact" className='text-m links'>Contact</NavLink>
          </div>

          <Link to="/signinup" className="btn-sign-in btn-primary">
            <i className="fa-regular fa-user"></i>
            <span>Sign in / up</span>
          </Link>

        </nav>

      </div>
    </header>
  )
}

export default Header