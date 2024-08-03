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
      items: "My Bookings",
      link: "/my-bookings",
    },
    {
      items: "My Hotels",
      link: "/my-hotels",
    },
    {
      items: "Profile",
      link: "/profile",
    },
  ];
  return (
    <>
      <nav className="bg-blue-900 z-50 relative p-4 text-white flex justify-between">
        <Link to="/" className="flex">
          <h1 className="flex px-4 py-2 font-semibold text-2xl md:text-4xl tracking-tight">
            Hotel Booking
          </h1>
        </Link>
        <div className="items-center gap-4 block md:flex">
          <div className="hidden md:flex gap-4 px-4 text-lg font-medium">
            {links.map((items, index) => (
              <Link
                to={items.link}
                key={index}
                className=" transition-all duration-150 ease-in-out hover:text-gray-300">
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
