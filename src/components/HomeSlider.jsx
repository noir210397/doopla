import React from "react";
import { Link } from "react-router-dom";

const HomeSlider = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-0">
      <h1 className="text-2xl font-extrabold py-2">
        Looking for facts, figures or property advice?
      </h1>
      <p className="text-lg py-1">Just ask Zoopla.</p>
      <div>
        <div className=" overflow-hidden grid md:grid-cols-2 lg:grid-cols-3 justify-center grid-flow-row md:gap-6 gap-3 px-2">
          {data.map((item) => {
            return (
              <div className="max-w-md md:w-full pb-2  " key={item.header}>
                <div className="h-56  ">
                  <img
                    src={item.img}
                    alt={item.header}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <Link>
                  <h2 className="py-1 font-semibold text-lg hover:underline decoration-purple-700 decoration-2">
                    {item.header}
                  </h2>
                </Link>

                <p>{item.date}</p>
                <p className="text-sm line-clamp-2 ">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
