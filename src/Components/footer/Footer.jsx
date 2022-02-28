import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

export default function Footer() {
  return (
    <footer>
      <a href="#" className='footerLogo'>EGATOR</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footerSocials">
        <a href="http://facebook.com"><FaFacebookF/></a>
        <a href="http://Instagram.com"><FiInstagram/></a>
        <a href="http://twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className="footerCopyright">
        <small>&copy; EGATOR Tutorial. All rights reserved</small>
      </div>
    </footer>
  )
}



