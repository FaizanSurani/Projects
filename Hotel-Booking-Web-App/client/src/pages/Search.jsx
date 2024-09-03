import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const Search = () => {
  const search = useContext(SearchContext);
  console.log(search);

  return <>Search page</>;
};

export default Search;
