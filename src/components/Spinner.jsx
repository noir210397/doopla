import spinner from "../images/spinner/icons8-load-48.png";

const Spinner = ({ value }) => {
  return (
    <img
      src={spinner}
      alt=""
      className={`${
        value ? `h-[${value}px] w-[${value}px]` : "w-16 h-16 md:h-24 md:w-24"
      } animate-spin`}
    />
  );
};

export default Spinner;
