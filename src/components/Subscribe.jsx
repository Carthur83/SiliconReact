import React from 'react'

const Subscribe = () => {
  return (
    <section id="subscribe">

      <div className="container">

        <div className="content">

          <div className="headline-box">

            <div className="image">
              <img src="/images/subscribe/notification.svg" alt="notificationbell" />
            </div>

            <div className="headline">
              <h4 className="h4-desktop">Subscribe to our newsletter to stay informed about latest updates</h4>
              <h4 className="h4-mobile">Subscribe to our newsletter</h4>
            </div>

          </div>

          <div className="form">
            <i className="fa-regular fa-envelope icon"></i>
            <input className="form-input" type="email" name="email" placeholder="Your Email" />
            <button className="btn-subscribe btn-primary">Subscribe</button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Subscribe