import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

export default function Header() {
  return (
    <header>
      <div className="container headerContainer">
          <h5>Hello I'm</h5>
          <h1>Rakesh Kumawat</h1>
          <h5 className='text-light'>Full Stack Developer</h5>
          <CTA/>
          <HeaderSocials/>

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scrollDown'>Scroll Down</a>
      </div>
    </header>
  )
}

