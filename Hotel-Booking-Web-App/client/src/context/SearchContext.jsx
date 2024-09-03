import { createContext, useReducer } from "react";

const initialState = {
  destination: "",
  checkIn: null,
  checkOut: null,
  adultCount: 1,
  childCount: 0,
};

const SearchContext = createContext(initialState);

const searchReducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH_VALUES":
      return {
        ...state,
        destination: action.payload.destination,
        checkIn: action.payload.checkIn,
        checkOut: action.payload.checkOut,
        adultCount: action.payload.adultCount,
        childCount: action.payload.childCount,
      };
    default:
      return state;
  }
};

const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  const saveSearchValues = (
    destination,
    checkIn,
    checkOut,
    adultCount,
    childCount
  ) => {
    dispatch({
      type: "SET_SEARCH_VALUES",
      payload: destination,
      checkIn,
      checkOut,
      adultCount,
      childCount,
    });
  };
  return (
    <SearchContext.Provider value={{ ...state, saveSearchValues }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchContextProvider };
