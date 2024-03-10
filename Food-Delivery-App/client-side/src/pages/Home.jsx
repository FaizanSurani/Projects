import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="m-3 grid place-content-between lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
