import React, { useState } from "react";
import logo from "../assets/logo.png";
import cart from "../assets/cart_icon.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menu, setMenu] = useState("shop");

  return (
    <>
      <div className="flex justify-around items-center p-4 shadow-md">
        <div className="flex items-center gap-[10px]">
          <img src={logo} alt="..." />
          <p className="text-[30px] font-semibold text-">SHOPPER</p>
        </div>
        <ul className="flex items-center list-none gap-[50px] text-[17px] font-medium">
          <li
            onClick={() => setMenu("shop")}
            className="flex justify-center items-center flex-col gap-1 cursor-pointer">
            <Link to="/">Shop</Link>
            {menu === "shop" ? (
              <hr className="h-[3px] rounded-lg border-none bg-[#ff4141] w-[80%]" />
            ) : (
              ""
            )}
          </li>
          <li
            onClick={() => setMenu("men")}
            className="flex justify-center items-center flex-col gap-1 cursor-pointer">
            <Link>Men</Link>
            {menu === "men" ? (
              <hr className="h-[3px] rounded-lg border-none bg-[#ff4141] w-[80%]" />
            ) : (
              ""
            )}
          </li>
          <li
            onClick={() => setMenu("women")}
            className="flex justify-center items-center flex-col gap-1 cursor-pointer">
            <Link>Women</Link>
            {menu === "women" ? (
              <hr className="h-[3px] rounded-lg border-none bg-[#ff4141] w-[80%]" />
            ) : (
              ""
            )}
          </li>
          <li
            onClick={() => setMenu("kids")}
            className="flex justify-center items-center flex-col gap-1 cursor-pointer">
            <Link>Kids</Link>
            {menu === "kids" ? (
              <hr className="h-[3px] rounded-lg border-none bg-[#ff4141] w-[80%]" />
            ) : (
              ""
            )}
          </li>
        </ul>
        <div className="flex items-center gap-[35px]">
          <button className="px-4 py-2 outline-none border border-gray-800 rounded-[75px] text-md bg-white font-medium text-[#515151] cursor-pointer transition duration-150 ease-in-out active:bg-[#f3f3f3]">
            <Link to="/login">Login</Link>
          </button>
          <button className="px-4 py-2 outline-none border border-gray-800 rounded-[75px] text-md bg-white font-medium text-[#515151] cursor-pointer transition duration-150 ease-in-out active:bg-[#f3f3f3]">
            <Link to="/sign-up">SignUp</Link>
          </button>
          <Link to="/cart">
            <img src={cart} alt="..." />
          </Link>
          <div className="w-[22px] h-[22px] flex justify-center items-center -mt-[35px] -ml-[55px] text-[14px] rounded-[11px] bg-red-800 text-white">
            0
          </div>
        </div>
      </div>
    </>
  );
}
