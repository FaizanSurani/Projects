import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({ email: "" });

  const { email } = formData;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("All fields are necessary");
    }
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/forgotPassword",
        { email }
      );
      alert(res.data.message);
      navigate("/login");
    } catch (error) {
      alert(error.res.data.message);
    }
  };

  return (
    <>
      <div className="min-h-screen px-12 py-8 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-blue-500 w-full md:w-3/6 lg:h-2/6 rounded-lg px-8 py-5">
          <h1 className="text-xl text-white">Forgot Password</h1>
          <div className="mt-4">
            <label>Email</label>
            <input
              type="email"
              className="w-full mt-2 p-2 outline-none"
              required
              value={email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <button className=" text-white w-full px-7 py-3 rounded bg-red-500 hover:bg-red-600 uppercase transition duration-150 ease-in-out">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
