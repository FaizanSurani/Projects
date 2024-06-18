import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

export default function Favourites() {
  const [fav, setFav] = useState([]);
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("authToken")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/v1/getFavouriteBooks",
        { headers }
      );
      setFav(res.data.data);
    };
    fetch();
  }, [fav]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fav &&
          fav.map((items, i) => (
            <div key={i}>
              <BookCard data={items} favourite={true} />
            </div>
          ))}
      </div>
      {fav.length === 0 && (
        <div className="w-full text-5xl font-semibold h-[50%] text-zinc-500 flex justify-center items-center">
          No Favourite Books
        </div>
      )}
    </>
  );
}
