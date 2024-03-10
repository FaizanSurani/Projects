import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import general Swiper styles
import "swiper/css/effect-fade"; // Import specific style for EffectFade
import "swiper/css/autoplay"; // Import specific style for Autoplay
import "swiper/css/navigation"; // Import specific style for Navigation
import "swiper/css/pagination"; // Import specific style for Pagination
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";

export default function Carousel() {
  SwiperCore.use([EffectFade, Autoplay, Navigation, Pagination]);

  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ type: "progressbar" }}
        effect="fade"
        autoplay={{ delay: 3000 }}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="h-[360px]">
        <SwiperSlide className="relative" style={{ zIndex: "10" }}>
          <div className="flex justify-center items-center absolute top-[35%] left-0 w-full h-full">
            <input
              type="search"
              placeholder="Search"
              id="search"
              className="text-black rounded h-12 w-[75%] px-4 border border-white mr-4 bg-gray-900"
            />
            <button
              type="submit"
              className="text-black bg-green-600 px-4 py-2 rounded border-2 border-gray-700 hover:border-gray-900 transition duration-150 ease-in-out">
              Search
            </button>
          </div>
          <img src="..." alt="" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
