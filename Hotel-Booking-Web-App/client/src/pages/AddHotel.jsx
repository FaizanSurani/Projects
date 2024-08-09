import React, { useState } from "react";
import { hotelTypes } from "../components/HotelTypes";
import { facilites } from "../components/Facilities";
import axios from "axios";

const AddHotel = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    country: "",
    description: "",
    price: "",
    rating: "",
    type: "",
    facilities: [],
    guests: {
      adult: "",
      child: "",
    },
    images: [],
  });

  const {
    name,
    city,
    country,
    description,
    price,
    rating,
    type,
    facilities,
    guests: { adult, child },
    images,
  } = formData;

  const handleChange = (e) => {
    const { name, type, value } = e.target;

    if (name === "adult" || name === "child") {
      setFormData((prevState) => ({
        ...prevState,
        guests: {
          ...prevState.guests,
          [name.split(",")[1]]: value,
        },
      }));
    } else if (name === "checkbox") {
      const checkedFacilites = facilities.includes(value)
        ? facilities.filter((facility) => facility !== value)
        : [...facilities, value];
      setFormData({ ...formData, facilities: checkedFacilites });
    } else if (name === "radio") {
      setFormData({ ...formData, type: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await axios.post("");
  };

  return (
    <>
      <div className="min-h-screen px-12 py-8 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-blue-500 w-full md:w-3/6 lg:h-2/6 rounded-lg px-8 py-5">
          <h1 className="text-xl text-white">Add Hotel</h1>
          <div className="mt-4">
            <label>Hotel Name</label>
            <input
              type="text"
              value={name}
              className="w-full mt-2 p-2 outline-none bg-blue-200 rounded"
              required
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-4 mt-4">
            <div>
              <label htmlFor="city">Hotel City</label>
              <input
                type="text"
                value={city}
                name="city"
                className="w-full mt-2 p-2 outline-none bg-blue-200 rounded"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="country">Hotel Country</label>
              <input
                type="text"
                name="country"
                value={country}
                className="w-full mt-2 p-2 outline-none bg-blue-200 rounded"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="">Hotel Description</label>
            <textarea
              rows={5}
              name="description"
              value={description}
              className="w-full mt-2 p-2 outline-none bg-blue-200 rounded"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="price">Price Per Night</label>
            <input
              type="number"
              value={price}
              name="price"
              className="w-full mt-2 p-2 outline-none bg-blue-200 rounded"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="rating">Select an Rating</label>
            <select
              name="rating"
              value={rating}
              className="border rounded w-full p-2 bg-blue-200 font-normal mt-2">
              <option value="" className="text-sm font-semibold">
                Select an Rating
              </option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <label htmlFor="type">Hotel Type</label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white gap-2 mt-2">
              {hotelTypes.map((types) => (
                <label
                  htmlFor="radio"
                  className="cursor-pointer bg-blue-300 text-sm rounded-full px-4 py-2 font-semibold active:bg-blue-500">
                  <input
                    type="radio"
                    name="type"
                    checked={types === type}
                    value={type}
                  />
                  <span>{types}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="type">Facilities</label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white gap-1 mt-2">
              {facilites.map((facility) => (
                <label
                  key={facility}
                  htmlFor="checkbox"
                  className="flex text-sm gap-2 font-bold ">
                  <input type="checkbox" value={facility} />
                  {facility}
                </label>
              ))}
            </div>
          </div>
          <div className="mt-4 bg-blue-400 rounded p-2">
            <label htmlFor="">Guests</label>
            <div className="flex justify-around text-white">
              <div>
                <label htmlFor="city">Adult</label>
                <input
                  type="text"
                  value={adult}
                  name="adult"
                  className="w-full mb-2 p-2 outline-none bg-blue-200 rounded"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="guests">Child</label>
                <input
                  type="text"
                  value={child}
                  name="child"
                  className="w-full mb-2 p-2 outline-none bg-blue-200 rounded"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="price">Images</label>
            <div className="border rounded p-4 flex flex-col gap-4 mt-2">
              <input
                type="file"
                multiple
                accept="image/*"
                value={images}
                className="w-full text-white font-normal"
              />
            </div>
          </div>
          <div className="mt-4">
            <button className="text-white w-full px-7 py-3 rounded bg-red-500 hover:bg-red-600 uppercase transition duration-150 ease-in-out">
              Add hotel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddHotel;
