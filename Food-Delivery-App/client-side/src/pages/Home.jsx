import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import general Swiper styles
import "swiper/css/effect-fade"; // Import specific style for EffectFade
import "swiper/css/autoplay"; // Import specific style for Autoplay
import "swiper/css/navigation"; // Import specific style for Navigation
import "swiper/css/pagination"; // Import specific style for Pagination
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";

export default function Home() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");

  SwiperCore.use([EffectFade, Autoplay, Navigation, Pagination]);

  const loadData = async () => {
    let res = await fetch("http://localhost:5001/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await res.json();

    setItems(response[0]);
    setCategory(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
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
            {items
              .filter((item) => item && item.img)
              .map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="relative"
                  style={{ zIndex: "10" }}>
                  <div className="flex justify-center items-center absolute top-[35%] left-0 w-full h-full">
                    <input
                      type="search"
                      placeholder="Search"
                      id="search"
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                      className="text-white rounded-md h-12 w-[75%] px-4 mr-4 bg-gray-900"
                    />
                  </div>
                  <img
                    key={index}
                    src={item.img}
                    alt={`Slide ${index}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      <div>
        {category.map((data, index) => {
          return (
            <div key={index} className="mb-3">
              <div key={data._id} className="m-3 text-lg font-bold">
                {data.CategoryName}
              </div>
              <hr />
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items
                  .filter(
                    (item) =>
                      item.CategoryName === data.CategoryName &&
                      item.name
                        .toLowerCase()
                        .includes(search.toLocaleLowerCase())
                  )
                  .map((filterItems) => (
                    <div key={filterItems._id}>
                      <Card
                        foodItems={filterItems}
                        options={filterItems.options[0]}
                      />
                    </div>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
