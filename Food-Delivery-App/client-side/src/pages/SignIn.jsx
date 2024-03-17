import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const { name, password } = formData;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div className="text-center text-4xl mt-6 mb-6 px-7 py-3 font-semibold text-white">
        <h1>Sign In</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <label htmlFor="name" className="block text-gray-300 mt-3">
            Name
          </label>
          <input
            className="w-full px-7 py-3  mb-3 rounded-md border border-gray-700  transition duration-150 ease-in-out hover:border-gray-600 active:border-gray-800 text-gray-300 bg-gray-800"
            type="text"
            placeholder="Name"
            id="name"
            value={name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="password" className="block text-gray-300">
            Password
          </label>
          <input
            className="w-full px-7 py-3 mb-3 rounded-md border border-gray-700  transition duration-150 ease-in-out hover:border-gray-600 active:border-gray-800 text-gray-300 bg-gray-800"
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={handleChange}
          />
          <br />
          <button
            className="uppercase font-semibold w-full px-4 py-2 mt-3 mb-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-150 ease-in-out"
            type="submit">
            Sign In
          </button>
          <br />
          <div className="flex justify-between items-center mt-3">
            <Link
              to="/forgot-password"
              className="text-indigo-600 hover:underline">
              Forgot Password?
            </Link>
            <p>
              Don't have an account?{" "}
              <Link to="/sign-up" className="text-indigo-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
