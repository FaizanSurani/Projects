import React from "react";
import { facilites } from "./Facilities";

const FacilitiesFilter = ({ selectedFacilites, onChange }) => {
  return (
    <>
      <div className="border-b border-slate-300 pb-5">
        <h4 className="text-md font-semibold mb-2">Facilities</h4>
        {facilites.map((facility) => (
          <label key={facility} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="rounded"
              value={facility}
              checked={selectedFacilites.includes(facility)}
              onChange={onChange}
            />
            <span>{facility}</span>
          </label>
        ))}
      </div>
    </>
  );
};

export default FacilitiesFilter;
