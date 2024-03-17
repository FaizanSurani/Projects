import React, { useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  const { name, email, password, address } = formData;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        location: address,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      navigate("/sign-up");
    } else {
      alert("Enter valid credentials");
    }
  };

  return (
    <>
      <div className="text-center text-4xl mt-6 mb-6 px-7 py-3 font-semibold">
        <h1>Sign Up</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <label htmlFor="name" className="block text-gray-300 mt-3">
            Name
          </label>
          <input
            className="w-full px-7 py-3 mb-3 rounded-md border border-gray-700  transition duration-150 ease-in-out hover:border-gray-600 active:border-gray-800  bg-gray-800"
            type="text"
            placeholder="Name"
            id="name"
            value={name}
            onChange={handleChange}
          />

          <label htmlFor="email" className="block text-gray-300 mt-3">
            Email Address
          </label>
          <input
            className="w-full px-7 py-3  mb-3 rounded-md border border-gray-700  transition duration-150 ease-in-out hover:border-gray-600 active:border-gray-800 text-gray-300 bg-gray-800"
            type="email"
            placeholder="Email Address"
            id="email"
            value={email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="password" className="block text-gray-300 mt-3">
            Password
          </label>
          <input
            className="w-full px-7 py-3  mb-3 rounded-md border border-gray-700  transition duration-150 ease-in-out hover:border-gray-600 active:border-gray-800 text-gray-300 bg-gray-800"
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="address" className="block text-gray-300 mt-3">
            Address
          </label>
          <input
            className="w-full px-7 py-3  mb-3 rounded-md border border-gray-700  transition duration-150 ease-in-out hover:border-gray-600 active:border-gray-800 text-gray-300 bg-gray-800"
            type="text"
            placeholder="Address"
            id="address"
            value={address}
            onChange={handleChange}
          />
          <br />
          <button
            type="submit"
            className="uppercase font-semibold w-full px-7 py-3 mt-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:bg-indigo-700 transition duration-150 ease-in-out">
            Sign Up
          </button>
          <br />
          <p className="mt-3">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-indigo-600 hover:underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
