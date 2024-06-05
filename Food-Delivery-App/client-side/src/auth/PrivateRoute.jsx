import React, { useEffect } from "react";
import { useUser } from "../components/UserContextReducer";
import { Navigate } from "react-router";

export default function PrivateRoute({ children }) {
  const { user, setUser } = useUser();

  const getUser = async () => {
    try {
      const res = await fetch("http://localhost:3001/getUser", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify({ token: localStorage.getItem("authToken") }),
      });

      if (res.data.success) {
        setUser(res.data.data);
      } else {
        <Navigate to="/sign-in" />;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  if (localStorage.getItem("authToken")) {
    return children;
  } else {
    return <Navigate to="/sign-in" />;
  }
}
