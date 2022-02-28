import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

export default function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container servicesContainer">
        <article className='service'>
            <div className="serviceHead">
              <h3>UI/UX</h3>
            </div>

            <ul className='serviceList'>
              <li>
                <BiCheck className='serviceListIcon'/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                <BiCheck className='serviceListIcon'/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                <BiCheck className='serviceListIcon'/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                <BiCheck className='serviceListIcon'/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                <BiCheck className='serviceListIcon'/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
        </article>


        <article className='service'>
            <div className="serviceHead">
              <h3>Web Development</h3>
            </div>

            <ul className='serviceList'>
              <li>
                <BiCheck className='serviceListIcon'/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                <BiCheck className='serviceListIcon'/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                <BiCheck className='serviceListIcon'/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                <BiCheck className='serviceListIcon'/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                <BiCheck className='serviceListIcon'/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                <BiCheck className='serviceListIcon'/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
        </article>



        <article className='service'>
            <div className="serviceHead">
              <h3>Content Creation</h3>
            </div>

            <ul className='serviceList'>
              <li>
                <BiCheck className='serviceListIcon'/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                <BiCheck className='serviceListIcon'/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                <BiCheck className='serviceListIcon'/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                <BiCheck className='serviceListIcon'/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                <BiCheck className='serviceListIcon'/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
        </article>

      </div>


    </section>
  )
}
