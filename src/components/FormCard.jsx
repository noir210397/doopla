import React from "react";
// import image from "../images/Sale.jpg";
import Select from "./Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const FormCard = ({ text, desc, image, value, select }) => {
  return (
    <div className="h-[70vh] max-w-7xl rounded-xl mx-auto relative">
      <img
        src={image}
        alt=""
        className="object-cover w-full h-full rounded-xl"
      />
      <div className="bg-white absolute  bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:start-2 px-4 py-2 w-full md:max-w-sm max-w-lg rounded-lg">
        <form>
          <div className="mb-3">
            <p className="font-extrabold text-lg">{text}</p>
            <p>{desc}</p>
          </div>
          <label htmlFor="" className="my-1 font-semibold">
            Search
          </label>
          <div className={`${select ? "" : "mb-3"}`}>
            <input
              type="text"
              className="w-full rounded outline-none focus:outline-purple-700 outline border border-gray-500 px-4 py-2"
              placeholder="e.g Oxford or NW3"
            />
          </div>
          <div
            className={`grid grid-cols-2 gap-5 my-2 ${
              select ? "block" : "hidden"
            }`}
          >
            <Select desc="BedRooms" top="Any bed" value="bed" />
            <Select desc="Max Price" top="No Max" value={value} />
          </div>
          <div className={`${select ? "block" : "hidden"}`}>
            <label htmlFor="">Property type</label>
            <div className="grid grid-cols-2 gap-x-5">
              <p>
                <input
                  type="radio"
                  className="scale-125 mr-2"
                  name="select"
                  value={"all"}
                />{" "}
                Show All
              </p>
              <p>
                <input
                  type="radio"
                  className="scale-125 mr-2"
                  name="select"
                  value={"houses"}
                />{" "}
                Houses
              </p>
              <p>
                <input
                  type="radio"
                  className="scale-125 mr-2"
                  name="select"
                  value={"flats"}
                />{" "}
                Flats
              </p>
            </div>
          </div>
          <button className="bg-purple-600 py-2 px-4 rounded text-white text-lg  my-2 w-full">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2 " />
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormCard;
