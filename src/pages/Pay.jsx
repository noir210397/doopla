import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Pay = () => {
  const { isLoaded } = useContext(AuthContext);
  return isLoaded ? <div>Pay</div> : <div>loading</div>;
};

export default Pay;
