import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ data }) {
  return (
    <>
      <Link to={`/view-book-details/${data._id}`}>
        <div className="bg-zinc-800 rounded p-4 flex flex-col">
          <div className="bg-zinc-900 rounded flex items-center justify-center">
            <img src={data.url} alt="/" className="h-[25vh]" />
          </div>
          <h2 className="mt-4 text-xl text-white font-semibold">
            {data.title}
          </h2>
          <p className="mt-2 font-semibold text-zinc-400">by. {data.author}</p>
          <p className="mt-2 font-semibold text-zinc-200 text-xl">
            &#x20B9; {data.price}
          </p>
        </div>
      </Link>
    </>
  );
}
