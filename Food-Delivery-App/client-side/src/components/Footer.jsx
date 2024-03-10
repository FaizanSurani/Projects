import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="md:flex flex-wrap justify-center items-center py-3 my-4 border-t">
        <div className="md:w-1/4">
          <span>&copy; 2024 GoFood, Inc</span>
        </div>
        <ul className="md:w-3/4 md:flex md:justify-end">
          <li className="mr-3">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-3">
            <Link to="">Contact</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
