// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const sale = [
  "New homes",
  "Commercial properties for sale",
  "Overseas",
  "Find estate agents",
  "Travel time search",
];
const rent = ["Commercial properties to rent", "Find letting agents"];
const news = [
  "Shared Ownership",
  "Buying guides",
  "Selling guides",
  "Renting guides",
  "Improving guides",
];
const business = ["List with Zoopla", "ZooplaPro", "Alto Software"];

const Footer = () => {
  return (
    <div className="bg-[#f7f6f5] pb-5">
      <div className="grid md:grid-cols-4 max-w-7xl mx-auto py-3 grid-flow-row md:px-0 px-2">
        <div>
          <h3 className="capitalize text-lg text-[#8b2744] py-3">for sale</h3>
          <ul>
            {sale.map((item) => {
              return (
                <li
                  className="py-3 hover:underline hover:decoration-purple-600 decoration-2"
                  key={item}
                >
                  {item}
                </li>
              );
            })}
          </ul>
          <hr className="bg-gray-400 md:hidden" />
        </div>

        <div>
          <h3 className="capitalize text-lg text-[#8b2744] py-3">for rent</h3>
          <ul>
            {rent.map((item) => {
              return (
                <li
                  className="py-3 hover:underline hover:decoration-purple-600 decoration-2"
                  key={item}
                >
                  {item}
                </li>
              );
            })}
          </ul>
          <hr className="bg-gray-400 md:hidden" />
        </div>

        <div>
          <h3 className="capitalize text-lg text-[#8b2744] py-3">
            News and guides
          </h3>
          <ul>
            {news.map((item) => {
              return (
                <li
                  className="py-3 hover:underline hover:decoration-purple-600 decoration-2"
                  key={item}
                >
                  {item}
                </li>
              );
            })}
          </ul>
          <hr className="bg-gray-400 md:hidden" />
        </div>

        <div>
          <h3 className="capitalize text-lg text-[#8b2744] py-3">
            Zoopla for business
          </h3>
          <ul>
            {business.map((item) => {
              return (
                <li
                  className="py-3 hover:underline hover:decoration-purple-600 decoration-2"
                  key={item}
                >
                  {item}
                </li>
              );
            })}
          </ul>
          <hr className="bg-gray-400 md:hidden" />
        </div>
      </div>
      <hr className="bg-gray-400 hidden md:block" />
      <div className="flex flex-col md:flex-row md:justify-between align-middle p-2 md:p-4">
        <div>
          <p className="md:text-lg text-base text-[#8b2744]">
            <i className="fa-regular fa-copyright"></i>2023 Zoopla Limited. All
            rights reserved
          </p>
        </div>
        <div className="my-3 md:my-0">
          <i className="fa-brands fa-facebook text-xl md:mx-3 text-[#8b2744]"></i>
          <i className="fa-brands fa-twitter text-xl mx-3 text-[#8b2744]"></i>
          <i className="fa-brands fa-linkedin text-xl mx-3 text-[#8b2744]"></i>
          <i className="fa-brands fa-instagram text-xl mx-3 text-[#8b2744]"></i>
          <i className="fa-brands fa-youtube text-xl mx-3 text-[#8b2744]"></i>
          <i className="fa-brands fa-pinterest text-xl mx-3 text-[#8b2744]"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
