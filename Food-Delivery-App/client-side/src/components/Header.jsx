import React from "react";
import { Link } from "react-router-dom";
import src from "../assets/Food.png";

export default function Header() {
  return (
    <>
      <nav className="bg-green-500 shadow-lg">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-black">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="max-h-10 max-w-12 border-2 border-green-400 rounded-full mr-10">
                <Link to="/">
                  <img src={src} alt="..." />
                </Link>
              </div>
              <ul className="flex space-x-5">
                <li className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-black hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  <Link to="/orders">Orders</Link>
                </li>
                <li className="text-black hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  <Link to="/sign-in">Sign In</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
