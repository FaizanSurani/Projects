import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import { Link } from "react-router-dom";

export default function OrderHistory() {
  const [orders, setOrders] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("authToken")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://localhost:5000/api/v1/orderHistory", {
        headers,
      });
      setOrders(res.data.data);
    };
    fetch();
  }, [orders]);

  return (
    <>
      {!orders && (
        <div className="flex justify-center items-center h-[100%]">
          <Loader />
        </div>
      )}
      {orders && orders.length === 0 && (
        <div className="h-[80vh] p-4 text-zinc-100">
          <div className="h-[100%] flex flex-col items-center justify-center">
            <h1 className="text-5xl font-semibold text-zinc-500 mb-8">
              No Order History
            </h1>
          </div>
        </div>
      )}
      {orders && orders.length > 0 && (
        <div className="h-[100%] p-0 md:p-4 text-zinc-100">
          <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
            Your Order History
          </h1>
          <div className="mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2">
            <div className="w-[3%]">
              <h1 className="text-center">Sr.</h1>
            </div>

            <div className="w-[22%]">
              <h1>Books</h1>
            </div>

            <div className="w-[45%]">
              <h1>Description</h1>
            </div>

            <div className="w-[9%]">
              <h1>Price</h1>
            </div>

            <div className="w-[16%]">
              <h1>Status</h1>
            </div>

            <div className="w-none md:w-[5%] hidden md:block">
              <h1>Mode</h1>
            </div>
          </div>
          {orders.map((items, i) => {
            <div className="bg-zinc-800 w-full rounded py-2 px-4 gap-4 flex hover:bg-zinc-900 hover:cursor-pointer transition duration-150 ease-in-out">
              <div className="w-[3%]">
                <h1 className="text-center">{i + 1}</h1>
              </div>
              <div className="w-[22%]">
                <Link
                  to={`/view-book-details/:${items.book._id}`}
                  className="hover:text-blue-300">
                  {items.book.title}
                </Link>
              </div>
              <div className="w-[45%]">
                <h1>{items.book.description.slice(0, 50)} ...</h1>
              </div>
              <div className="w-[9%]">
                <h1> &x2089; {items.book.price}</h1>
              </div>
              <div className="w-[16%]">
                <h1 className="font-semibold text-green-500">
                  {items.status === "Order Placed" ? (
                    <div className="text-yellow-500">{items.status}</div>
                  ) : items.status === "Cancelled" ? (
                    <div className="text-red-500">{items.status}</div>
                  ) : (
                    items.status
                  )}
                </h1>
              </div>
              <div className="w-none md:w-[5%] hidden md:block">
                <h1 className="text-sm text-zinc-400">COD</h1>
              </div>
            </div>;
          })}
        </div>
      )}
    </>
  );
}
