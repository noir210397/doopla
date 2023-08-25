import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <NavBar />
      <div
        className={`
        min-h-[60vh] flex justify-center items-center text-xl`}
      >
        <span className="text xl">
          Page Not Found{` `}
          <Link
            to={`/`}
            className="text-xl underline decoration-2 decoration-purple-400"
          >
            Back to Home Page
          </Link>{" "}
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
