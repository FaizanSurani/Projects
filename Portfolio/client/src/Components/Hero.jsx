import React from "react";
import { HERO_CONTENT } from "../assets/index.js";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4 lg:mb-36">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <dialogv className="flex flex-col items-center lg:items-start">
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0 }}
                className="text-5xl pb-16 font-thin tracking-tight lg:mt-14 lg:text-7xl">
                Faizan Surani
              </motion.h1>
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                Full Stack Developer
              </motion.span>
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="my-2 max-w-full font-light tracking-tighter py-2">
                {HERO_CONTENT}
              </motion.p>
            </dialogv>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                src=""
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
