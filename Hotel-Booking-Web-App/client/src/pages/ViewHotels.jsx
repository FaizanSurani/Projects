import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyHotelsCard from "../components/MyHotelsCard";

const ViewHotels = () => {
  const [hotelData, setHotelData] = useState("");

  return (
    <>
      <div className="space-y-5 h-screen">
        <span className="flex justify-around">
          <h1 className="p-6 text-3xl font-bold">My Hotels</h1>
          <Link
            to="/add-hotel"
            className="flex text-lg rounded bg-blue-600 hover:bg-blue-500 p-3 text-white font-semibold m-4">
            Add Hotel
          </Link>
        </span>
        {hotelData ? (
          <div className="grid grid-cols-1 gap-8">
            {hotelData.map((hotel) => (
              <MyHotelsCard hotel={hotel} />
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
