import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const links = [
    {
      items: "Login",
      link: "/login",
    },
    {
      items: "Register",
      link: "/register  ",
    },
    {
      items: "Profile",
      link: "/profile",
    },
  ];
  return (
    <>
      <nav className="bg-blue-900 z-50 relative p-6 text-white flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="flex px-4 py-2 font-semibold text-2xl">
            Hotel Booking
          </h1>
        </Link>
        <div className="items-center gap-4 block md:flex">
          <div className="hidden md:flex gap-4">
            {links.map((items, index) => (
              <Link
                to={items.link}
                key={index}
                className=" transition-all duration-150 ease-in-out">
                {items.items}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
