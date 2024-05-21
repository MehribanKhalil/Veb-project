import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import './index.scss'


const Brands = () => {
  return (
    <div className='brands_seciton'>
        <div className="container">
        <Swiper

        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
          }}
          loop={true}
        breakpoints={{
            300:{
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-1.png" alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-2.png" alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-3.png" alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-4.png" alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-5.png" alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-6.png" alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-7.png" alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-8.png" alt="" />
        </SwiperSlide>
        
      </Swiper>
        </div>
    
    </div>
  )
}

export default Brands