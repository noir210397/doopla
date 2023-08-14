import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="text-purple-700 font-pacifico font-bold text-xl md:text-2xl lg:text-3xl">
        ZOOPLA
      </div>
    </Link>
  );
};

export default Logo;
