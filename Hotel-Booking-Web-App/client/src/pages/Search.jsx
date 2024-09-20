import React, { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { useQuery } from "@tanstack/react-query";
import SearchResultCard from "../components/SearchResultCard";
import axios from "axios";

const Search = () => {
  const search = useContext(SearchContext);
  const [page, setPage] = useState(1);

  const searchParams = {
    destination: search?.destination || "",
    checkIn: search?.checkIn || "",
    checkOut: search?.checkOut || "",
    adultCount: search.adultCount?.toString() || "1",
    childCount: search.childCount?.toString() || "0",
    page: page.toString(),
  };

  const fetchHotels = async (searchParams) => {
    try {
      const queryParams = new URLSearchParams(searchParams).toString();
      const response = await axios.get(
        `http://localhost:5000/api/v1/searchHotel?${queryParams}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching hotels:", error);
      throw error;
    }
  };

  const { data } = useQuery({
    queryKey: ["hotels", searchParams],
    queryFn: () => fetchHotels(searchParams),
  });

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[225px_1fr] gap-5 min-h-screen">
        <div className="rounded-lg border border-slate-300 p-5 h-fit sticky top-10">
          <div className="space-y-5">
            <h3 className="text-lg font-semibold border-b border-slate-300 pb-5">
              Filter By:
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold pt-3">
              {data?.pagination.total} Hotels Found
              {search.destination ? ` in ${search.destination}` : ""}
            </span>
          </div>
          {data?.data.map((hotel) => (
            <SearchResultCard hotel={hotel} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
