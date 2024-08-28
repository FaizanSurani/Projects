import React from "react";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";

export const Home = () => {
  return (
    <>
      <div className="min-h-screen">
        <Hero />
        <SearchBar />
      </div>
    </>
  );
};
