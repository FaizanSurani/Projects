import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function Sidebar({ data }) {
  return (
    <>
      <div className="bg-zinc-800 p-4 rounded flex flex-col items-center justify-between h-[100%]">
        <div className="flex items-center flex-col justify-center">
          <img src={data.avatar} alt="/" className="h-[12vh]" />
          <p className="mt-3 text-xl text-zinc-100 font-semibold">
            {data.name}
          </p>
          <p className="mt-1 text-normal text-zinc-300">{data.email}</p>
          <div className="w-full mt-4 h-[1px] bg-zinc-500 hidden lg:block"></div>
        </div>
        <div className="w-full flex-col justify-center items-center hidden lg:flex">
          <Link
            to="/profile"
            className="text-zinc-100 w-full font-semibold py-2 mt-4 text-center hover:bg-zinc-900 rounded transition duration-150 ease-in-out">
            Favourites
          </Link>
          <Link
            to="/profile/orderHistory"
            className="text-zinc-100 w-full font-semibold py-2 mt-4 text-center hover:bg-zinc-900 rounded transition duration-150 ease-in-out">
            Order History
          </Link>
          <Link
            to="/profile/settings"
            className="text-zinc-100 w-full font-semibold py-2 mt-4 text-center hover:bg-zinc-900 rounded transition duration-150 ease-in-out">
            Settings
          </Link>
        </div>
        <button className="bg-zinc-900 w-3/6 lg:w-full mt-4 lg:mt-0 text-white font-semibold flex justify-center items-center transition duration-150 ease-in-out py-2 rounded hover:bg-white hover:text-zinc-900">
          Logout <FaArrowRightFromBracket className="ms-4" />
        </button>
      </div>
    </>
  );
}
