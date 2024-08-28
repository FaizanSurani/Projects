import React, { useState } from "react";
import { MdTravelExplore } from "react-icons/md";
import { DatePicker } from "react-datepicker";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    adultCount: "",
    childCount: "",
  });

  const { destination, checkIn, checkOut, adultCount, childCount } =
    searchValue;

  return (
    <>
      <form className="-mt-8 p-3 bg-orange-400 rounded shadow-md grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 items-center gap-4">
        <div className="flex flex-row items-center flex-1 bg-white p-2">
          <MdTravelExplore size={25} className="mr-2" />
          <input
            type="text"
            placeholder="Where are you going?"
            className="text-md w-full focus:outline-none"
            value={destination}
            onChange={(e) => destination(e.target.value)}
          />
        </div>

        <div className="flex bg-white px-2 py-1 gap-2">
          <label className="items-center flex">
            Adults:
            <input
              type="number"
              className="w-full p-1 focus:outline-none font-bold"
              min={1}
              max={20}
              value={adultCount}
              onChange={(e) => adultCount(parseInt(e.target.value))}
            />
          </label>
        </div>

        <div className="flex bg-white px-2 py-1 gap-2">
          <label className="items-center flex">
            Children:
            <input
              type="number"
              className="w-full p-1 focus:outline-none font-bold"
              min={0}
              max={20}
              value={childCount}
              onChange={(e) => childCount(parseInt(e.target.value))}
            />
          </label>
        </div>

        <div className="flex bg-white px-2 py-1 gap-2">
          <DatePicker />
        </div>

        <div className="flex flex-row items-center flex-1 bg-white p-2">
          <input
            type="text"
            placeholder="Where are you going?"
            className="text-md w-full focus:outline-none"
            value={checkOut}
            onChange={(e) => checkOut(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default SearchBar;
