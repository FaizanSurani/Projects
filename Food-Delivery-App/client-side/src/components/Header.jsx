import React from "react";
import { Link, useNavigate } from "react-router-dom";
import src from "../assets/Food.png";

export default function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("authToken");
    navigate("/sign-in");
  };

  return (
    <>
      <nav className="bg-green-700 shadow-lg">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-black">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-start">
              <div className="max-h-10 max-w-12 border-2 border-green-400 rounded-full mr-10">
                <Link to="/">
                  <img src={src} alt="..." />
                </Link>
              </div>
              <ul className="flex mb-1 me-auto">
                <li className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">
                  <Link to="/">Home</Link>
                </li>
                {localStorage.getItem("authToken") ? (
                  <li className="text-black hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    <Link to="/orders">Orders</Link>
                  </li>
                ) : (
                  ""
                )}
              </ul>
              {!localStorage.getItem("authToken") ? (
                <div className="flex justify-center items-center mb-1">
                  <Link
                    to="/sign-in"
                    className="text-black hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Sign In
                  </Link>

                  <Link
                    to="/sign-up"
                    className="text-black hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Sign Up
                  </Link>
                </div>
              ) : (
                <div className="mb-1 flex justify-center items-center">
                  <div className="transition duration-150 ease-in-out text-black hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium flex justify-center items-center cursor-pointer">
                    My Cart
                  </div>
                  <Link
                    to="/profile"
                    className="text-black  hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Profile
                  </Link>
                  <div
                    type="button"
                    className="text-red-800 hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer transition duration-150 ease-in-out "
                    onClick={handleClick}>
                    Log out
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
