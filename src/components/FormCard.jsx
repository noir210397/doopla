import React, { useContext, useState } from "react";
// import image from "../images/Sale.jpg";
import Select from "./Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const FormCard = ({ text, desc, image, value, select }) => {
  const { setSearched, setSearchTerm } = useContext(AuthContext);
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [errTerm, setErrTerm] = useState(false);

  const navigate = useNavigate();
  const searching = () => {
    // e.preventDefault();
    function generateRandomLetters(length) {
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      let randomLetters = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        const randomChar = alphabet.charAt(randomIndex);
        randomLetters += randomChar;
      }

      return randomLetters;
    }
    const randomLetters = generateRandomLetters(45);
    async function fetchData() {
      const url = `https://zoopla.p.rapidapi.com/properties/list?area=${searchValue}&category=residential&listing_status=${value}&order_by=age&ordering=descending&page_number=1&page_size=80`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "97701e4eb5msh98aadf632f4312fp118d30jsndd272c266d02",
          "X-RapidAPI-Host": "zoopla.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setIsSearching(!isSearching);
        setSearched(result.listing);
        setSearchTerm(value);
        sessionStorage.setItem(
          "search",
          JSON.stringify([value, result.listing])
        );
        sessionStorage.removeItem("properties");
        navigate(`/search/${value}?-${randomLetters}`);
      } catch (error) {
        setIsSearching(!isSearching);
        navigate("/search");
      }
    }
    fetchData();
  };
  const searchValidation = (e) => {
    e.preventDefault();
    setIsSearching(true);
    function matchesUKArea(input) {
      const regex =
        /(?:[A-Za-z]+\b(?:[- ](?:upon|the)?\b[A-Za-z]+)*)|(?:[A-Za-z]{1,2}\d[A-Za-z\d]?\s\d[A-Za-z]{2})|(?:[A-Za-z]{1,2}\d[A-Za-z]?)|(?:[A-Za-z]{2}\d[A-Za-z]{2})$/;
      return regex.test(input);
    }
    const valid = matchesUKArea(searchValue);
    if (valid) {
      searching();
      setErrTerm("");
    } else {
      setErrTerm("please enter a valid uk area or postal code e.g Oxford NW3");
      setIsSearching(false);
    }
  };
  return (
    <div className="h-[70vh] max-w-7xl rounded-xl mx-auto relative">
      <img
        src={image}
        alt=""
        className="object-cover w-full h-full rounded-xl"
      />
      <div className="bg-white absolute  bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:start-2 px-4 py-2 w-full md:max-w-sm max-w-lg rounded-lg">
        <form onSubmit={searchValidation}>
          <div className="mb-3">
            <p className="font-extrabold text-lg">{text}</p>
            <p>{desc}</p>
          </div>
          <label htmlFor="" className="my-1 font-semibold">
            Search
          </label>
          <span
            className={`text-red-600 block capitalize   ${
              errTerm ? "" : "hidden"
            }`}
          >
            {errTerm}
          </span>
          <div className={`${select ? "" : "mb-3"}`}>
            <input
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              value={searchValue}
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
          <div className={`${select ? "" : "hidden"}`}>
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
          <button
            disabled={isSearching}
            className="bg-purple-600 py-2 px-4 rounded text-white text-lg  my-2 w-full"
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={`mr-2 ${isSearching ? "hidden" : ""}`}
            />
            <i
              className={`fa-solid fa-circle-notch animate-spin mr-2 ${
                isSearching ? "" : "hidden"
              }`}
            ></i>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormCard;
