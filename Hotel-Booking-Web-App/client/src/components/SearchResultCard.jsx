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
        <div className="flex items-center">
          <span className="flex">
            {Array.from({ length: hotel.rating }).map(() => (
              <AiFillStar />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
