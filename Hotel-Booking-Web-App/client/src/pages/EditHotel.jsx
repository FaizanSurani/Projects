import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { hotelTypes } from "../components/HotelTypes";
import { facilites } from "../components/Facilities";
import axios from "axios";
import { useNavigate } from "react-router";

const EditHotel = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    country: "",
    description: "",
    price: "",
    rating: "",
    type: "",
    facilities: [],
    adult: "",
    child: "",
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
    adult,
    child,
    images,
  } = formData;

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("authToken")}`,
  };

  const navigate = useNavigate();

  useEffect(() => {
    const getHotel = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/getHotel/${id}`,
          { headers }
        );
        const data = response.data;
        console.log(data);

        setFormData({
          name: data.hotelName,
          city: data.hotelCity,
          country: data.hotelCountry,
          description: data.hotelDescription,
          price: data.pricePerNight,
          rating: data.rating,
          type: data.hotelType,
          facilities: data.facilities || [],
          adult: data.adultCount,
          child: data.childCount,
          images: data.imageURL || [],
        });
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    getHotel();
  }, [id]);

  const handleChange = (e) => {
    const { name, type, value } = e.target;
    if (type === "checkbox") {
      const checkedFacilites = facilities.includes(value)
        ? facilities.filter((facility) => facility !== value)
        : [...facilities, value];
      setFormData({ ...formData, facilities: checkedFacilites });
    } else if (type === "radio") {
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
    try {
      const formDataJson = new FormData();

      formDataJson.append("hotelName", formData.name);
      formDataJson.append("hotelCity", formData.city);
      formDataJson.append("hotelCountry", formData.country);
      formDataJson.append("hotelDescription", formData.description);
      formDataJson.append("hotelType", formData.type);
      formDataJson.append("pricePerNight", formData.price.toString());
      formDataJson.append("rating", formData.rating.toString());
      formDataJson.append("adultCount", formData.adult.toString());
      formDataJson.append("childCount", formData.child.toString());

      facilities.forEach((facility) =>
        formDataJson.append("facilities[]", facility)
      );
      Array.from(images).forEach((image) =>
        formDataJson.append("imageFiles", image)
      );
      const response = await axios.put(
        `http://localhost:5000/api/v1/updateHotel/${id}`,
        formDataJson,
        { headers }
      );
      alert(response.data.message);
      navigate("/my-hotels");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <>
      <div className="min-h-screen px-12 py-8 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-blue-500 w-full md:w-3/6 lg:h-2/6 rounded-lg px-8 py-5">
          <h1 className="text-xl text-white">Edit Hotel</h1>
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
              onChange={handleChange}
              className="border rounded w-full p-2 bg-blue-200 font-normal mt-2">
              <option value="" className="text-sm font-semibold">
                Select an Rating
              </option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <label htmlFor="type">Hotel Type</label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white gap-2 mt-2">
              {hotelTypes.map((types) => (
                <label
                  key={types}
                  className={`cursor-pointer bg-blue-300 text-sm rounded-full px-4 py-2 font-semibold 
                  ${
                    types === type
                      ? "bg-blue-700 text-white"
                      : "bg-blue-300 text-black"
                  }`}>
                  <input
                    type="radio"
                    name="type"
                    className="hidden"
                    checked={types === type}
                    value={types}
                    onChange={handleChange}
                  />
                  <span>{types}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="type">Facilities</label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white gap-2 mt-2">
              {facilites.map((facility) => (
                <label
                  key={facility}
                  htmlFor={facility}
                  className="text-sm font-semibold">
                  <input
                    type="checkbox"
                    id={facility} // Add an `id` to the checkbox
                    value={facility}
                    checked={facilities.includes(facility)}
                    onChange={handleChange}
                  />
                  {facility}
                </label>
              ))}
            </div>
          </div>
          <div className="mt-4 bg-blue-400 rounded p-2">
            <label htmlFor="">Guests</label>
            <div className="flex justify-around text-black gap-2">
              <div>
                <label htmlFor="city" className="text-white">
                  Adult
                </label>
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
                <label htmlFor="guests" className="text-white">
                  Child
                </label>
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
              {images && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {images.map((image) => (
                    <div className="relative group">
                      <img
                        src={image}
                        alt="..."
                        className="min-h-full object-cover"
                      />
                      <button className="absolute inset-0 flex text-white justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <input
                type="file"
                multiple
                name="imageFiles"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full text-white font-normal"
              />
            </div>
          </div>
          <div className="mt-4">
            <button className="text-white w-full px-7 py-3 rounded bg-red-500 hover:bg-red-600 uppercase transition duration-150 ease-in-out">
              Update hotel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditHotel;
