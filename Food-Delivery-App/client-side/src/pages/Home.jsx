import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export default function Home() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState([]);

  const loadData = async () => {
    let res = await fetch("http://localhost:3000/foodData", {
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
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="">
        {category?.map((data) => {
          return (
            <div className="mb-3">
              <div key={data._id} className="m-3 text-lg font-bold">
                {data.CategoryName}
              </div>
              <hr />
              {items
                ?.filter((item) => item.CategoryName === data.CategoryName)
                .map((filterItems) => {
                  return (
                    <div
                      key={filterItems._id}
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      <Card />
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
