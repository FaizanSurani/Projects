import React from "react";
import { FaGitAlt, FaNodeJs } from "react-icons/fa";
import { RiGithubFill, RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { DiMysql } from "react-icons/di";

export const Technologies = () => {
  return (
    <>
      <div className="border-b border-neutral-800 pb-24">
        <h1 className="text-center my-20 text-4xl">Technologies</h1>
        <div className="flex items-center justify-center flex-wrap gap-4">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoJavascript className="text-7xl text-yellow-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-500" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiExpress className="text-7xl text-white" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-500" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiMysql className="text-7xl text-blue-500" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGitAlt className="text-7xl text-orange-800" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiGithubFill className="text-7xl" />
          </div>
        </div>
      </div>
    </>
  );
};
