import React, { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { useQuery } from "@tanstack/react-query";

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

  const { data } = useQuery({
    queryKey: ["hotels", searchParams],
    queryFn: () => hotelSchema(searchParams),
  });

  return (
    <>
      <h1>Search Results</h1>
    </>
  );
};

export default Search;
