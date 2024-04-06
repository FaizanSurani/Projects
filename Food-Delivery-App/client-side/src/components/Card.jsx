import React from "react";

export default function Card(props) {
  let priceOptions = [];
  if (props.options) {
    priceOptions = Object.keys(props.options);
  }

  const handleCart = () => {};

  return (
    <div>
      <div className="w-72 max-h-[360px] bg-gray-900 border-2 border-gray-700 shadow-lg rounded-lg overflow-hidden my-8 text-white">
        <img
          className="w-full h-48 object-cover"
          src={props.imgSrc}
          alt="Card Image"
        />
        <div className="p-6">
          <h5 className="text-xl font-semibold ">{props.foodName}</h5>
          <div className="w-full container">
            <select className="m-2 h-full bg-green-400 text-black rounded">
              {Array.from({ length: 6 }, (_, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-full bg-green-400 text-black rounded">
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="text-lg font-bold inline-block h-full">
              Total Price
            </div>
          </div>
          <hr />
          <button
            className="text-black bg-green-500  hover:bg-green-600 rounded-md px-3 py-2 text-sm font-medium mt-3 uppercase transition duration-150 ease-in-out"
            onClick={handleCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
