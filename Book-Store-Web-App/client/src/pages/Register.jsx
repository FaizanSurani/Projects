import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  const { name, email, password, address } = formData;
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name === "" || email === "" || password === "" || address === "") {
        alert("All fields are necessary");
      } else {
        const res = await axios.post("http://localhost:5000/api/v1/sign-up", {
          name,
          email,
          password,
          address,
        });
        alert(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-auto bg-zinc-900 py-8 flex justify-center items-center">
        <form
          className="bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6"
          onSubmit={onSubmit}>
          <h1 className="text-zinc-200 text-xl">Register</h1>
          <div className="mt-4">
            <div>
              <label htmlFor="username" className="text-zinc-400">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                className="w-full bg-zinc-900 mt-2 text-zinc-100 p-2 outline-none"
                onChange={onChange}
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="text-zinc-400">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                className="w-full bg-zinc-900 mt-2 text-zinc-100 p-2 outline-none"
                onChange={onChange}
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="text-zinc-400">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                className="w-full bg-zinc-900 mt-2 text-zinc-100 p-2 outline-none"
                onChange={onChange}
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="address" className="text-zinc-400">
                Address
              </label>
              <textarea
                type="text"
                name="address"
                value={address}
                rows="5"
                className="w-full bg-zinc-900 mt-2 text-zinc-100 p-2 outline-none"
                onChange={onChange}
                required
              />
            </div>
            <div className="mt-4">
              <button className="bg-blue-500 w-full font-semibold px-7 py-3 uppercase text-white rounded hover:bg-blue-600 transition duration-150 ease-in-out">
                Register
              </button>
            </div>
            <p className="flex mt-4 justify-center items-center text-zinc-200 font-semibold">
              Or
            </p>
            <p className="flex mt-4 justify-center items-center text-zinc-200 font-semibold">
              Already have an account? &nbsp;
              <Link to="/login" className="hover:text-blue-500">
                <u>Login</u>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
