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

  const handleCheckout = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch("http://localhost:5001/orderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });

    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };

  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <>
      <div className="container mx-auto mt-5 overflow-x-auto overflow-y-hidden">
        <table className="table-auto w-full cursor-pointer mb-2">
          <thead className="text-green-500 text-lg border-b border-gray-200">
            <tr>
              <th scope="col" className="text-left p-2">
                #
              </th>
              <th className="text-left p-2" scope="col">
                Name
              </th>
              <th className="text-left p-2" scope="col">
                Quantity
              </th>
              <th className="text-left p-2" scope="col">
                Option
              </th>
              <th className="text-left p-2" scope="col">
                Amount
              </th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope="row" className="p-2 text-left">
                  {index + 1}
                </th>
                <td className="p-2">{food.name}</td>
                <td className="p-2">{food.qty}</td>
                <td className="p-2">{food.size}</td>
                <td className="p-2">{food.price}</td>
                <td>
                  <button type="button" className="p-0">
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
          <h1 className="text-lg font-medium mb-5 p-2">
            Total Price: {totalPrice} /-
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="px-3 py-2 bg-green-500 hover:bg-green-600 rounded transition duration-150 ease-in-out"
            onClick={handleCheckout}>
            Check Out
          </button>
        </div>
      </div>
    </>
  );
}
