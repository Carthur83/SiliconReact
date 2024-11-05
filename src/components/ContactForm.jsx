import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

const ContactForm = () => {

  const { handleContactForm, isFormSubmitted, contactFormData, setContactFormData} = useContext(AppContext);
  

  function handleOnChange(e) {
    const { name, value } = e.target
    setContactFormData({...contactFormData, [name]: value})
  }

  async function handleSubmit(e) {
    e.preventDefault();
    handleContactForm();
    
    setContactFormData({ fullName: '', email: '', specialist: ''})
  }

  return (

    <form className="contact-form" onSubmit={handleSubmit} noValidate>

      <div className="input-group">
        <label htmlFor="fullname" className="form-label">Full name</label>
        <input type="text" className="form-input" name='fullName' value={contactFormData.fullName} onChange={handleOnChange} required />
      </div>

      <div className="input-group">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-input" name='email' value={contactFormData.email} onChange={handleOnChange} required />
      </div>

      <div className="input-group">
        <label htmlFor="specialist" className="form-label">Specialist</label>
        <select name='specialist' className="form-input" onChange={handleOnChange} required >
          <option value=''>--Please choose an option--</option>
          <option value="Specialist 1">Specialist 1</option>
          <option value="Specialist 2">Specialist 2</option>
          <option value="Specialist 3">Specialist 3</option>
        </select>
      </div>

      <p className={`message-box ${isFormSubmitted ? 'show-message' : ''}`}>Thank you for contacting us! We will get back to you shortly.</p>

      <button className="btn-primary btn-contact">Make an appointment</button>
    </form>

  )
}

export default ContactForm