import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import AuthContext from "../context/AuthContext";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const SingleProperty = () => {
  const { id } = useParams();
  const { addProperty } = useContext(AuthContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const [property, setProperty] = useState({});
  const { searched } = useContext(AuthContext);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const recipientEmail = "recipient@example.com";
  const mailtoLink = `mailto:${recipientEmail}`;
  const phoneNumber = "123-456-7890";
  const telLink = `tel:${phoneNumber}`;
  const shareLink = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Share this link",
          url: window.location.href,
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      console.log("Web Share API not supported");
      // Fallback behavior for browsers that don't support Web Share API
      // You can show a modal or a tooltip with instructions on how to copy the link.
    }
  };
  //   const images = property.images;
  const noimage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgsxj0bCDD0I6uKota2Pma1doW0GyrEIFQYjGU4ZIvvA&s";
  const image = love();
  function love() {
    let value = [];
    if (images.length === 0) {
      let x = {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgsxj0bCDD0I6uKota2Pma1doW0GyrEIFQYjGU4ZIvvA&s",
      };
      value = [x];
    } else {
      images.forEach((item) => {
        if (item) {
          let x = { url: item };
          value.push(x);
        }
      });
    }
    return value;
  }
  const allImages = [image[image.length - 1], ...image, image[0]];
  const [slideNum, setSlideNum] = useState(1);
  const [trans, setTrans] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    let item = searched.find((item) => {
      return item.listing_id === id;
    });
    function removeHTMLTags(inputString) {
      const tagsToRemove = [
        /<p\s+class="top">/g,
        /<\/p>/g,
        /<br>/g,
        /<h3\s+class="listing-desc-header top">/g,
        /<\/h3>/g,
        /<strong>/g,
        /<\/strong>/g,
        /<\/b>/g,
        /<b>/g,
        /<i>/g,
        /<\/i>/g,
      ];

      let modifiedString = inputString;

      tagsToRemove.forEach((tag) => {
        modifiedString = modifiedString.replace(tag, "");
      });

      return modifiedString;
    }
    if (item) {
      setProperty(item);
      setImages(item.original_image);
      setIsLoaded(true);
      setDescription(removeHTMLTags(item.description));
    } else {
      navigate(`/error-page-not-found`);
    }
  }, []);

  const next = (e) => {
    e.stopPropagation();
    if (slideNum === allImages.length - 2) {
      setTrans(false);
      setSlideNum(allImages.length - 1);
      setTrans(true);
      setSlideNum(1);
      return;
    } else {
      setSlideNum((prev) => prev + 1);
    }
  };
  const prev = (e) => {
    e.stopPropagation();
    if (slideNum === 1) {
      setTrans(false);
      setSlideNum(0);
      setTrans(true);
      setSlideNum(allImages.length - 2);
      return;
    } else {
      setSlideNum((prev) => prev - 1);
    }
  };
  const goToPreviousPage = () => {
    navigate(-1); // This will navigate to the previous page in history.
  };

  if (!isLoaded) {
    return <Loading />;
  }
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto  px-3 py-3 ">
        <button
          onClick={goToPreviousPage}
          className="capitalize underline decoration-2 font-semibold "
        >
          <i className="fa-solid fa-chevron-left mr-1"></i>back to search
          results
        </button>
      </div>
      <div className="flex relative py-3 max-w-7xl mx-auto md:flex-row flex-col-reverse ">
        <div className="w-[300px]   px-2 ">
          <div className="min-h-[300px] w-full sticky top-4  p-2 rounded-md  flex justify-center items-center shadow-md shadow-gray-300 px-1">
            <div className="w-full text-amber-950 px-2 ">
              <div className="">
                <img
                  src={`${property.agent_logo ? property.agent_logo : ""}`}
                  alt=""
                  className="w-full h-9 rounded my-1 object-cover"
                />
              </div>
              <div className="py-1 font-semibold">
                {property.agent_name ? property.agent_name : ""}
              </div>
              <button className="w-full border-2 border-amber-800  mt-2 rounded">
                <Link to={telLink} className="block h-full w-full py-2">
                  <i className="fa-solid fa-phone mr-1"></i>Call Agent
                </Link>
              </button>
              <button className="w-full   mt-2 rounded bg-purple-600 text-white">
                <Link to={mailtoLink} className="block h-full w-full py-2">
                  <i className="fa-regular fa-envelope mr-1"></i>Email Agent
                </Link>
              </button>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <button
                  onClick={shareLink}
                  className="w-full border-2 border-amber-800 py-2 mt-2 rounded"
                >
                  <i className="fa-solid fa-share-nodes mr-1"></i>Share
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addProperty(listing_id);
                  }}
                  className="w-full border-2 border-amber-800 py-2 mt-2 rounded"
                >
                  <i className="fa-regular fa-heart mr-1"></i>Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 px-4 ">
          {/* carousel */}
          <div className="  relative overflow-hidden rounded-md mx-auto">
            <button
              onClick={prev}
              className={`text-3xl bg-black bg-opacity-30 p-2 rounded absolute top-1/2 -translate-y-1/2 z-30 ${
                allImages.length === 3 ? "hidden" : ""
              } text-white left-3`}
            >
              <i className="fa-solid fa-circle-chevron-left"></i>
            </button>
            <button
              onClick={next}
              className={`text-3xl bg-black bg-opacity-30 p-2 rounded absolute top-1/2 ${
                allImages.length === 3 ? "hidden" : ""
              } -translate-y-1/2 z-30 text-white right-3`}
            >
              <i className="fa-solid fa-circle-chevron-right"></i>
            </button>
            <div className="text-white text-sm md:text-base absolute z-30 bottom-2 right-3 bg-black bg-opacity-40 p-2 rounded">
              <i className="fa-solid fa-file-image pr-1"></i>
              <span>{`${slideNum}/${allImages.length - 2}`}</span>
            </div>
            {/* image container */}
            <div
              className={` relative flex h-[250px] md:h-[400px]  ${
                trans ? "transition-transform" : "transition-none"
              }`}
              style={{ transform: `translateX(-${slideNum * 100}%)` }}
            >
              {allImages.map((item, index) => {
                return (
                  <img
                    src={item.url}
                    alt={`${item.url}`}
                    key={item.url + index}
                    className={`h-full w-full object-cover flex-grow-0 flex-shrink-0`}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="font-extrabold text-gray-700 text-lg underline decoration-2 decoration-purple-500">
              Descriptions
            </h1>
            <div className=" py-1">
              {property.bullet ? `${property.bullet.join(" ")}.` : ""}
            </div>
            <div className="py-1">
              {/* {property.description ? `${property.description}` : ""} */}
              {description}
            </div>
            <div className="">
              <div>
                <h1 className="font-extrabold text-gray-700 text-lg underline decoration-2 decoration-purple-500">
                  Features
                </h1>
              </div>
              <div className="text-base md:text-base capitalize">
                {/* <i className="fa-solid fa-bath mx-1 text-gray-600"></i> */}
                {property.num_bathrooms > 0
                  ? `${property.num_bathrooms} bathroom${
                      property.num_bathrooms > 1 ? "s" : ""
                    }`
                  : ""}
              </div>
              <div className="text-base md:text-base capitalize">
                {/* <i className="fa-solid fa-bed mx-1 text-gray-600"></i> */}
                {property.num_bedrooms
                  ? `${property.num_bedrooms} bedroom${
                      property.num_bedrooms > 1 ? "s" : ""
                    }`
                  : ""}
              </div>
              <div className="text-base md:text-base capitalize">
                {/* <i className="fa-solid fa-couch text-gray-600 mx-1"></i> */}
                {property.num_recepts > 0
                  ? `${property.num_recepts} reception${
                      property.num_recepts > 1 ? "s" : ""
                    }`
                  : ""}
              </div>
              <div className="text-base md:text-base capitalize">
                {/* <i className="fa-solid fa-couch text-gray-600 mx-1"></i> */}
                {property.num_floors > 0
                  ? `${property.num_floors} floor${
                      property.num_floors > 1 ? "s" : ""
                    }`
                  : ""}
              </div>
              <div>
                <h1 className="font-extrabold text-gray-700 text-lg underline decoration-2 decoration-purple-500">
                  Address
                </h1>
                <div className="text-base md:text-base capitalize">
                  {/* <i className="fa-solid fa-couch text-gray-600 mx-1"></i> */}
                  {property.displayable_address
                    ? `${property.displayable_address} `
                    : ""}
                </div>
              </div>
              <div>
                <h1 className="font-extrabold text-gray-700 text-lg underline decoration-2 decoration-purple-500">
                  Availability & Listing Date
                </h1>
                <div className="text-base md:text-base capitalize">
                  {/* <i className="fa-solid fa-couch text-gray-600 mx-1"></i> */}
                  {property.listing_date
                    ? `Listed on ${property.listing_date.slice(0, 10)} `
                    : ""}
                </div>
                <div className="text-base md:text-base capitalize">
                  {/* <i className="fa-solid fa-couch text-gray-600 mx-1"></i> */}
                  {property.available_from_display
                    ? `${property.available_from_display} `
                    : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProperty;
