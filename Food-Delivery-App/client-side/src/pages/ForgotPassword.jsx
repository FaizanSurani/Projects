import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/forgotPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail }),
      });

      if (!response.ok) {
        throw new Error("Failed to request password reset.");
      }
      const data = await response.json();
      setMessage(data.message);

      alert("Please Check Your Email!!");

      navigate("/sign-in");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleChange = (e) => {
    setUserEmail(e.target.value);
  };

  return (
    <>
      <div className="text-center text-4xl mt-6 mb-6 px-7 py-3 font-semibold text-white">
        <h1>Forgot Password</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <label htmlFor="email" className="block text-gray-300 mt-3">
            Email Address
          </label>
          <input
            className="w-full px-7 py-3  mb-3 rounded-md border border-gray-700  transition duration-150 ease-in-out hover:border-gray-600 active:border-gray-800 bg-gray-800"
            type="email"
            placeholder="Email Address"
            id="email"
            autoComplete="email"
            value={userEmail}
            onChange={handleChange}
          />
          <br />
          <button
            className="uppercase font-semibold w-full px-4 py-2 mt-3 mb-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-150 ease-in-out"
            type="submit">
            Reset Password
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
}
