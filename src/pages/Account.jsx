import { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Account = () => {
  const [drawer, setDrawer] = useState(false);
  const { userEmail, logOut } = useContext(AuthContext);
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && drawer) {
        setDrawer(false);
      }
    };

    const handleBodyScroll = () => {
      if (drawer) {
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
  }, [drawer]);

  return (
    <div className="font-lora">
      <div
        className={` absolute inset-0 bg-black bg-opacity-20  ${
          drawer ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div
          onClick={() => {
            setDrawer(!drawer);
          }}
          className={`absolute inset-y-0 end-0 md:start-3/4 bg-white z-50  shadow-md start-0 shadow-black p-2`}
        >
          <div className=" flex justify-between items-center py-2">
            <p className="font-extrabold text-xl">Account settings</p>
            <button
              onClick={() => {
                setDrawer(!drawer);
              }}
              className=" hover:border-2 hover:border-pink-300 rounded px-3 py-1"
            >
              <i className="fa-solid fa-x"></i>
            </button>
          </div>
          <p className="text-lg py-2">{userEmail}</p>
          <ul className="md:mt-6 mt-3">
            <li className="capitalize py-3 hover:underline hover:decoration-purple-600 decoration-2 cursor-pointer">
              <i className="fa-solid fa-pen md:mr-2 mr-2"></i>change my password
            </li>
            <li className="capitalize py-3 hover:underline hover:decoration-purple-600 decoration-2 cursor-pointer">
              <i className="fa-solid fa-pen md:mr-2 mr-2"></i>change email
              address
            </li>
            <li
              onClick={logOut}
              className="capitalize py-3 hover:underline hover:decoration-purple-600 decoration-2 cursor-pointer"
            >
              <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>sign
              out
            </li>
          </ul>
        </div>
      </div>

      <NavBar />
      <div className="h-[25vh] bg-purple-300 flex ">
        <div className="flex-1 flex  h-full px-4 items-center">
          <h1 className="text-2xl md:text-4xl font-extrabold ">
            Welcome back to your account
          </h1>
        </div>
      </div>
      <div className="md:p-8 p-2 flex justify-between ">
        <ul className="flex text-sm md:text-base">
          <Link className="mr-1 md:mr-4">
            <li>
              <i className="fa-regular fa-heart me-1"></i>Saved
            </li>
          </Link>
          <Link>
            <li>
              <i className="fa-solid fa-magnifying-glass me-1"></i>Searches and
              Alerts
            </li>
          </Link>
        </ul>
        <button
          onClick={() => {
            setDrawer(!drawer);
          }}
          className="p-1 md:p-3 border-2 border-purple-500 rounded-md  md:text-base"
        >
          <i className="fa-solid fa-gear md:me-1 "></i>
          <span className="hidden md:inline">Settings</span>
        </button>
      </div>
      <div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
