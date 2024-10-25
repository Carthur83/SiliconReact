import React from 'react'
import Logo1 from '../images/logo1.svg'
import Logo2 from '../images/logo2.svg'
import Logo3 from '../images/logo3.svg'
import Logo4 from '../images/logo4.svg'
import Logo5 from '../images/logo5.svg'
import Logo6 from '../images/logo6.svg'

const Logotypes = () => {
  return (
    <section id="logotypes">

      <div className="container">

        <div id="logo1" className="logo-box">
          <img src={Logo1} alt="logotype" />
        </div>
        <div id="logo2" className="logo-box">
          <img src={Logo2} alt="logotype" />
        </div>
        <div id="logo3" className="logo-box">
          <img src={Logo3} alt="logotype" />
        </div>
        <div id="logo4" className="logo-box">
          <img src={Logo4} alt="logotype" />
        </div>
        <div id="logo5" className="logo-box">
          <img src={Logo5} alt="logotype" />
        </div>
        <div id="logo6" className="logo-box">
          <img src={Logo6} alt="logotype" />
        </div>

      </div>

    </section>
  )
}

export default Logotypes