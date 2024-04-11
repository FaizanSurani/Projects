import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();

  let priceOptions = [];
  if (props.options) {
    priceOptions = Object.keys(props.options);
  }

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleCart = async () => {
    let food = [];

    //Matching id of item present in cart with the id of item present in databse
    for (const item of data) {
      if (item.id === props.foodItems._id) {
        food = item;
        break;
      }
    }

    if (food != []) {
      // if the size of order is same then update it, else Add new item with updated size
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.foodItems._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: props.foodItems._id,
          name: props.foodItems.name,
          price: finalPrice,
          qty: qty,
          size: size,
        });
        return;
      }
    }
    await dispatch({
      type: "ADD",
      id: props.foodItems._id,
      name: props.foodItems.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
  };

  let finalPrice = qty * parseInt(props.options[size]);

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div>
      <div className="w-72 max-h-[360px] bg-gray-900 border-2 border-gray-700 shadow-lg rounded-lg overflow-hidden my-8 text-white">
        <img
          className="w-full h-48 object-cover"
          src={props.foodItems.img}
          alt="Card Image"
        />
        <div className="p-6">
          <h5 className="text-xl font-semibold ">{props.foodItems.name}</h5>
          <div className="w-full container">
            <select
              className="m-2 h-full bg-green-400 text-black rounded"
              onChange={(e) => setQty(e.target.value)}>
              {Array.from({ length: 6 }, (_, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="m-2 h-full bg-green-400 text-black rounded"
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}>
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="text-lg font-bold inline-block h-full">
              Rs. {finalPrice}/-
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
