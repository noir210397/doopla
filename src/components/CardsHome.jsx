import React from "react";
import { Link } from "react-router-dom";
import image from "../images/A013C019_220527_R2GW_01_00_24_08_Graded_1611951_cropped_1500__2_.png";

const CardsHome = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto my-3 md:my-12">
        <div className="flex-1 px-2 py-6">
          <h1 className="text-2xl font-extrabold py-1 px-1 mb-4">
            What's happening with house prices?
          </h1>
          <p className="text-lg py-1 px-1 my-4">
            Find out if house prices are rising or falling and what will happen
            in the housing market in the coming months.
          </p>
          <p className="text-lg py-1 px-1 my-4">
            Research expert Richard Donnell reveals 3 key housing trends in May
            2023.
          </p>
          <Link className="py-2 px-2 mt-4 border-2 rounded border-purple-500 text-lg ml-1">
            Register to stay up to date
          </Link>
        </div>
        <div className="flex-1 px-1 md:px-0">
          <iframe
            // width="560"
            // height="315"
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/4jnzf1yj48M"
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto my-3 md:my-12 bg-[#e6fafa] rounded-lg">
        <div className="flex-1 px-2 py-6 relative flex  ">
          <div className="align-middle h-full">
            <h1 className="text-2xl font-extrabold py-1 px-1 mb-4">
              Value your home
            </h1>
            {/* <p className="text-lg py-1 px-1 my-4">
            Find out if house prices are rising or falling and what will happen
            in the housing market in the coming months.
          </p> */}
            <p className="text-lg py-1 px-1 my-4">
              Get an instant online valuation to see what it's worth.
            </p>
            <Link className="py-2 px-2 mt-4 border-2 rounded border-purple-500 text-lg ml-1">
              Get Instant Valuation
            </Link>
          </div>
        </div>
        <div className="flex-1 md:h-56 h-28 px-1 md:px-0">
          <img
            src={image}
            alt=""
            className="rounded object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CardsHome;
