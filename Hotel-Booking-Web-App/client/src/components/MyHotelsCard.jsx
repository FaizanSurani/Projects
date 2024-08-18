import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { RiHotelBedLine } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyHotelsCard = ({ hotels }) => {
  return (
    <>
      <Link to={`/edit-hotel/${hotels._id}`}>
        <div className="flex flex-col justify-between border border-slate-300 rounded-lg p-4 md:p-8 gap-5 m-2 md:m-4">
          <h2 className="text-xl md:text-2xl font-bold">{hotels.hotelName}</h2>
          <p className="whitespace-pre-line text-sm md:text-base">
            {hotels.hotelDescription}
          </p>
          <div className="grid grid-cols-5 text-xs md:text-base gap-2 md:gap-3">
            <div className="border border-slate-300 rounded-sm p-2 md:p-3 flex items-center justify-center">
              {hotels.hotelCity}, {hotels.hotelCountry}
            </div>
            <div className="border border-slate-300 rounded-sm p-2 md:p-3 flex items-center justify-center">
              {hotels.hotelType}
            </div>
            <div className="border border-slate-300 rounded-sm p-2 md:p-3 flex items-center justify-center">
              <LiaRupeeSignSolid className="mr-1" />
              {hotels.pricePerNight}
            </div>
            <div className="border border-slate-300 rounded-sm p-2 md:p-3 flex items-center justify-center">
              <RiHotelBedLine className="mr-1" />
              {hotels.adultCount} Adult, {hotels.childCount} Child
            </div>
            <div className="border border-slate-300 rounded-sm p-2 md:p-3 flex items-center justify-center">
              <FaRegStar className="mr-1" />
              {hotels.rating}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MyHotelsCard;
