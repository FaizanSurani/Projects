import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { RiHotelBedLine } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyHotelsCard = ({ hotel }) => {
  return (
    <>
      <Link>
        <div className="flex flex-col justify-between border border-slate-300 rounded-lg p-8 gap-5">
          <h2 className="text-2xl font-bold">{hotel.name}</h2>
          <p className="whitespace-pre-line">{hotel.description}</p>
          <div className="grid grid-cols-5 gap-2">
            <div className="border border-slate-300 rounded-sm p-3 flex items-center justify-center">
              <IoLocationSharp className="mr-1" />
              {hotel.city}, {hotel.country}
            </div>
            <div className="border border-slate-300 rounded-sm p-3 flex items-center justify-center">
              <FaRegBuilding className="mr-1" />
              {hotel.type}
            </div>
            <div className="border border-slate-300 rounded-sm p-3 flex items-center justify-center">
              <LiaRupeeSignSolid className="mr-1" />
              {hotel.pricePerNight}
            </div>
            <div className="border border-slate-300 rounded-sm p-3 flex items-center justify-center">
              <RiHotelBedLine className="mr-1" />
              {hotel.adultCount}, {hotel.childCount}
            </div>
            <div className="border border-slate-300 rounded-sm p-3 flex items-center justify-center">
              <FaRegStar className="mr-1" />
              {hotel.rating}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MyHotelsCard;
