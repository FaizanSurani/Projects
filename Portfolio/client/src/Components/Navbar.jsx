import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <h1 className="text-2xl font-semibold">Faizan Surani</h1>
        </div>
        <div className="flex items-center justify-center gap-4 m-8 text-2xl">
          <a
            href="https://linkedin.com/in/faizan-surani"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/FaizanSurani"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://x.com/suranifaizan52"
            rel="noopener noreferrer"
            target="_blank">
            <FaTwitter />
          </a>
        </div>
      </nav>
    </>
  );
};
