import React from "react";

const SearchResultCard = ({ hotel }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-slate-300 rounded-lg p-5 gap-5">
      <div className="w-full h-[200px]">
        <img
          src={hotel.imageURL[0]}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col justify-between">Default Columns</div>
    </div>
  );
};

export default SearchResultCard;
