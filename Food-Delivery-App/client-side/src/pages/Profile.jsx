import React, { useState } from "react";
import Header from "../components/Header";

export default function Profile() {
  const [changeDetail, setChangeDetail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetch("http://localhost:5001/updateuser", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    });
    const res = await result.json();
    console.log(res);
    setChangeDetail(false);
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <h1 className="text-4xl text-center mt-5 mb-6 px-7 py-3 font-semibold">
          My Profile
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <label htmlFor="name" className="block mt-3 text-gray-300">
            Name
          </label>
          <input
            onChange={onChange}
            type="text"
            id="name"
            value={name}
            disabled={!changeDetail}
            className="w-full px-4 py-2 mb-3 rounded-md border border-gray-700  transition duration-150 ease-in-out hover:border-gray-600 active:border-gray-800 bg-gray-800"
          />
          <label htmlFor="email" className="block mt-3 text-gray-300">
            Email Address
          </label>
          <input
            onChange={onChange}
            type="email"
            id="email"
            value={email}
            disabled={!changeDetail}
            className="w-full px-4 py-2 mb-3 rounded-md border border-gray-700  transition duration-150 ease-in-out hover:border-gray-600 active:border-gray-800 bg-gray-800"
          />
          <div className="flex justify-center">
            {!changeDetail ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  // changeDetail && onSubmit();
                  setChangeDetail(!changeDetail);
                  console.log(changeDetail);
                }}
                className="px-7 py-3 uppercase bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out rounded mt-3 ">
                Edit Profile
              </button>
            ) : (
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="px-7 py-3 uppercase bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out rounded mt-3 ">
                Update Profile
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
