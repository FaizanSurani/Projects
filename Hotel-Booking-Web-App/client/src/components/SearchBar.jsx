import React, { useState, useContext } from "react";
import { MdTravelExplore } from "react-icons/md";
import { SearchContext } from "../context/SearchContext";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const SearchBar = () => {
  const {
    destination,
    checkIn,
    checkOut,
    adultCount,
    childCount,
    saveSearchValues,
  } = useContext(SearchContext);
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState({
    destinationValues: destination,
    checkInValues: checkIn,
    checkOutValues: checkOut,
    adultCountValues: adultCount,
    childCountValues: childCount,
  });

  const handleChange = (key, value) => {
    setSearchValue((prevState) => ({
      ...prevState,
      [`${key}Values`]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    saveSearchValues(
      searchValue.destinationValues,
      searchValue.checkInValues,
      searchValue.checkOutValues,
      searchValue.adultCountValues,
      searchValue.childCountValues
    );

    const queryParams = new URLSearchParams();
    queryParams.append("destination", destinationValues);
    queryParams.append("checkIn", checkInValues.toISOString());
    queryParams.append("checkOut", checkOutValues.toISOString());
    queryParams.append("adultCount", adultCountValues);
    queryParams.append("childCount", childCountValues);

    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/searchHotel?${queryParams}`
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching hotel data:", error);
      alert("Error fetching hotel data");
    }

    navigate("/search");
  };

  const {
    destinationValues,
    checkInValues,
    checkOutValues,
    adultCountValues,
    childCountValues,
  } = searchValue;

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
            className="w-full text-md focus:outline-none"
            value={destinationValues}
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
              value={adultCountValues}
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
              value={childCountValues}
              onChange={(e) =>
                handleChange("childCount", parseInt(e.target.value))
              }
            />
          </label>
        </div>

        <div className="flex bg-white px-2 py-1 gap-2">
          <DatePicker
            selected={checkInValues}
            onChange={(date) => handleChange("checkIn", date)}
            selectsStart
            startDate={checkInValues}
            endDate={checkOutValues}
            minDate={minDate}
            maxDate={maxDate}
            placeholderText="Check-in Date"
            className="w-full bg-white p-1 focus:outline-none"
          />
        </div>

        <div className="flex bg-white px-2 py-1 gap-2">
          <DatePicker
            selected={checkOutValues}
            onChange={(date) => handleChange("checkOut", date)}
            selectsEnd
            startDate={checkInValues}
            endDate={checkOutValues}
            minDate={minDate}
            maxDate={maxDate}
            placeholderText="Check-out Date"
            className="w-full bg-white p-1 focus:outline-none"
            wrapperClassName="min-w-full"
          />
        </div>
        <div className="flex gap-1">
          <button
            onClick={handleSubmit}
            className="w-2/3 bg-blue-600 text-white h-full p-2 font-bold text-lg hover:bg-blue-500 rounded">
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
