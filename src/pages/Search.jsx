import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import DataCard from "../components/DataCard";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";

const Search = () => {
  const { searched, searchTerm } = useContext(AuthContext);
  const [properties, setProperties] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [more, setMore] = useState(false);
  const [paginate, setPaginate] = useState(0);
  const [full, setFull] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  function arrayOfPropertiesDisplayed(x) {
    let limit = x + 10;
    return () => {
      let arr = [];
      searched.forEach((item, index) => {
        if (index < limit) {
          arr.push(item);
        } else {
          return;
        }
      });
      sessionStorage.setItem("properties", JSON.stringify(arr));
      setPaginate(arr.length);
      return arr;
    };
  }
  useEffect(() => {
    let firstTwoLetters = id.slice(0, 2);
    let items = JSON.parse(sessionStorage.getItem("properties"));
    if (
      firstTwoLetters === "re" ||
      firstTwoLetters === "sa" ||
      firstTwoLetters === "ho"
    ) {
      if (searched.length > 1) {
        if (items) {
          setProperties(items);
          setIsLoaded(true);
        } else {
          let houses = arrayOfPropertiesDisplayed(0);
          setPaginate(10);
          setProperties(houses());
          setIsLoaded(true);
        }
      } else {
        navigate("/error-page-not-found");
      }
    } else {
      navigate("/error-page-not-found");
    }
  }, []);
  if (!isLoaded) {
    return <Loading />;
  }
  return (
    <div className="">
      <NavBar />
      <div className="mx-auto max-w-3xl  px-2 ">
        {properties.length > 0
          ? properties.map((item) => {
              return (
                <DataCard key={item.listing_id} {...item} value={searchTerm} />
              );
            })
          : ""}
      </div>
      <div
        className={`${
          searched.length < 1 ? "" : "hidden"
        } min-h-[60vh] flex justify-center items-center text-xl`}
      >
        <span className="text xl">
          No Properties Found{` `}
          <Link
            to={`/`}
            className="text-xl underline decoration-2 decoration-purple-400"
          >
            Back to Home Page
          </Link>{" "}
        </span>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            setMore(true);
            let size = searched.length;
            if (size <= paginate) {
              setMore(false);
              setFull(true);
            } else {
              let loaded = arrayOfPropertiesDisplayed(paginate);
              setProperties(loaded());
              setMore(false);
            }
          }}
          className={`p-2 bg-purple-400 text-white text-lg rounded my-2 ${
            full ? "hidden" : ""
          } ${searched.length < 1 ? "hidden" : ""}`}
        >
          <i
            className={`fa-solid fa-circle-arrow-down mr-1 ${
              more ? "animate-bounce" : ""
            }`}
          ></i>
          Load More
        </button>
        <div className={`text-xl ${full ? "" : "hidden"} my-3`}>
          No More Properties{` `}
          <Link
            to={`/`}
            className="underline decoration-2 decoration-purple-400"
          >
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Search;
