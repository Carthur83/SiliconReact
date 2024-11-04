import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

const Subscribe = () => {
  const { handleSubscribe, formInput, setFormInput, isResponseOk } = useContext(AppContext);

  function handleOnChange(e) {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await handleSubscribe();

    setFormInput({ email: '' })

  }

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

          <form className="form" onSubmit={handleSubmit} noValidate>
            <i className="fa-regular fa-envelope icon"></i>
            <input className="form-input" type="email" name="email" placeholder="Your Email" onChange={handleOnChange} value={formInput.email} required />
            <button className="btn-subscribe btn-primary">Subscribe</button>
          </form>

          <div className='message-box'>
            {isResponseOk === 'true' && <p className='subscribe-text'>Thank you for subscribing to our newsletter</p>}
            {isResponseOk === 'false' && <p className='error-message'>Please enter a valid email address to subscribe!</p>}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Subscribe