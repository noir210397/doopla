import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./pages/Account";
import Saved from "./pages/Saved";
import Pay from "./pages/Pay";
import HousePrices from "./pages/HousePrices.jsx";
import AgentValuation from "./pages/AgentValuation.jsx";
import InstantValuation from "./pages/InstantValuation.jsx";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import Sale from "./pages/Sale";
import Rent from "./pages/Rent";
import Loading from "./components/Loading";
import Search from "./pages/Search";
import Error from "./pages/Error";
import SingleProperty from "./pages/SingleProperty";
import Firestore from "./pages/Firestore";
import NoProperties from "./pages/NoProperties";

function App() {
  const { isLoaded } = useContext(AuthContext);
  if (!isLoaded) return <Loading />;
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Error />} />
        <Route path="/not-found" element={<NoProperties />} />
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/pay" element={<Pay />}></Route>
        <Route path="/for-sale" element={<Sale />}></Route>
        <Route path="/for-rent" element={<Rent />}></Route>
        <Route path="/house-prices" element={<HousePrices />}></Route>
        <Route path="/agent-valuation" element={<AgentValuation />}></Route>
        <Route path="/instant-valuation" element={<InstantValuation />}></Route>
        <Route path="/search/:id" element={<Search />}></Route>
        <Route path="/error-page-not-found" element={<Error />}></Route>
        <Route path="/firestore" element={<Firestore />}></Route>
        <Route
          path="/search/single-property/:id"
          element={<SingleProperty />}
        ></Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<Account />} path="/account" />
          <Route element={<Saved />} path="/saved" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
