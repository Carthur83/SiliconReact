import React, { useState } from 'react'

const Subscribe = () => {

  const [formInput, setFormInput] = useState({ email: '' });
  const [subscribeMessage, setSubscribeMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleOnChange(e) {
    const { name, value } = e.target;
    setFormInput({...formInput, [name]: value});
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe',{
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formInput)
    })

    if (res.ok) {
      setErrorMessage('')
      setSubscribeMessage('Thank you for subscribing to our newsletter');
      setFormInput({email: ''})
    } else {
      setErrorMessage('Please enter a valid email address to subscribe!')
      setFormInput({email: ''})
      setSubscribeMessage('')
    }
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
            <input className="form-input" type="email" name="email" placeholder="Your Email" onChange={handleOnChange} value={formInput.email} required/>
            <button className="btn-subscribe btn-primary">Subscribe</button>
          </form>

          <p className='error-message'>{errorMessage}</p>
          <p className='subscribe-text'>{subscribeMessage}</p>

        </div>
      </div>
    </section>
  )
}

export default Subscribe