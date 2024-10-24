import React from 'react'

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
              <img src="/images/app-store.svg" alt="appstore" className="btn-download-image darkmode-off" />
              <img src="/images/appstore-dark.svg" alt="appstore" className="btn-download-image darkmode-on" />
            </a>
            <a className="btn-download" href="#">
              <img src="images/google-play.svg" alt="google play" className="btn-download-image darkmode-off" />
              <img src="images/google-play-dark.svg" alt="google play" className="btn-download-image darkmode-on" />
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
          <img className="img-creditcard" src="images/iPhone-creditcard.svg" alt="mobile with creditcard" />
          <img className="img-budget" src="images/iPhone-budget.svg" alt="mobile with budgetgraph" />
        </div>

      </div>

    </section>
  )
}

export default Hero