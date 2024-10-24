import React from 'react'

function Header() {

  function darkmode() {
    console.log('clicked')
  }


  return (
    <header>
      <div className="container">

        <a href="index.html" id="silicon-logotype">
          <img src="../images/siliconlogo.svg" alt="Silicon logo" />
          <p className='text-xl'>Silicon</p>
        </a>

        <div className="btn-toggle-dark">
          <span className="text-dark-mode">Dark mode</span>
          <label className="switch">
            <input onClick={darkmode} type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>

        <button className="btn-menu" aria-label="open menu">
          <i className="fa-sharp fa-regular fa-bars"></i>
        </button>

        <nav className="navbar ">

          <div className='link-container'>
            <a href="#" className='text-m links'>Features</a>
            <a href="#" className='text-m links'>Contacts</a>
          </div>

          <a href="#" className="btn-sign-in btn-primary">
            <i className="fa-regular fa-user"></i>
            <span>Sign in / up</span>
          </a>

        </nav>

      </div>
    </header>
  )
}

export default Header