import React from "react";

const AddHotel = () => {
  const handleChange = (e) => {};
  const handleSubmit = (e) => {};
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
              className="w-full mt-2 p-2 outline-none bg-blue-200 rounded"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="price">Price Per Night</label>
            <input
              type="number"
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
              className="border rounded w-full p-2 bg-blue-200 font-normal">
              <option value="" className="text-sm font-semibold">
                Select an Rating
              </option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <label htmlFor="">Hotel Type</label>
            <input
              type="text"
              name="type"
              className="w-full mt-2 p-2 outline-none bg-blue-200 rounded"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <button className=" text-white w-full px-7 py-3 rounded bg-red-500 hover:bg-red-600 uppercase transition duration-150 ease-in-out">
              Add hotel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddHotel;
