import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
// import SignIn from "../pages/SignIn";
import AuthContext from "../context/AuthContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? <Outlet /> : <Navigate to={"/sign-in"} />;
};

export default ProtectedRoute;
