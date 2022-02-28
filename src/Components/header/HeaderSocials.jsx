import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'

export default function HeaderSocials() {
  return (
    <div className='headerSocials'>
        <a href="http://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="http://github.com" target="_blank"><FaGithub/></a>
        <a href="http://dribbble.com" target="_blank"><FaDribbble/></a>
    </div>
  )
}
