import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

export default function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container aboutContainer">
        <div className="aboutMe">
          <div className="aboutMeImage">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="aboutContent">
          <div className="aboutCards">
            <article className='aboutCard'>
              <FaAward className='aboutIcon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='aboutCard'>
              <FiUsers className='aboutIcon'/>
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>

            <article className='aboutCard'>
              <VscFolderLibrary className='aboutIcon'/>
              <h5>Projects</h5>
              <small>90+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio amet delectus facilis ad nihil, itaque fugiat veniam alias voluptas officia possimus dolorem voluptatibus dicta dolores deserunt rerum consequatur quasi? Qui!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
