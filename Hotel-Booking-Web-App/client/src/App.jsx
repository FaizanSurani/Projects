import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/Profile";
import AddHotel from "./pages/AddHotel";
import ViewHotels from "./pages/ViewHotels";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-hotel" element={<AddHotel />} />
        <Route path="/my-hotels" element={<ViewHotels />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
