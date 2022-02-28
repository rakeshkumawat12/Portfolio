import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

export default function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contactContainer">
        <div className="contactOptions">
          <article className='contactOption'>
            <MdOutlineEmail className='contactOptionIcon'/>
            <h4>Email</h4>
            <h5>dummyegator@gmail.com</h5> 
            <a href="mailto:dummyegator@gmail.com">Send a message</a> {/* open in new tab target="_blank" */}
          </article>
          <article className='contactOption'>
            <RiMessengerLine className='contactOptionIcon'/>
            <h4>Messenger</h4>
            <h5>dummyegator@gmail.com</h5>
            <a href="https://m.me/ernest.achiever">Send a message</a>
          </article>
          <article className='contactOption'>
            <BsWhatsapp className='contactOptionIcon'/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone+1234567890">Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
