import React from 'react'
import './Contact.css'
import theme_patten from '../assets/theme_pattern.svg'
import mail_icon from '../assets/mail_icon.svg'
import location_icon from '../assets/location_icon.svg'
import call_icon from '../assets/call_icon.svg'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get In touch</h1>
            <img src={theme_patten} alt="" />
        </div>
        <div className='contact-section'>
        <div className='contact-left'>
            <h1>Lets talk</h1>
            <p>i am currently available to take new projects. You can contact anytime</p>
            <div className='contact-details'>
                <div className='contact-detail'>
                    <img src={mail_icon} alt="" /><p>ceetech@technologies.com</p>
                </div>
                <div className='contact-detail'>
                    <img src={location_icon} alt="" /> <p>nairobi Tom mboya street</p>

                </div>
                <div className='contact-detail'>
                    <img src={call_icon} alt="" /> <p>+254791161062</p>

                </div>
            </div>
        </div>
        <form className='contact-right'>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email"  placeholder='Enter Your email'/>
            <label htmlFor="">Write Your Message here</label>
            <textarea name="Message"  rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className='contact-submit'>Submit Now</button>
       
        </form>
       
        </div>

    </div>
  )
}

export default Contact