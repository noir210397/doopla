import { useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import AuthContext from "../context/AuthContext";
import DataCard from "../components/DataCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Saved = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [savedProperties, setSavedProperties] = useState([]);
  const { userId } = useContext(AuthContext);
  useEffect(() => {
    const fetchSavedProperties = async () => {
      const snapShot = await getDoc(doc(db, "saved", userId));
      try {
        if (snapShot.exists()) {
          const data = snapShot.data();
          const properties = data.arrayField;
          setSavedProperties(properties);
          setIsLoaded(true);
        } else {
          setIsLoaded(true);
          return;
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchSavedProperties();
  }, []);
  if (!isLoaded) {
    return <Loading />;
  }
  return (
    <div>
      <NavBar />
      <div>
        <div className="mx-auto max-w-3xl  px-2 ">
          {savedProperties.length > 0
            ? savedProperties.map((item) => {
                return <DataCard key={item.listing_id} {...item} />;
              })
            : ""}
        </div>
        <div
          className={`min-h-screen flex justify-center items-center ${
            savedProperties.length > 0 ? "hidden" : "block"
          }`}
        >
          <div className="p-2 text-xl">
            No Properties Saved{" "}
            <Link
              to={`/`}
              className=" decoration-2 underline decoration-purple-500"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Saved;
