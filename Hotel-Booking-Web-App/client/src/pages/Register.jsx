import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });

  const { username, email, password, address } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        username === "" ||
        email === "" ||
        password === "" ||
        address === ""
      ) {
        alert("All fields are necessary");
      } else {
        const response = await axios.post(
          "http://localhost:5000/api/v1/register",
          { username, email, password, address }
        );
        alert(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <>
      <div className="min-h-screen px-12 py-8 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-blue-500 w-full md:w-3/6 lg:h-2/6 rounded-lg px-8 py-5">
          <h1 className="text-xl text-white">Register</h1>
          <div className="mt-4">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="w-full mt-2 p-2 outline-none bg-blue-200"
              value={username}
              onChange={onChange}
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="w-full mt-2 p-2 outline-none bg-blue-200"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="w-full mt-2 p-2 outline-none bg-blue-200"
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="address">Address</label>
            <textarea
              name="address"
              rows="5"
              value={address}
              className="w-full mt-2 p-2 outline-none bg-blue-200"
              onChange={onChange}
              required
            />
          </div>
          <div className="mt-4">
            <button className=" text-white w-full px-7 py-3 rounded bg-red-500 hover:bg-red-600 uppercase transition duration-150 ease-in-out">
              Register
            </button>
          </div>
          <p className="flex justify-center items-center mt-4 text-white font-semibold">
            Or
          </p>
          <p className="flex justify-center items-center mt-4 text-white font-semibold">
            Already Have an Account? &nbsp;
            <Link to="/login" className=" hover:text-zinc-300">
              <u>Login</u>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
