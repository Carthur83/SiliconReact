import React from 'react'
import GooglePlay from '../images/google-play.svg'
import GooglePLayDark from '../images/google-play-dark.svg'
import AppStore from '../images/app-store.svg'
import AppStoreDark from '../images/appstore-dark.svg'
import CreditCard from '../images/iPhone-creditcard.svg'
import Budget from '../images/iPhone-budget.svg'

function Hero() {
  return (
    <section id="hero">

      <div className="container">

        <div className="headline">
          <h1>Manage All Your Money in One App</h1>
        </div>

        <div className="content">

          <p>We offer you a new generation of the mobile banking.
            Save, spend & manage money in your pocket.</p>

          <div className="buttons">
            <a className="btn-download" href="#">
              <img src={AppStore} alt="appstore" className="btn-download-image darkmode-off" />
              <img src={AppStoreDark} alt="appstore" className="btn-download-image darkmode-on" />
            </a>
            <a className="btn-download" href="#">
              <img src={GooglePlay} alt="google play" className="btn-download-image darkmode-off" />
              <img src={GooglePLayDark} alt="google play" className="btn-download-image darkmode-on" />
            </a>
          </div>

          <div className="discover-more">
            <a href="#" className="btn-round" aria-label="Discover more">
              <i className="fa-regular fa-chevron-down arrow"></i>
            </a>
            <span>Discover more</span>
          </div>
        </div>

        <div className="images">
          <img className="img-creditcard" src={CreditCard} alt="mobile with creditcard" />
          <img className="img-budget" src={Budget} alt="mobile with budgetgraph" />
        </div>

      </div>

    </section>
  )
}

export default Hero