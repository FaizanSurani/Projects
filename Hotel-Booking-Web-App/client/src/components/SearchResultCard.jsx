import React from "react";
import { AiFillStar } from "react-icons/ai";

const SearchResultCard = ({ hotel }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-slate-300 rounded-lg p-5 gap-5">
      <div className="w-full h-[300px]">
        <img
          src={hotel.imageURL[0]}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="grid grid-rows-[1fr_2fr_1fr]">
        <div>
          <div className="flex items-center">
            <span className="flex">
              {Array.from({ length: hotel.rating }).map(() => (
                <AiFillStar className="fill-yellow-400" />
              ))}
            </span>
            <span className="ml-1 text-sm">{hotel.hotelType}</span>
          </div>
          <h2 className="text-2xl font-bold cursor-pointer">
            {hotel.hotelName}
          </h2>
        </div>
        <div>
          <div className="line-clamp-4">{hotel.hotelDescription}</div>
        </div>
        <div className="grid grid-cols-2 items-end whitespace-nowrap">
          <div className="flex gap-1 items-center">
            {hotel.facilities.slice(0, 3).map((facility) => (
              <span className="bg-slate-300 p-2 rounded-lg font-bold text-sm whitespace-nowrap">
                {facility}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
