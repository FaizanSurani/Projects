import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export const Navbar = () => {
  return (
    <>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <h1 className="text-2xl font-semibold">Faizan Surani</h1>
        </div>
        <div className="flex items-center justify-center gap-4 m-8 text-2xl">
          <FaLinkedin />
          <FaGithub />
          <FaTwitter />
        </div>
      </nav>
    </>
  );
};
