import {
  faBars,
  faCircleUser,
  faHeart,
  faHouseChimney,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
// import AuthContext from "../context/AuthContext";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const rest = () => {
    setActive(!active);
  };
  const { isLoggedIn } = useContext(AuthContext);
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && active) {
        setActive(false);
      }
    };

    const handleBodyScroll = () => {
      if (active) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    handleBodyScroll();

    document.addEventListener("keydown", handleEscapeKey);
    window.addEventListener("resize", handleBodyScroll);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      window.removeEventListener("resize", handleBodyScroll);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <div>
      <header className="flex justify-between items-center p-1 py-3 md:px-3">
        <button
          onClick={rest}
          className="md:hidden hover:border-2 hover:border-pink-300 rounded px-1 py-1"
        >
          <p className="text-center text-xs m-0 p-0 flex flex-col">
            <FontAwesomeIcon icon={faBars} className="text-3xl" />
            Menu
          </p>
        </button>
        <Link to={"/"}>
          <div className="text-purple-700 font-pacifico font-bold text-xl md:text-2xl lg:text-3xl">
            ZOOPLA
          </div>
        </Link>
        <div
          onClick={rest}
          className={`absolute inset-0 z-50 bg-black bg-opacity-20 ${
            active ? "translate-x-0" : "-translate-x-full"
          } transition-all pt-10 ps-4 md:ps-0 md:pt-0 md:transform-none md:bg-transparent md:relative md:block lg:relative `}
        >
          <ul
            onClick={rest}
            className={`absolute flex flex-col inset-y-0 start-0 end-1/3 bg-purple-200 z-50  transition-all pt-10 ps-4 md:ps-0 md:pt-0 md:transform-none md:bg-transparent md:relative md:block lg:relative`}
          >
            <button
              onClick={rest}
              className="md:hidden absolute end-1 top-1 hover:border-2 hover:border-pink-300 rounded px-3 py-1 text-3xl"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <Link to={"/for-sale"}>
              <li className="inline-block px-2  hover:underline hover:underline-purple-700 decoration-2 my-4 md:my-0">
                For sale
              </li>
            </Link>
            <Link to={"/for-rent"}>
              <li className="inline-block px-2  hover:underline hover:underline-purple-700 decoration-2 my-4 md:my-0">
                To rent
              </li>
            </Link>
            <Link to={"/house-prices"}>
              <li className="inline-block px-2  hover:underline hover:underline-purple-700 decoration-2 my-4 md:my-0">
                House Prices
              </li>
            </Link>
            <Link to={"/agent-valuation"}>
              <li className="inline-block px-2  hover:underline hover:underline-purple-700 decoration-2 my-4 md:my-0">
                Agent Valuation
              </li>
            </Link>
            <Link to={"/instant-valuation"}>
              <li className="inline-block px-2  hover:underline hover:underline-purple-700 decoration-2 my-4 md:my-0">
                Instant Valuation
              </li>
            </Link>
            <Link
              className={`${isLoggedIn ? "block md:hidden" : "hidden"}`}
              to={"/account"}
            >
              <li className="inline-block px-2  hover:underline hover:underline-purple-700 decoration-2 my-4 md:my-0 text-xl">
                Account
              </li>
            </Link>
          </ul>
        </div>

        <ul className="text-sm md:text-base ">
          <li className="inline-block md:px-2 mr-1  hover:underline hover:underline-purple-700 decoration-2 text-xs md:text-base">
            <div className="flex flex-col">
              <FontAwesomeIcon
                icon={faHouseChimney}
                className="text-slate-600 md:hidden lg:hidden"
              />
              <Link className="text-xs md:text-base" to={"/"}>
                My Home
              </Link>
            </div>
          </li>

          <li
            className={`inline-block md:px-2 mr-1
            } hover:underline hover:underline-purple-700 decoration-2 md:text-base`}
          >
            <div className="flex flex-col">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-slate-600 md:hidden lg:hidden"
              />
              <Link className="text-xs md:text-base" to={"/saved"}>
                Saved
              </Link>
            </div>
          </li>

          <li className="inline-block relative md:px-2 mr-1  hover:underline hover:underline-purple-700 decoration-2 md:text-base">
            <div className={`flex flex-col ${isLoggedIn ? "hidden" : "block"}`}>
              <FontAwesomeIcon
                icon={faCircleUser}
                className="text-slate-600 md:hidden lg:hidden"
              />
              <Link className="text-xs md:text-base" to={"/sign-in"}>
                Sign in
              </Link>
            </div>
            <Link
              className={`${isLoggedIn ? "hidden md:block" : "hidden"}`}
              to={"/account"}
            >
              Account
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default NavBar;
