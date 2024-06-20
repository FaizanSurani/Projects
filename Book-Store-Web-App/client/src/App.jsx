import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import AllBooks from "./pages/AllBooks";
import Cart from "./pages/Cart";
import BookDetails from "./components/BookDetails";
import Favourites from "./components/Favourites";
import OrderHistory from "./components/OrderHistory";
import Settings from "./components/Settings";
import { AuthContext } from "./components/AuthContext";
import AllOrders from "./pages/AllOrders";
import AddBooks from "./pages/AddBooks";
import UpdateBooks from "./pages/UpdateBooks";

export default function App() {
  const { login, changeRole } = useContext(AuthContext);
  const { role } = useContext(AuthContext);

  useEffect(() => {
    if (
      localStorage.getItem("id") &&
      localStorage.getItem("authToken") &&
      localStorage.getItem("role")
    ) {
      login();
      changeRole(localStorage.getItem("role"));
    }
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />}>
          {role === "user" ? (
            <Route index element={<Favourites />} />
          ) : (
            <Route index element={<AllOrders />} />
          )}
          {role === "admin" && (
            <Route path="/profile/addBooks" element={<AddBooks />} />
          )}
          <Route path="/profile/orderHistory" element={<OrderHistory />} />
          <Route path="/profile/settings" element={<Settings />} />
        </Route>
        <Route path="/all-books" element={<AllBooks />} />
        <Route path="/updateBooks/:id" element={<UpdateBooks />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/view-book-details/:id" element={<BookDetails />} />
      </Routes>
      <Footer />
    </>
  );
}
