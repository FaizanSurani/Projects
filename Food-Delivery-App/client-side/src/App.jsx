import React, { useContext, useEffect } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Orders from "./pages/Orders";
import { CartProvider } from "./components/ContextReducer";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile";
import ResetPassword from "./pages/ResetPassword";
import { AuthContext } from "./components/UserContextReducer";

export default function App() {
  const { login, changeRole } = useContext(AuthContext);
  const { isLoggedIn, role } = useContext(AuthContext);

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
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/resetPassword/:token" element={<ResetPassword />} />

          {isLoggedIn && role === "user" ? (
            <Route path="/orders" element={<Orders />} />
          ) : (
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          )}
        </Routes>
      </Router>
    </CartProvider>
  );
}
