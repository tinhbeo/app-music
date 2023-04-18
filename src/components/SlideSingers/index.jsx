import React from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import { singerImages } from "@/static/data.js";
import { NavLink } from "react-router-dom";

const SlideSingers = () => {
  return (
    <div className="relative select-none">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={28}
        slidesPerView={7}
        slidesPerGroup={7}
        autoplay={true}
        allowTouchMove={false}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
      >
        {singerImages.map((image, index) => (
          <SwiperSlide key={index} className="hover:opacity-70">
            <NavLink to="#">
              <img src={image} loading="lazy" alt="slide-img" />
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
      <span className="prev absolute w-[38px] h-[38px] text-lg z-10 rounded-full cursor-pointer text-white top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 flex items-center justify-center bg-white select-none">
        <HiOutlineChevronLeft className="text-black" />
      </span>

      <span className="next absolute w-[38px] h-[38px] text-lg z-10 rounded-full cursor-pointer text-white top-1/2 -translate-y-1/2 right-0 translate-x-1/2 flex items-center justify-center bg-white select-none">
        <HiOutlineChevronRight className="text-black" />
      </span>
    </div>
  );
};

export default SlideSingers;
