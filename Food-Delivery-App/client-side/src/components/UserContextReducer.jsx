import React, { createContext, useContext, useState } from "react";

const UserContextReducer = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContextReducer.Provider value={user}>
      {children}
    </UserContextReducer.Provider>
  );
};

export const useUser = () => useContext(UserContextReducer);
