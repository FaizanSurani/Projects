import React from "react";

const PriceFilters = ({ selectedPrice, onChange }) => {
  return (
    <>
      <div>
        <h4 className="text-md font-semibold mb-2">Max Price</h4>
        <select
          value={selectedPrice}
          onChange={(e) =>
            onChange(e.target.value) ? parseInt(e.target.value) : undefined
          }>
          <option value="">Select Max Price</option>
          {[50, 100, 200, 300, 500].map((price) => (
            <option value={price}>{price}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default PriceFilters;
