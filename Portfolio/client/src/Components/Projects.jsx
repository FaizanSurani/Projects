import React from "react";
import { PROJECTS } from "../assets";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl">
          Projects
        </motion.h1>
        <div>
          {PROJECTS.map((item, i) => (
            <div key={i} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4">
                <img
                  src={item.image}
                  width={150}
                  height={150}
                  alt=""
                  className="mb-6 rounded"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">{item.title}</h6>
                <p className="mb-4 text-neutral-400">{item.description}</p>
                {item.technologies.map((tech, i) => (
                  <span
                    className="mr-2 bg-neutral-900 rounded px-2 py-1 text-sm font-medium text-purple-900"
                    key={i}>
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
