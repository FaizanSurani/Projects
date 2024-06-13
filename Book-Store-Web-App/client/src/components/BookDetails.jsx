import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "./Loader";
import { GrLanguage } from "react-icons/gr";
import axios from "axios";

export default function BookDetails() {
  const { id } = useParams();
  console.log(id);
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
        <div className="px-12 py-8 bg-zinc-900 flex gap-8">
          <div className="bg-zinc-800 rounded p-4 h-[88vh] w-3/6 flex justify-center items-center">
            <img className="h-[70vh]" src={bookDetails.url} alt="/" />
          </div>
          <div className="p-4 w-3/6">
            <h1 className="text-4xl text-zinc-300 font-semibold">
              {bookDetails.title}
            </h1>
            <p className="text-zinc-400 mt-1">{bookDetails.author}</p>
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
