import React from "react";
import { Link } from "react-router-dom";

const Links = ({ value, location, solid }) => {
  return (
    <Link
      className={`${
        solid ? "underline" : "hover:underline"
      } p-2 decoration-purple-500 decoration-1`}
      to={location}
    >
      {value}
    </Link>
  );
};

export default Links;
