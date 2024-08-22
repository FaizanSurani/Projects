import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyHotelsCard from "../components/MyHotelsCard";
import axios from "axios";

const ViewHotels = () => {
  const [hotelData, setHotelData] = useState("");
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("authToken")}`,
  };

  useEffect(() => {
    const fetchHotels = async () => {
      const res = await axios.get("http://localhost:5000/api/v1/viewHotels", {
        headers,
      });
      console.log(res.data);
      setHotelData(res.data);
    };

    fetchHotels(hotelData);
  }, []);

  return (
    <>
      <div className="space-y-5 min-h-screen">
        <span className="flex justify-between">
          <h1 className="p-6 text-3xl font-bold">My Hotels</h1>
          <Link
            to="/add-hotel"
            className="flex text-lg rounded bg-blue-600 hover:bg-blue-500 p-3 text-white font-semibold m-4">
            Add Hotel
          </Link>
        </span>
        {hotelData.length > 0 ? (
          <div className="grid grid-cols-1 gap-8">
            {hotelData.map((hotel, index) => (
              <MyHotelsCard key={index} hotels={hotel} />
            ))}
          </div>
        ) : (
          <div className="text-xl flex justify-center">No Hotels Found</div>
        )}
      </div>
    </>
  );
};

export default ViewHotels;
