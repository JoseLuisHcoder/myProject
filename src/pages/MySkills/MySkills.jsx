import axios from 'axios';
import React, { useEffect } from 'react'
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'


import './MySkills.css'
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/navigation";

const MySkills = () => {

  


  return (
    <div className='skill'>
      <div className='skill__contain'>
          <div className='skill__body'>
            <h1 className='skill__title'>MY SKILLS</h1>
            <h3 className='skill__subtitle'> Come on</h3>
            <div className='skill__box'></div>

          </div>
          <div className='skill__swiper'>
            <Swiper
              spaceBetween={30}
              slidesPerView={7}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true
              }}
              navigation={true}
              breakpoints={{
                300: {
                  slidesPerView: 2,
                  spaceBetween: 1,
                },
                400: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 7,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className='sw__html'>
                <img src="/images/html-5.svg" alt="html" />
                
              </SwiperSlide>
              <SwiperSlide className='sw__css'>
              <img src="/images/css-3.svg" alt="css" />
              </SwiperSlide>
              <SwiperSlide>
              <img src="/images/javascript.svg" alt="javascript" />
              </SwiperSlide>
              <SwiperSlide className='sw__react'>
              <img src="/images/react.svg" alt="react" />
              </SwiperSlide>
              <SwiperSlide>
              <img src="/images/redux.svg" alt="redux" />
              </SwiperSlide>
              <SwiperSlide className='sw__node'>
              <img src="/images/nodejs.svg" alt="node" />
              </SwiperSlide>
              <SwiperSlide className='sw__express'>
              <img src="/images/express.svg" alt="express" />
              </SwiperSlide>
              <SwiperSlide>
              <img src="/images/postgresql.svg" alt="postgres" />
              </SwiperSlide>
              <SwiperSlide>
              <img src="/images/git-icon.svg" alt="git" />
              </SwiperSlide>
              <SwiperSlide>
              <img src="/images/github-icon.svg" alt="github" />
              </SwiperSlide>
            </Swiper>
          </div>


      </div>

    </div>
  )
}

export default MySkills