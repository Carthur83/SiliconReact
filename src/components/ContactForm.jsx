import React, { useState } from 'react'
import { json } from 'react-router-dom'

const ContactForm = () => {

  const [formInput, setFormInput] = useState({ fullName: '', email: '', specialist: ''})
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleOnChange(e) {
    const { name, value } = e.target
    setFormInput({...formInput, [name]: value})
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formInput)
    })

    if (res.ok) {
      setIsSubmitted(true)
      setFormInput({ fullName: '', email: '', specialist: ''})
    }

  }

  return (

    <form className="contact-form" onSubmit={handleSubmit}>

      <div className="input-group">
        <label htmlFor="fullname" className="form-label">Full name</label>
        <input type="text" className="form-input" name='fullName' value={formInput.fullName} onChange={handleOnChange}/>
      </div>

      <div className="input-group">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-input" name='email' value={formInput.email} onChange={handleOnChange} />
      </div>

      <div className="input-group">
        <label htmlFor="specialist" className="form-label">Specialist</label>
        <select name='specialist' className="form-input" onChange={handleOnChange}>
          <option value=''>--Please choose an option--</option>
          <option value="Specialist 1">Specialist 1</option>
          <option value="Specialist 2">Specialist 2</option>
          <option value="Specialist 3">Specialist 3</option>
        </select>
      </div>

      <p className={`message-box ${isSubmitted ? 'show-message' : ''}`}>Thank you for contacting us! We will get back to you shortly.</p>

      <button className="btn-primary btn-contact">Make an appointment</button>
    </form>

  )
}

export default ContactForm