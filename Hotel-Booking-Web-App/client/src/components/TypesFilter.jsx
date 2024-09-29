import React from "react";
import { hotelTypes } from "./HotelTypes";

const TypesFilter = ({ selectedTypes, onChange }) => {
  return (
    <>
      <div className="border-b border-slate-300 pb-5">
        <h4 className="text-md font-semibold mb-2">Hotel Types</h4>
        {hotelTypes.map((types) => (
          <label key={types} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="rounded"
              value={types}
              checked={selectedTypes.includes(types)}
              onChange={onChange}
            />
            <span>{types}</span>
          </label>
        ))}
      </div>
    </>
  );
};

export default TypesFilter;
