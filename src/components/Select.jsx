import React, { useState } from "react";

const bed = [
  "Studio+",
  "1+",
  "2+",
  "3+",
  "4+",
  "5+",
  "6+",
  "7+",
  "8+",
  "9+",
  "10+",
];
const maxSale = (text) => {
  let arr = [];
  let value;
  function rentOrSale() {
    if (text === "rent") {
      value = 100;
      return value;
    } else {
      value = 10000;
      return value;
    }
  }
  for (let i = 1; i < 25; i++) {
    arr.push(`£${i * rentOrSale()}`);
  }
  return arr;
};

const Select = ({ desc, top, value }) => {
  const [drawer, setDrawer] = useState(false);
  const [selected, setselected] = useState(top);
  //   useEffect(() => {
  //     const handleEvent = () => {
  //       if (drawer) {
  //         setDrawer(false);
  //       } else {
  //         return;
  //       }
  //     };
  //     document.addEventListener("click", handleEvent);
  //     return () => {
  //       document.removeEventListener("click", handleEvent);
  //     };
  //   }, [drawer]);
  return (
    <div>
      <label htmlFor="" className="font-semibold">
        {desc}
      </label>
      <div className="relative">
        <button
          onClick={() => {
            setDrawer(!drawer);
          }}
          className="border border-gray-300 rounded-md relative p-2 text-start w-full"
          type="button"
        >
          {selected}{" "}
          <i
            className={`fa-solid fa-angle-${
              drawer ? "up" : "down"
            } absolute end-2 top-1/2 -translate-y-1/2`}
          ></i>
        </button>
        <div
          onClick={() => {
            setDrawer(!drawer);
          }}
          className={`my-3 absolute z-50 w-full bg-gray-400 ${
            drawer ? "block" : "hidden"
          } h-40 overflow-y-scroll transition-all`}
        >
          <button
            type="button"
            onClick={() => {
              setselected(top);
            }}
            className="my-2 block w-full"
          >
            {top}
          </button>
          <div className={`${value === "bed" ? "block" : "hidden"} px-1`}>
            {bed.map((item) => {
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setselected(item);
                  }}
                  className="my-2 block w-full rounded"
                >
                  {item}
                </button>
              );
            })}
          </div>
          <div className={`${value === "bed" ? "hidden" : "block"} px-1`}>
            {maxSale(value).map((item) => {
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setselected(`${item}${value === "rent" ? " PCM" : " "}`);
                  }}
                  className="my-2 block w-full rounded"
                >
                  {`${item} ${value === "rent" ? "PCM" : ""}`}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
