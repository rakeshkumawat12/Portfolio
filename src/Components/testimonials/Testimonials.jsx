import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar1.jpg'
import AVTR3 from '../../assets/avatar1.jpg'
import AVTR4 from '../../assets/avatar1.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut autem exercitationem veritatis nam modi dolorum, reprehenderit, dignissimos, quasi totam aspernatur natus. Esse iste iusto enim nam quia optio suscipit tenetur in, possimus impedit quidem eos consectetur minima reprehenderit. Tenetur, sapiente.'
  },
  {
    avatar: AVTR2,
    name: 'Ayush Tiwari',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut autem exercitationem veritatis nam modi dolorum, reprehenderit, dignissimos, quasi totam aspernatur natus. Esse iste iusto enim nam quia optio suscipit tenetur in, possimus impedit quidem eos consectetur minima reprehenderit. Tenetur, sapiente.'
  },
  {
    avatar: AVTR3,
    name: 'Dash Tiwari',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut autem exercitationem veritatis nam modi dolorum, reprehenderit, dignissimos, quasi totam aspernatur natus. Esse iste iusto enim nam quia optio suscipit tenetur in, possimus impedit quidem eos consectetur minima reprehenderit. Tenetur, sapiente.'
  },
  {
    avatar: AVTR4,
    name: 'Raj Tiwari',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut autem exercitationem veritatis nam modi dolorum, reprehenderit, dignissimos, quasi totam aspernatur natus. Esse iste iusto enim nam quia optio suscipit tenetur in, possimus impedit quidem eos consectetur minima reprehenderit. Tenetur, sapiente.'
  },
]

export default function Testimonials() {

  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonial</h2>

      <Swiper className="container testimonialContainer"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }) => {
            return (
              <SwiperSlide className='testimonial'>
                <div className="clientAvatar">
                  <img src={avatar} />
                </div>
                <h5 className='clientName'>{name}</h5>
                <small className='clientReview'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}
