import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import src from "../assets/Food.png";
import Modal from "../Modal";
import Cart from "../pages/Cart";
import { useCart } from "./ContextReducer";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AuthContext } from "./UserContextReducer";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Header() {
  const data = useCart();
  const { login, role } = useContext(AuthContext);
  const [cartView, setCartView] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = () => {
    setDropDown(!dropDown);
  };

  const handleClick = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <>
      <nav className="bg-green-700 shadow-lg overflow-visible">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-black">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-start">
              <div className="max-h-10 max-w-12 border-2 border-green-400 rounded-full mr-10">
                <Link to="/">
                  <img src={src} alt="..." />
                </Link>
              </div>
              <ul className="flex mb-1 me-auto">
                <li
                  className={`text-black cursor-pointer hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                    pathMatchRoute("/") && "bg-gray-900 text-white"
                  }`}
                  onClick={() => navigate("/")}>
                  Home
                </li>
                {login && (
                  <li
                    className={`text-black cursor-pointer hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                      pathMatchRoute("/orders") && "bg-gray-900 text-white"
                    }`}
                    onClick={() => navigate("/orders")}>
                    Orders
                  </li>
                )}
              </ul>
              {login ? (
                <div className="mb-1 flex justify-center items-center">
                  <div
                    className="ml-2 transition duration-150 ease-in-out rounded-full cursor-pointer"
                    onClick={() => {
                      setCartView(true);
                    }}>
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={data.length} color="secondary">
                        <ShoppingCartIcon />
                      </StyledBadge>
                    </IconButton>
                  </div>
                  {cartView ? (
                    <Modal
                      onClose={() => {
                        setCartView(false);
                      }}>
                      <Cart />
                    </Modal>
                  ) : null}
                  <div className="relative" data-twe-dropdown-ref>
                    <Link
                      to="/profile"
                      className="text-black hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                      Profile
                    </Link>
                    <ul
                      className={`absolute z-[100] float-left m-auto py-2 ${
                        dropDown ? "block" : "hidden"
                      } max-w-max list-none overflow-hidden bg-white text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark`}
                      aria-labelledby="dropdownMenuButton1"
                      data-twe-dropdown-menu-ref>
                      <li>
                        {role === "admin" && (
                          <div
                            className=" cursor-pointer text-black hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                            data-twe-dropdown-item-ref>
                            <Link to="/dashboard">Dashboard</Link>
                          </div>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
