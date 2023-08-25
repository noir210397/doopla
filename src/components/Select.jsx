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
const maxRentOrSaleCalculation = (text) => {
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
  return (
    <div>
      <label htmlFor="" className="font-semibold">
        {desc}
      </label>

      <div className={`${value === "bed" ? "" : "hidden"}  `}>
        <select name="" id="" className="w-full h-full py-2 px-1 rounded">
          <option>{top}</option>
          {bed.map((item) => {
            return <option key={item}>{item}</option>;
          })}
        </select>
      </div>
      <div className={`${value === "bed" ? "hidden" : ""}  `}>
        <select name="" id="" className="w-full h-full py-2 px-1 rounded">
          <option value="">{top}</option>
          {maxRentOrSaleCalculation(value).map((item) => {
            return (
              <option key={item}>
                {item + `${value === "rent" ? " PCM" : ""}`}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Select;
