import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector((store) => {
    return store.isLoggedIn;
  });

    { isLoggedIn ? <Outlet /> : <Navigate to="/adminlogin" /> }
}
