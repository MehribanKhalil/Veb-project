import React from 'react'
import Slide from '../Slide/index'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination,EffectFade  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './index.scss'
export const IntroSection = () => {
    return (
        <div>

            <Swiper effect="fade" 
            pagination={{clickable: true,}} 
            loop={true} 
            modules={[Autoplay,Pagination,EffectFade]} 
            
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }} 
            fadeEffect={{
                crossFade: false,
              }}
              speed={1200}
            className="mySwiper">

                
                <SwiperSlide>
                    <Slide title='Back to nature' production='select production presents' writtenBy='written and directed by Haruki Tanaka / Ireland 2012' anotherClass='bg1' />
                </SwiperSlide>

                <SwiperSlide>
                    <Slide title='Back to nature' production='select production presents' writtenBy='written and directed by Haruki Tanaka / Ireland 2012' anotherClass='bg2' />
                </SwiperSlide>

                <SwiperSlide>
                    <Slide title='Back to nature' production='select production presents' writtenBy='written and directed by Haruki Tanaka / Ireland 2012' anotherClass='bg3' />
                </SwiperSlide>


            </Swiper>
            
              
        </div>
    )
}
