import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

export default function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experienceContainer'>
        <div className="experienceFrontend">
          <h3>Frontend Development</h3>
          <div className="experienceContent">
            <article className='experienceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-align'>Experienced</small>
              </div>
            </article>
            <article className='experienceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-align'>Intermediate</small>
              </div>
            </article>
            <article className='experienceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-align'>Experienced</small>
              </div>
            </article>
            <article className='experienceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-align'>Experienced</small>
              </div>
            </article>
            <article className='experienceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon'/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-align'>Experienced</small>
              </div>
            </article>
            <article className='experienceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon'/>
              <div>
                <h4>React</h4>
                <small className='text-align'>Experienced</small>
              </div>
            </article>
          </div>
        </div>


        <div className="experienceBackend">
          <h3>Frontend Development</h3>
          <div className="experienceContent">
            <article className='experienceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon'/>
              <div>
                <h4>NodeJs</h4>
                <small className='text-align'>Experienced</small>
              </div>
            </article>
            <article className='experienceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-align'>Intermediate</small>
              </div>
            </article>
            <article className='experienceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon'/>
              <div>
                <h4>Express.js</h4>
                <small className='text-align'>Experienced</small>
              </div>
            </article>
            <article className='experienceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon'/>
              <div>
                <h4>Postman</h4>
                <small className='text-align'>Experienced</small>
              </div>
            </article>
            <article className='experienceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon'/>
              <div>
                <h4>Mongoose</h4>
                <small className='text-align'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
