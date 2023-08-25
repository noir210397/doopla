import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
// import image from "../images/images.png"

const DataCard = ({
  original_image: images,
  listing_status,
  status,
  price,
  rental_prices,
  value,
  num_bathrooms,
  num_bedrooms,
  num_recepts,
  title,
  property_number,
  description,
  listing_date,
  displayable_address,
  bullet,
  listing_id,
}) => {
  const noimage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgsxj0bCDD0I6uKota2Pma1doW0GyrEIFQYjGU4ZIvvA&s";
  const image = imageSorter();
  function imageSorter() {
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
  const { addProperty } = useContext(AuthContext);
  function date() {
    const arr = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return () => {
      let year = listing_date.slice(0, 4);
      let month = arr[listing_date.slice(5, 7).charAt(1) - 1];
      let date = listing_date.slice(8, 11);
      return `Listed on ${year} ${month} ${date}`;
    };
  }
  const listedDate = date();
  const allImages = [image[image.length - 1], ...image, image[0]];
  const [slideNum, setSlideNum] = useState(1);
  const [trans, setTrans] = useState(true);
  const navigate = useNavigate();
  const url = (url) => {
    navigate(`/search/single-property/${url}`);
    // console.log( imageSorter");
  };
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

  return (
    <div
      className="flex  data-card  mt-2 rounded-md border-2 flex-wrap border-purple-300 cursor-pointer "
      onClick={() => {
        url(listing_id);
      }}
    >
      <div className="flex-1 h-full relative overflow-hidden rounded-md    ">
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
        <div
          className={` relative flex image  ${
            trans ? "transition-transform" : "transition-none"
          }`}
          style={{ transform: `translateX(-${slideNum * 100}%)` }}
        >
          {allImages.length > 0
            ? allImages.map((img, index) => {
                return (
                  <img
                    src={img.url}
                    key={img.url + index}
                    className={`h-full w-full object-cover flex-grow-0 flex-shrink-0`}
                  />
                );
              })
            : ""}
        </div>
      </div>
      <div className="flex-1 rounded-md bg-white ">
        <div className="md:text-lg text-base relative px-2  ">
          <div className="flex flex-col py-2">
            <span className={`font-semibold `}>
              {`${rental_prices ? "" : `£${price.toLocaleString("en-US")}`}`}
            </span>
            <span className={`font-semibold`}>
              {`${
                rental_prices
                  ? `£${rental_prices.per_month.toLocaleString("en-US")} pcm`
                  : ""
              }`}
            </span>
            <span className={`font-semibold text-sm `}>
              {`${
                rental_prices
                  ? `£${rental_prices.per_week.toLocaleString("en-US")} pw`
                  : ""
              }`}
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addProperty(listing_id);
            }}
            className="text-sm md:text-base hover:underline decoration-2 decoration-purple-500 px-2 py-2 absolute top-0 right-0 rounded"
          >
            <i className="fa-regular fa-heart"></i> Save
          </button>
          <div className="">
            <span className="text-sm md:text-base">
              <i
                className={`fa-solid fa-bath mx-1 text-gray-600 ${
                  num_bathrooms < 1 ? "hidden" : ""
                }`}
              ></i>
              {num_bathrooms ? num_bathrooms : ""}
            </span>
            <span className="text-sm md:text-base">
              <i
                className={`fa-solid fa-bed mx-1 text-gray-600 ${
                  num_bedrooms < 1 ? "hidden" : ""
                }`}
              ></i>
              {num_bedrooms ? num_bedrooms : ""}
            </span>
            <span className="text-sm md:text-base">
              <i
                className={`fa-solid fa-couch text-gray-600 mx-1 ${
                  num_recepts < 1 ? "hidden" : ""
                }`}
              ></i>
              {num_recepts ? num_recepts : ""}
            </span>
          </div>
          <div className="text-gray-700 font-semibold">
            {title ? title : ""}
          </div>
          <div className="text-sm md:text-base">
            {displayable_address ? displayable_address : ""}
          </div>
          <div className="text-sm md:text-base">{listedDate()}</div>
          <div className="text-sm line-clamp-2 py-1">
            {bullet.length > 0 ? bullet.join(" ") : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
