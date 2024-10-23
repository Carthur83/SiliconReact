import React from 'react'

function Header() {
  return (
    <header>
      <div class="container">

        <a href="index.html" id="silicon-logotype">
          <img src="../images/siliconlogo.svg" alt="Silicon logo" />
          <p className='text-xl'>Silicon</p>
        </a>

        <div class="btn-toggle-dark">
          <span class="text-dark-mode">Dark mode</span>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>

        <button class="btn-menu" aria-label="open menu">
          <i class="fa-sharp fa-regular fa-bars"></i>
        </button>

        <nav class="navbar ">

          <div className='link-container'>
            <a href="#" className='text-m links'>Features</a>
            <a href="#" className='text-m links'>Contacts</a>
          </div>

          <a href="#" class="btn-sign-in btn-primary">
            <i class="fa-regular fa-user"></i>
            <span>Sign in / up</span>
          </a>

        </nav>

      </div>
    </header>
  )
}

export default Header