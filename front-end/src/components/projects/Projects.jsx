import React from 'react'
import { testimonials } from '../../Data';
import shapeTwo from "../../assets/shape-2.png"
import shapeOne from '../../assets/shape-1.png';
import testimonialIcon from "../../assets/testimonials-icon.svg"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.css';

import './projects.css';

const Projects = () => {
  return (
    <section className="testimonials section" id="testimonials">
      <h2 className="section__title text-cs">Projects</h2>
      <p className="section__subtitle">
        My<span>Work</span>
      </p>

      <Swiper
      spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="testimonials__container container mySwiper"
      >
        {testimonials.map(({ img, name,author , description }, index) => {
            return (
          <SwiperSlide key={index} className="testimonials__item card card-one">
           <div className="testimonial__header">
            <div className="testimonial__icon">
                <img src={testimonialIcon} alt="" />

            </div>
            <img src={img} alt="" className="testimonial__img" />
           </div>
           <p className="testimonial__description">{description}</p>
           <h3 className="testimonial__name">{name}</h3>
           <p className="testimonial__author">{author}</p>
           <img src={shapeTwo} alt="" className="shape c__shape" />

          </SwiperSlide>
        );
            })}
      </Swiper>
      <div className="section__deco deco__left">
            <img src={shapeOne} alt="" className="shape" />
        </div>

      <div className="section__bg-wrapper">
            <span className="bg__title">
                Projects
            </span>
        </div>

    </section>
  )
}

export default Projects
