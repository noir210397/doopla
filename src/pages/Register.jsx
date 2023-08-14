import React, { useContext } from "react";
import Logo from "../components/Logo";
import Form from "../components/Form";
import { Link, Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Register = () => {
  const { isLoaded, isLoggedIn } = useContext(AuthContext);
  if (!isLoaded) return <div></div>;
  else if (isLoaded && isLoggedIn) return <Navigate to={"/account"} />;
  return (
    <div className="md:max-w-md w-9/12 min-h-screen pt-10 pb-6  mx-auto px-3 font-lora absolute start-1/2  -translate-x-1/2 ">
      <Logo />
      <p className="text-4xl font-semibold py-3">
        Register to save properties and much more
      </p>
      <p>
        Already registered? {""}
        <Link
          className="underline decoration-purple-400 hover:decoration-2 capitalize"
          to={"/sign-in"}
        >
          sign in
        </Link>
      </p>
      <Form value="continue" text="register" />
    </div>
  );
};

export default Register;
