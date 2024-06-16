import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "./Loader";
import { GrLanguage } from "react-icons/gr";
import axios from "axios";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "./AuthContext";

export default function BookDetails() {
  const { id } = useParams();
  const { isLoggedIn } = useContext(AuthContext);
  const { role } = useContext(AuthContext);
  const [bookDetails, setBookDetails] = useState("");

  useEffect(() => {
    const bookdetails = async () => {
      const resp = await axios.get(`http://localhost:5000/api/v1/bookid/${id}`);
      setBookDetails(resp.data.data);
    };
    bookdetails();
  }, []);

  return (
    <>
      {bookDetails && (
        <div className="px-4 md:px-12 py-8 bg-zinc-900 flex lg:flex-row flex-col gap-8 items-start">
          <div className="lg:w-3/6 w-full">
            <div className="lg:flex-row flex-col bg-zinc-800 rounded p-12 flex justify-around">
              <img
                className="lg:h-[60vh] h-[50vh] rounded"
                src={bookDetails.url}
                alt="/"
              />
              {isLoggedIn === true && (
                <div className="flex flex-row lg:flex-col items-center justify-between lg:justify-start lg:mt-0 :mt-8">
                  <button className="bg-white rounded-full text-3xl p-3 text-red-500">
                    <FaHeart />
                  </button>
                  <button className="bg-white rounded lg:rounded-full text-4xl lg:text-3xl p-3 mt-0 lg:mt-8 text-blue-500 flex items-center justify-center">
                    <FaShoppingCart />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="p-4 lg:w-3/6 w-full">
            <h1 className="text-4xl text-zinc-300 font-semibold">
              {bookDetails.title}
            </h1>
            <p className="text-zinc-400 mt-1">by {bookDetails.author}</p>
            <p className="text-zinc-500 mt-4 text-xl">
              {bookDetails.description}
            </p>
            <p className="flex mt-4 items-center justify-start text-zinc-400">
              <GrLanguage className="me-3" /> {bookDetails.language}
            </p>
            <p className="mt-4 text-zinc-100 text-3xl font-semibold">
              Price : &#x20B9; {bookDetails.price}
            </p>
          </div>
        </div>
      )}
      {!bookDetails && (
        <div className="h-screen bg-zinc-900 flex items-center justify-center">
          <Loader />
        </div>
      )}
    </>
  );
}
