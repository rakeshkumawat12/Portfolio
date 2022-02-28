import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency dashboard & Financial Visual',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/17575451-AMA-Learning-App-User-Interface'
  },
  {
    id: 2,
    image: IMG2,
    title: "Lorem ipsum dolor sit",
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/17575451-AMA-Learning-App-User-Interface'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/17575451-AMA-Learning-App-User-Interface'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Lorem ipsum dolor, sit amet consectetur adipisicing ',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/17575451-AMA-Learning-App-User-Interface'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Lorem ipsum dolor, sit amet.',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/17575451-AMA-Learning-App-User-Interface'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Lorem ipsum dolor, sit amet consectetur.',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/17575451-AMA-Learning-App-User-Interface'
  },
]

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolioContainer">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
            <article key={id} className='portfolioItem'>
              <div className="portfolioItemImage">
                <img src={image} alt="title" />
              </div>
              <h3>{title}</h3>
              <div className="portfolioItemCta">
                <a href={github} className='btn' >Github</a>
                <a href={demo} className='btn btn-primary' >Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

