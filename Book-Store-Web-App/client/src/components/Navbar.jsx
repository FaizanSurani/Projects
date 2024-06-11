import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="bg-zinc-800 text-white px-7 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="h-10 me-4"
            src="https://cdn.icon-icons.com/icons2/516/PNG/512/read_book_study_icon-icons.com_51077.png"
            alt="..."
          />
          <h1 className="text-2xl font-semibold">Book Heaven</h1>
        </div>
        <div>
          <ul className="flex gap-4 transition ease-in-out">
            <li className="hover:text-blue-500">Home</li>
            <li className="hover:text-blue-500">All Books</li>
            <li className="hover:text-blue-500">About Us</li>
            <li className="hover:text-blue-500">Cart</li>
            <li className="hover:text-blue-500">Profile</li>
          </ul>
          <div className="flex gap-4">
            <button className="px-4 py-2 border border-blue-500 rounded">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-500 rounded">Register</button>
          </div>
        </div>
      </div>
    </>
  );
}
