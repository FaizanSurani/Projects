import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";
import { AuthContext } from "../components/AuthContext";
import axios from "axios";
import Loader from "../components/Loader";

export default function Profile() {
  const { isLoggedIn } = useContext(AuthContext);
  const [userData, setUserData] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("authToken")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:5000/api/v1/getUser", {
        headers,
      });
      console.log(response.data);
      setUserData(response.data);
    };
    fetch();
  }, []);

  return (
    <>
      <div className="bg-zinc-900 md:px-12 px-2 flex md:flex-row flex-col w-full h-screen py-8 gap-4 text-white">
        {!userData ? (
          <div className="flex justify-center items-center w-full h-[100%]">
            <Loader />
          </div>
        ) : (
          <>
            <div className="w-full md:w-1/6">
              <Sidebar data={userData} />
            </div>
            <div className="w-full md:w-5/6">
              <Outlet />
            </div>
          </>
        )}
      </div>
    </>
  );
}
