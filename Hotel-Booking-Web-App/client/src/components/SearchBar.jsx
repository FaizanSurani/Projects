import React, { useState, useContext } from "react";
import { MdTravelExplore } from "react-icons/md";
import { SearchContext } from "../context/SearchContext";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const SearchBar = () => {
  const search = useContext(SearchContext);
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState({
    destination: search.destination,
    checkIn: search.checkIn,
    checkOut: search.checkOut,
    adultCount: search.adultCount,
    childCount: search.childCount,
  });

  const handleChange = (key, value) => {
    setSearchValue((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search;

    navigate("/search");
  };

  const { destination, checkIn, checkOut, adultCount, childCount } =
    searchValue;

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  return (
    <>
      <form className="-mt-8 p-3 bg-orange-400 rounded shadow-md grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center gap-4">
        <div className="flex flex-row items-center flex-1 bg-white p-2">
          <MdTravelExplore size={25} className="mr-2" />
          <input
            type="text"
            placeholder="Where are you going?"
            className="text-md focus:outline-none"
            value={destination}
            onChange={(e) => handleChange("destination", e.target.value)}
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
              onChange={(e) =>
                handleChange("adultCount", parseInt(e.target.value))
              }
            />
          </label>
          <label className="items-center flex">
            Children:
            <input
              type="number"
              className="w-full p-1 focus:outline-none font-bold"
              min={0}
              max={20}
              value={childCount}
              onChange={(e) =>
                handleChange("childCount", parseInt(e.target.value))
              }
            />
          </label>
        </div>

        <div className="flex bg-white px-2 py-1 gap-2">
          <DatePicker
            selected={checkIn}
            onChange={(date) => handleChange("checkIn", date)}
            selectsStart
            startDate={checkIn}
            endDate={checkOut}
            minDate={minDate}
            maxDate={maxDate}
            placeholderText="Check-in Date"
            className="min-w-full bg-white p-1 focus:outline-none"
          />
        </div>

        <div className="flex bg-white px-2 py-1 gap-2">
          <DatePicker
            selected={checkOut}
            onChange={(date) => handleChange("checkOut", date)}
            selectsEnd
            startDate={checkIn}
            endDate={checkOut}
            minDate={minDate}
            maxDate={maxDate}
            placeholderText="Check-out Date"
            className="min-w-full bg-white p-1 focus:outline-none"
            wrapperClassName="min-w-full"
          />
        </div>
        <div className="flex gap-1">
          <button className="w-2/3 bg-blue-600 text-white h-full p-2 font-bold text-lg hover:bg-blue-500 rounded">
            Search
          </button>
          <button className="w-1/3 bg-red-600 text-white h-full p-2 font-bold text-lg hover:bg-red-500 rounded">
            Clear
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
