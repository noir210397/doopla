import React, { useState } from "react";
import image from "../images/Homepage-hero-image-new-homes.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Container = () => {
  const [buttonValue, setButtonValue] = useState("sale");
  // const search = (x) => {
  //   if (x === "rent") {
  //     setButtonValue("rent");
  //   } else if (x === "sale") {
  //     setButtonValue("sale");
  //   } else {
  //     setButtonValue("house");
  //   }
  // };
  return (
    <div className=" relative">
      <div className="md:h-[70vh] h-[60vh] relative">
        <img src={image} alt="" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <div className="max-w-4xl w-full mx-auto bottom-0 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2  rounded-t-xl rounded-r-xl md:rounded-none absolute   md:bg-transparent bg-white z-20">
        <div className="  md:text-center ">
          <h1 className="text-2xl md:text-4xl font-extrabold  md:text-white md:px-2 md:pb-4 md:pt-2 px-2">
            We know what a <span className="font-pacifico">home</span> is{" "}
            <span className="font-pacifico">really </span>
            worth
          </h1>
          <p className="md:text-white md:px-2 md:py-2 px-2 text-lg">
            Find homes to buy or rent and check house prices
          </p>
          <div className="bg-white max-w-2xl mx-auto py-2 rounded-lg">
            <div>
              <div className="border-b border-gray-600 text-center">
                <button
                  onClick={() => {
                    setButtonValue("sale");
                  }}
                  className={`border-b-2 ${
                    buttonValue === "sale"
                      ? "border-purple-700"
                      : "border-white"
                  }  px-3 py-1 mr-2 hover:bg-black hover:bg-opacity-20`}
                >
                  For sale
                </button>
                <button
                  onClick={() => {
                    setButtonValue("rent");
                  }}
                  className={`border-b-2 ${
                    buttonValue === "rent"
                      ? "border-purple-700"
                      : "border-white"
                  }  px-3 py-1 mr-2 hover:bg-black hover:bg-opacity-20`}
                >
                  To rent
                </button>
                <button
                  onClick={() => {
                    setButtonValue("house");
                  }}
                  className={`border-b-2 ${
                    buttonValue === "house"
                      ? "border-purple-700"
                      : "border-white"
                  }  px-3 py-1 hover:bg-black hover:bg-opacity-20`}
                >
                  House Prices
                </button>
              </div>

              <div className="">
                <form action="" className="text-start max-w-2xl mx-auto">
                  <label htmlFor="" className="p-2">
                    Enter a city, town or postcode
                  </label>
                  <div className="flex flex-col md:flex-row px-2 mt-2">
                    <div className="md:flex-1 ">
                      <input
                        type="text"
                        placeholder="e.g Oxford or NW3"
                        className="border border-gray-400 w-full h-full py-2 px-4 rounded outline-none focus:outline-purple-700 outline "
                      />
                    </div>
                    {/* <div className=" bg-blue-600 w-max"> */}
                    <button className="bg-purple-600 py-2 px-4 rounded text-white text-lg md:mx-2 mt-4 md:my-0">
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="mr-2 "
                      />
                      Search
                    </button>
                    {/* </div> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
