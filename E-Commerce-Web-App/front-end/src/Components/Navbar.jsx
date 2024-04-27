import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import cart from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import "./Navbar.css";

export default function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalItems } = useContext(ShopContext);

  return (
    <>
      <div className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <p className="logo-text">SHOPPER</p>
        </div>
        <ul className="nav-list">
          <li
            onClick={() => setMenu("shop")}
            className={`nav-link ${menu === "shop" ? "active" : ""}`}>
            <Link to="/">Shop</Link>
            {menu === "shop" && <hr />}
          </li>
          <li
            onClick={() => setMenu("men")}
            className={`nav-link ${menu === "men" ? "active" : ""}`}>
            <Link to="/men">Men</Link>
            {menu === "men" && <hr />}
          </li>
          <li
            onClick={() => setMenu("women")}
            className={`nav-link ${menu === "women" ? "active" : ""}`}>
            <Link to="/women">Women</Link>
            {menu === "women" && <hr />}
          </li>
          <li
            onClick={() => setMenu("kids")}
            className={`nav-link ${menu === "kids" ? "active" : ""}`}>
            <Link to="/kids">Kids</Link>
            {menu === "kids" && <hr />}
          </li>
        </ul>
        <div className="button-group">
          <button className="button">
            <Link to="/login">Login</Link>
          </button>
          <button className="button">
            <Link to="/sign-up">SignUp</Link>
          </button>
          <Link to="/cart" className="cart-icon">
            <img src={cart} alt="Cart" />
          </Link>
          <div className="badge">{getTotalItems()}</div>
        </div>
      </div>
    </>
  );
}
