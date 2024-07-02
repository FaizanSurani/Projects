import React from "react";
import { HERO_CONTENT } from "../assets/index.js";

export const Hero = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4 lg:mb-36">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-5xl pb-16 font-thin tracking-tight lg:mt-14 lg:text-7xl">
                Faizan Surani
              </h1>
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                Full Stack Developer
              </span>
              <p className="my-2 max-w-full font-light tracking-tighter py-2">
                {HERO_CONTENT}
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
