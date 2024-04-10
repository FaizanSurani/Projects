import React from "react";
import { useCart, useDispatchCart } from "../components/ContextReducer";
import { FaTrashAlt } from "react-icons/fa";

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div className="m-5 w-auto text-center text-xl">The Cart is Empty!!</div>
    );
  }
  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <>
      <div class="container mx-auto mt-5 overflow-x-auto overflow-y-hidden">
        <table class="table-auto w-full cursor-pointer mb-2">
          <thead class="text-green-500 text-xl border-b border-gray-200">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button type="button" className="p-0 ">
                    <FaTrashAlt
                      onClick={() => dispatch({ type: "REMOVE", index: index })}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="text-md">Total Price: {totalPrice} /-</h1>
        </div>
        <div>
          <button className="px-3 py-2 bg-green-500 hover:bg-green-600 rounded transition duration-150 ease-in-out">
            Check Out
          </button>
        </div>
      </div>
    </>
  );
}
