import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";

const ResetPassword = () => {
  const [formData, setFormData] = useState({ password: "" });

  const { password } = formData;
  const navigate = useNavigate();
  const token = useParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === "") {
      alert("All fields are necessary");
    }
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/resetPassword/${token}`,
        { password }
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
          <h1 className="text-xl text-white">Reset Password</h1>
          <div className="mt-4">
            <label>Password</label>
            <input
              type="password"
              className="w-full mt-2 p-2 outline-none"
              required
              value={password}
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <button className=" text-white w-full px-7 py-3 rounded bg-red-500 hover:bg-red-600 uppercase transition duration-150 ease-in-out">
              Update Password
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
