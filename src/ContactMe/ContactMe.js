import React from 'react'
import mail from "../images/mail (2).svg"
import call from "../images/call.svg"
import location from "../images/location.svg"
import "./contact.css"

const ContactMe = () => {
  return (
    <div className='contact'  id="contact-section">
      <div className='contact-title'>
        <h1>Get in touch</h1>
      
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's talk</h1>
          <p>I am currently available to take on new projects.</p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail} alt="mail" />
              <p>fortesa@gmail.com</p>
            </div>
            <div className='contact-detail'>
              <img src={call} alt="call" />
              <p>+38343810990</p>
            </div>
            <div className='contact-detail'>
              <img src={location} alt="location" />
              <p>Prishtina, Kosovo</p>
            </div>
          </div>
        </div>
        <form
          className='contact-right'
          method="POST"
          action="https://api.web3forms.com/submit"
        >

          <input type="hidden" name="access_key" value="a56d3ef0-5870-40b1-b507-39b7bc3d5d1f" />
          
        
          <label>Your Name</label>
          <input type="text" placeholder='Enter your name' name="name" required />

          <label>Your Email</label>
          <input type='email' placeholder='Enter your email' name="email" required />

          <label>Write your message here</label>
          <textarea name='message' rows="8" placeholder='Enter your message' required></textarea>

          
          <button type="submit" className='contact-submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
