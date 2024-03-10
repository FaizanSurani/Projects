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
      <div>
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
