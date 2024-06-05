import React, { createContext, useContext, useState } from "react";

const UserContextReducer = createContext();
const UserUpdateContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ isAuthenticated: false, role: "user" });

  const updateUser = (newUserData) => {
    setUser((prevUser) => ({ ...prevUser, ...newUserData }));
  };

  return (
    <UserContextReducer.Provider value={user}>
      <UserUpdateContext.Provider value={updateUser}>
        {children}
      </UserUpdateContext.Provider>
    </UserContextReducer.Provider>
  );
};

export const useUser = () => useContext(UserContextReducer);
export const updateUser = () => useContext(UserUpdateContext);
