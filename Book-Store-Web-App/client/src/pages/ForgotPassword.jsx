import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function ForgotPassword() {
  const [values, setValues] = useState({ email: "" });
  const navigate = useNavigate();

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = async () => {
    try {
      const response = await axios.post();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="h-screen bg-zinc-900 px-12 py-8 flex justify-center items-center">
        <form
          className="bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6"
          onSubmit={onSubmit}>
          <h1 className="text-zinc-200 text-xl">Forgot Password</h1>
          <div className="mt-4">
            <label htmlFor="email" className="text-zinc-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              className="w-full bg-zinc-900 mt-2 text-zinc-100 p-2 outline-none"
              onChange={onChange}
              required
            />
          </div>
          <div className="mt-4">
            <button className="bg-blue-500 w-full font-semibold px-7 py-3 uppercase text-white rounded hover:bg-blue-600 transition duration-150 ease-in-out">
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
