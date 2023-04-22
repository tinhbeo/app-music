import React from "react";
import { images } from "@/static/data.js";
import { Autoplay, Navigation } from "swiper";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const SliderHome = () => {
  return (
    <Swiper
      className="group"
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      loop
      autoplay={{
        delay: 5000,
      }}
      slidesPerView={3}
      navigation={{
        prevEl: ".prev",
        nextEl: ".next",
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            className="w-full rounded-md h-44 object-cover"
            src={image}
            loading="lazy"
            alt="slide-img"
          />
        </SwiperSlide>
      ))}

      <span className="prev absolute w-[55px] h-[55px] text-3xl z-10 rounded-full cursor-pointer text-white top-1/2 -translate-y-1/2 left-6 group-hover:flex items-center justify-center hover:bg-text-gray-2 select-none hidden">
        <HiOutlineChevronLeft />
      </span>

      <span className="next absolute w-[55px] h-[55px] text-3xl z-10 rounded-full cursor-pointer text-white top-1/2 -translate-y-1/2 right-6 group-hover:flex items-center justify-center hover:bg-text-gray-2 select-none hidden">
        <HiOutlineChevronRight />
      </span>
    </Swiper>
  );
};

export default SliderHome;
