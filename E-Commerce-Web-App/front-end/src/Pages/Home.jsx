import React from "react";
import Hero from "../Components/Hero";
import Popular from "../Components/Popular";
import Offers from "../Components/Offers";
import NewCollections from "../Components/NewCollections";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </>
  );
}
