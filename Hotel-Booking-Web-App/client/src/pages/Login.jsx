import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email === "" || password === "") {
        alert("All fields are necessary");
      } else {
        const response = await axios.post(
          "http://localhost:5000/api/v1/login",
          {
            email,
            password,
          }
        );
        console.log(response.data);
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("authToken", response.data.authToken);
        navigate("/");
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
          <h1 className="text-xl text-white">Login</h1>
          <div className="mt-4">
            <label>Email</label>
            <input
              type="text"
              className="w-full mt-2 p-2 outline-none bg-blue-200"
              required
              value={email}
              name="email"
              onChange={onChange}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              className="w-full mt-2 p-2 outline-none bg-blue-200"
              value={password}
              required
              onChange={onChange}
            />
          </div>
          <div className="mt-4">
            <button className=" text-white w-full px-7 py-3 rounded bg-red-500 hover:bg-red-600 uppercase transition duration-150 ease-in-out">
              Submit
            </button>
          </div>
          <p className="flex justify-center items-center mt-4 text-white font-semibold">
            Or
          </p>
          <p className="flex justify-center items-center mt-4 text-white font-semibold">
            Dont Have an Account? &nbsp;
            <Link to="/register" className=" hover:text-zinc-300">
              <u>Register</u>
            </Link>
          </p>
          <Link
            to="/forgot-password"
            className="flex justify-center items-center text-red-600 font-semibold mt-4">
            <u>Forgot Password?</u>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
