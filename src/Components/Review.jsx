import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { FaStar } from "react-icons/fa6";
import { Avatar } from 'flowbite-react'
import Profile from "../assets/Profile.jpg"

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
export default function Review() {
  return (
    <div className="my-6 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customers
      </h2>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mt-5 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat veritatis debitis, sed aspernatur, assumenda harum
                  ullam dolor eos doloribus qui velit dolorum tempore,
                  voluptates hic molestias nesciunt quia voluptatibus ea?
                </p>
                <Avatar img={Profile} rounded className="w-10 mb-4" />
                <h5 className="text-lg font-medium">Mohanraj</h5>
                <p className="text-base">CEO, XYZ Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mt-5 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat veritatis debitis, sed aspernatur, assumenda harum
                  ullam dolor eos doloribus qui velit dolorum tempore,
                  voluptates hic molestias nesciunt quia voluptatibus ea?
                </p>
                <Avatar img={Profile} rounded className="w-10 mb-4" />
                <h5 className="text-lg font-medium">Mohanraj</h5>
                <p className="text-base">CEO, XYZ Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mt-5 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat veritatis debitis, sed aspernatur, assumenda harum
                  ullam dolor eos doloribus qui velit dolorum tempore,
                  voluptates hic molestias nesciunt quia voluptatibus ea?
                </p>
                <Avatar img={Profile} rounded className="w-10 mb-4" />
                <h5 className="text-lg font-medium">Mohanraj</h5>
                <p className="text-base">CEO, XYZ Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mt-5 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat veritatis debitis, sed aspernatur, assumenda harum
                  ullam dolor eos doloribus qui velit dolorum tempore,
                  voluptates hic molestias nesciunt quia voluptatibus ea?
                </p>
                <Avatar img={Profile} rounded className="w-10 mb-4" />
                <h5 className="text-lg font-medium">Mohanraj</h5>
                <p className="text-base">CEO, XYZ Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mt-5 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat veritatis debitis, sed aspernatur, assumenda harum
                  ullam dolor eos doloribus qui velit dolorum tempore,
                  voluptates hic molestias nesciunt quia voluptatibus ea?
                </p>
                <Avatar img={Profile} rounded className="w-10 mb-4" />
                <h5 className="text-lg font-medium">Mohanraj</h5>
                <p className="text-base">CEO, XYZ Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mt-5 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat veritatis debitis, sed aspernatur, assumenda harum
                  ullam dolor eos doloribus qui velit dolorum tempore,
                  voluptates hic molestias nesciunt quia voluptatibus ea?
                </p>
                <Avatar img={Profile} rounded className="w-10 mb-4" />
                <h5 className="text-lg font-medium">Mohanraj</h5>
                <p className="text-base">CEO, XYZ Company</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>
    </div>
  );
}
