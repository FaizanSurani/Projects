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
        <SwiperSlide className="relative">
          <img
            src="path/to/image1.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src="path/to/image2.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src="path/to/image3.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
