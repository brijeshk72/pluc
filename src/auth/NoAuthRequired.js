import React from "react";
import { Navigate } from "react-router-dom";
import { isAuth } from "./isAuth";
const NoAuthRequired = ({ children }) => {
  const authed = isAuth();
  return authed !== true ? children : <Navigate to="/dashboard" replace />;
};

export default NoAuthRequired;
