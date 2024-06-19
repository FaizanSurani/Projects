import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

export default function Settings() {
  const [value, setValue] = useState({ address: "" });
  const [profile, setProfile] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("authToken")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://localhost:5000/api/v1/getUser", {
        headers,
      });
      setProfile(res.data);
      setValue({ address: res.data.address });
    };
    fetch();
  }, []);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const changeDetails = async () => {
    const res = await axios.put(
      "http://localhost:5000/api/v1/updateAddress",
      value,
      { headers }
    );
    alert(res.data.message);
  };

  return (
    <>
      {!profile && (
        <div className="h-[100%] w-full flex justify-center items-center">
          <Loader />
        </div>
      )}
      {profile && (
        <div className="h-screen p-0 md:p-4 text-zinc-100">
          <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
            Settings
          </h1>
          <div className="flex gap-8">
            <div>
              <label htmlFor="">Name</label>
              <p className="p-2 rounded bg-zinc-800 mt-2 font-semibold">
                {profile.name}
              </p>
            </div>
            <div>
              <label htmlFor="">Email</label>
              <p className="p-2 rounded bg-zinc-800 mt-2 font-semibold">
                {profile.email}
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-col">
            <label htmlFor="">Address</label>
            <textarea
              className="p-2 rounded bg-zinc-800 mt-2 font-semibold"
              placeholder="Address"
              name="address"
              rows="5"
              value={value.address}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="bg-blue-500 text-black font-semibold px-3 py-2 hover:bg-blue-400 rounded transition duration-150 ease-in-out"
              onClick={changeDetails}>
              Update
            </button>
          </div>
        </div>
      )}
    </>
  );
}
