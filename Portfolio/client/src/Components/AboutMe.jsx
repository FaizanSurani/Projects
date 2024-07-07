import React from "react";
import { ABOUT_TEXT } from "../assets";
import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <>
      <div className="border-b pb-4 border-neutral-900">
        <h1 className="my-20 text-center text-4xl">
          About <span className="text-neutral-500">Me</span>
        </h1>
        <div className="flex flex-wrap">
          <div className="w-full lg:p-6">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="w-full">
              <div className="flex justify-center lg:justify-start">
                <p className="font-light tracking-tighter">{ABOUT_TEXT}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
