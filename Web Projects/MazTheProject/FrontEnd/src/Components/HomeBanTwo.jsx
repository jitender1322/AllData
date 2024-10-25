import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import { FreeMode, Pagination } from 'swiper/modules';

export default function HomeBanTwo() {
    return (
        <div className='font-inter my-16 mx-4'>
            <h2 className='text-center text-3xl font-semibold' >Highlights places</h2>
            <p className='text-center text-light font-medium my-3 text-sm'>Popular places that Chisfis recommends for you</p>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode]}
                className="mySwiper w-10/12 mt-16">

                <SwiperSlide>
                    <img src="./newyork.png" alt="" />
                    <h4 className='mt-1 font-semibold ml-1'>New York</h4>
                    <span className='font-semibold text-sm ml-1 text-light'>188,288 properties</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./singapor.png" alt="" />
                    <h4 className='mt-1 font-semibold ml-1'>Singapore</h4>
                    <span className='font-semibold text-sm ml-1 text-light'>188,288 properties</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./paris.png" alt="" />
                    <h4 className='mt-1 font-semibold ml-1'>Paris</h4>
                    <span className='font-semibold text-sm ml-1 text-light'>188,288 properties</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./london.png" alt="" />
                    <h4 className='mt-1 font-semibold ml-1'>London</h4>
                    <span className='font-semibold text-sm ml-1 text-light'>188,288 properties</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./tokyo.png" alt="" />
                    <h4 className='mt-1 font-semibold ml-1'>Tokyo</h4>
                    <span className='font-semibold text-sm ml-1 text-light'>188,288 properties</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./newyork.png" alt="" />
                    <h4 className='mt-1 font-semibold ml-1'>New York</h4>
                    <span className='font-semibold text-sm ml-1 text-light'>188,288 properties</span>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
