import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate, useParams } from "react-router";

export default function Cart() {
  const navigate = useNavigate();
  const { bookid } = useParams();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("authToken")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/cartItems", {
          headers,
        });
        setCart(res.data.data);
        console.log("Fetched cart items:", res.data.data);
      } catch (error) {
        console.error("Failed to fetch cart items", error);
      }
    };
    fetch();
  }, []);

  const deleteItem = async (bookid) => {
    const response = await axios.put(
      `http://localhost:5000/api/v1/removeItems/${bookid}`,
      {},
      { headers }
    );
    alert(response.data.message);
    setCart(response.data.data);
  };

  useEffect(() => {
    if (cart && cart.length > 0) {
      const total = cart.reduce((sum, item) => sum + item.price, 0);
      setTotal(total);
    }
  }, [cart]);

  const placeOrder = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/placeOrder",
        { order: cart },
        { headers }
      );
      alert(res.data.message);
      navigate("/profile/orderHistory");
    } catch (error) {
      console.log("Failed to place order:", error);
    }
  };

  return (
    <>
      <div className="bg-zinc-900 px-12 h-auto md:h-screen py-8">
        {!cart && (
          <div className="w-full flex justify-center items-center h-[100%]">
            <Loader />
          </div>
        )}
        {cart && cart.length === 0 && (
          <div className="h-screen">
            <div className="h-[100%] flex justify-center items-center flex-col">
              <h1 className="text-5xl lg:text-6xl font-semibold text-zinc-400">
                Empty Cart
              </h1>
            </div>
          </div>
        )}
        {cart && cart.length > 0 && (
          <>
            <h1 className="text-5xl text-center font-semibold text-zinc-500 mb-8">
              Your Cart
            </h1>
            {cart.map((items, i) => (
              <div
                key={i}
                className="w-full rounded p-4 my-4 flex flex-col md:flex-row bg-zinc-800 justify-between items-center">
                <img
                  src={items.url}
                  alt="/"
                  className="h-[20vh] md:h-[10vh] object-cover"
                />
                <div className="w-full md:w-auto">
                  <h1 className="text-2xl text-zinc-100 font-semibold text-start mt-2 md:mt-0">
                    {items.title}
                  </h1>
                  <p className="text-normal text-zinc-300 mt-2 hidden lg:block">
                    {items.description.slice(0, 100)}...
                  </p>
                  <p className="text-normal text-zinc-300 mt-2 hidden md:block lg:hidden">
                    {items.description.slice(0, 65)}...
                  </p>
                  <p className="text-normal text-zinc-300 mt-2 block md:hidden">
                    {items.description.slice(0, 100)}...
                  </p>
                </div>
                <div className="flex w-full md:w-auto mt-4 justify-between items-center">
                  <h2 className="text-zinc-100 text-3xl flex font-semibold">
                    &#x20B9; {items.price}
                  </h2>
                  <button
                    className="bg-red-100 text-red-700 border border-red-700 rounded p-2 ms-12"
                    onClick={() => deleteItem(items._id)}>
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4 flex w-full items-center justify-end">
              <div className="p-4 bg-zinc-800 rounded">
                <h1 className="text-3xl text-zinc-200 font-semibold">
                  Total Amount
                </h1>
                <div className="mt-3 flex justify-between items-center text-xl text-zinc-200">
                  <h2>{cart.length} books</h2>
                  <h2>&#x20B9;{total}</h2>
                </div>
                <div className="w-[100%] mt-3">
                  <button
                    className="bg-zinc-100 rounded px-4 py-2 flex justify-center w-full font-semibold hover:bg-zinc-200 transition duration-150 ease-in-out"
                    onClick={placeOrder}>
                    Place Your Order
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
