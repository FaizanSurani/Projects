import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="min-h-screen px-12 py-8 flex justify-center items-center">
        <form className="bg-blue-500 w-full md:w-3/6 lg:h-2/6 rounded-lg px-8 py-5">
          <h1 className="text-xl text-white">Login</h1>
          <div className="mt-4">
            <label>Email</label>
            <input
              type="text"
              className="w-full mt-2 p-2 outline-none"
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
              className="w-full mt-2 p-2 outline-none"
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
            to=""
            className="flex justify-center items-center text-red-600 font-semibold mt-4">
            <u>Forgot Password?</u>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
