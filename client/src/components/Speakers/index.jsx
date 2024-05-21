import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import SpeakerCard from '../SpeakerCard';
import { useFetch } from '../../hooks/useFetch'

import './index.scss'
const Speakers = () => {

    const baseUrl = "http://localhost:3000/speakers"
    const [speakersData] = useFetch(baseUrl)
    return (
        <div className='speakers_section'>

            <div className="container">
                <h4 className='speakers_section_title'>SPEAKERS</h4>

                <div className="speakers_content">
                    <div className="row align-items-end">
                        <div className="speakers_content_left col-12 col-lg-3">
                            <h2 className='speakers_title'>LEARNING FROM EXPERTS</h2>
                            <p>Et pri magna evertitur. Ne qui doctus interesset, ad eum ullum accusam, te nam iusto iisque omittam. Elit nobis magnas iust.</p>
                        </div>

                        <div className="speakers_content_right col-12 col-lg-9">
                            <Swiper
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 2500,
                                }}
                                loop={true}
                                breakpoints={{
                                    300: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                }}
                                className='mySwiper'
                            >
                                {speakersData &&
                                    speakersData.map((speaker) => (
                                        <SwiperSlide key={speaker.id}>
                                            <SpeakerCard {...speaker} />
                                        </SwiperSlide>
                                    ))}
                            </Swiper>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Speakers