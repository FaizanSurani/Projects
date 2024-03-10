import React from "react";

export default function Card() {
  return (
    <div>
      <div className="w-72 max-h-[360px] bg-white border-2 border-gray-700 shadow-lg rounded-lg overflow-hidden my-8">
        <img className="w-full h-48 object-cover" src="..." alt="Card Image" />
        <div className="p-6">
          <h5 className="text-xl font-semibold text-gray-800">
            Title of the Card
          </h5>
          <p className="mt-2 text-gray-600">Description of the card.</p>
          <div className="w-full">
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
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
