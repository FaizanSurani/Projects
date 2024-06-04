import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5001/resetPassword" + token,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        navigate("/sign-in");
      }

      if (!response.ok) {
        throw new Error("Failed to reset the password.");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="text-center text-4xl mt-6 mb-6 px-7 py-3 font-semibold text-white">
        <h1>Reset Password</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <form className="w-full max-w-md">
          <label htmlFor="password" className="block text-gray-300 mt-3">
            New Password
          </label>
          <input
            className="w-full px-7 py-3  mb-3 rounded-md border border-gray-700  transition duration-150 ease-in-out hover:border-gray-600 active:border-gray-800 bg-gray-800"
            type="password"
            placeholder="New Password"
            id="password"
            value={password}
            autoComplete="new-password"
            onChange={handleChange}
          />
          <br />
          <button
            className="uppercase font-semibold w-full px-4 py-2 mt-3 mb-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-150 ease-in-out"
            type="submit">
            Reset Password
          </button>
        </form>
      </div>
    </>
  );
}
