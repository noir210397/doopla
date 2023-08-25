import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Form = ({ value, text }) => {
  const [visibility, setVisibility] = useState(false);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [buttonColor, setButtonColor] = useState("");
  // const [email, setEmail] = useState(false);
  // const [password, setPassword] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /[a-z0-9A-Z]{6,30}/;
  const { createUser, signIn, googleSignIn } = useContext(AuthContext);

  // console.log(emailRegex.test("teez") === false);
  const EmailChange = (e) => {
    if (text === "sign in") {
      setLoginEmail(e.target.value);
    } else {
      setRegisterEmail(e.target.value);
    }
  };
  const PasswordChange = (e) => {
    if (text === "sign in") {
      setLoginPassword(e.target.value);
    } else {
      setRegisterPassword(e.target.value);
    }
  };
  const emailValidation = () => {
    if (text === "sign in") {
      if (loginEmail === "") {
        setEmailError("fill out email field");
        return false;
      } else if (!emailRegex.test(loginEmail)) {
        setEmailError("invalid email");
        return false;
      } else {
        setEmailError("");
        return true;
      }
    } else {
      if (registerEmail === "") {
        setEmailError("fill out email field");
        return false;
      } else if (!emailRegex.test(registerEmail)) {
        setEmailError("invalid email");
        return false;
      } else {
        setEmailError("");
        return true;
      }
    }
  };
  const passwordValidation = () => {
    if (text === "sign in") {
      if (loginPassword === "") {
        setPasswordError("fill out password field");
        return false;
      } else if (!passwordRegex.test(loginPassword)) {
        setPasswordError("password should be at least 6 characters");
        return false;
      } else {
        setPasswordError("");
        return true;
      }
    } else {
      if (registerPassword === "") {
        setPasswordError("fill out password field");
        return false;
      } else if (!passwordRegex.test(registerPassword)) {
        setPasswordError("password should be at least 6 characters");
        return false;
      } else {
        setPasswordError("");
        return true;
      }
    }
  };
  const LoginUser = (e) => {
    e.preventDefault();
    const emailIsValid = emailValidation();
    const passwordIsValid = passwordValidation();

    if (emailIsValid && passwordIsValid) {
      signIn(loginEmail, loginPassword).then((result) => {
        if (result === "auth/wrong-password") {
          setPasswordError("Wrong Password!");
        } else if (result === "auth/user-not-found") {
          setEmailError("User email address not registered");
        }
      });
    }
  };
  const RegisterUser = (e) => {
    e.preventDefault();
    const emailIsValid = emailValidation();
    const passwordIsValid = passwordValidation();
    if (emailIsValid && passwordIsValid) {
      let errcode;
      createUser(registerEmail, registerPassword).then((result) => {
        errcode = result;
        if (errcode === "auth/email-already-in-use") {
          setEmailError("email already in use");
        }
      });
    } else {
      return;
    }
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 py-3">
        <button
          onClick={googleSignIn}
          type="button"
          className="border-2 border-rose-950 text-rose-950 hover:text-white hover:bg-rose-950 hover:border-white py-3 rounded-lg"
        >
          <i className="fa-brands fa-google"></i> Google
        </button>
        <button
          type="button"
          className="border-2 border-rose-950 text-rose-950 hover:text-white hover:bg-rose-950 hover:border-white py-3 rounded-lg"
        >
          <i className="fa-brands fa-facebook"></i> Facebook
        </button>
      </div>
      <p className="relative text-center">
        <span className="bg-white px-1">or {value} with your email</span>
        <span className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full border-b-2 -z-10 border-gray-500"></span>
        <span className="absolute top-1/2 right-0 transform -translate-y-1/2 w-full border-b-2 -z-10 border-gray-500"></span>
        {/* <span className="block h-[2px] bg-gray-500 flex-1"></span>
        <span className="bg-white px-1">or {value} with your email</span>
        <span className="block h-[2px] bg-gray-500 flex-1"></span> */}
      </p>
      <form
        className="mt-6"
        onSubmit={(e) => {
          text === "sign in" ? LoginUser(e) : RegisterUser(e);
        }}
      >
        <label htmlFor="" className="capitalize font-semibold">
          email address
        </label>
        <div>
          <input
            type="text"
            placeholder="Email Address.."
            value={text === "sign in" ? loginEmail : registerEmail}
            className="border border-black w-full p-2 rounded my-2 focus:outline-none focus:outline-2 focus:outline-purple-700"
            onChange={(e) => {
              EmailChange(e);
            }}
          />
        </div>
        <p className="text-red-600">{emailError}</p>
        <label htmlFor="" className="capitalize font-semibold">
          {text === "register" ? "create " : ""}password
        </label>
        <div className="relative">
          <input
            type={`${visibility ? "text" : "password"}`}
            placeholder="Password"
            value={text === "sign in" ? loginPassword : registerPassword}
            className="border border-black w-full p-2 rounded my-2 focus:outline-none focus:outline-2 focus:outline-purple-700"
            onChange={(e) => {
              PasswordChange(e);
            }}
          />
          <span
            className={`absolute top-1/2 -translate-y-1/2 end-1 ${
              visibility ? "text-gray-500" : "text-black"
            }`}
            onClick={() => {
              setVisibility(!visibility);
            }}
          >
            <i className="fa-solid fa-eye"></i>
          </span>
        </div>
        <p className="text-red-600">{passwordError}</p>
        <Link
          className={`underline decoration-purple-500 hover:decoration-2 ${
            text === "sign in" ? "" : "hidden"
          }`}
        >
          Forgot Password?
        </Link>
        <div className={`flex ${text === "sign in" ? "" : "hidden"}`}>
          <div className=" relative w-6  me-2">
            <input
              type="checkbox"
              className="h-6 w-full absolute top-1/2 -translate-y-1/2 "
            />
          </div>

          <div className={`${text === "sign in" ? "" : "hidden"}`}>
            <p className="md:text-lg text-base">keep me signed in for 7 days</p>
            <p className="text-gray-500 font-semibold text-sm md:text-base">
              If you're using a public device, please skip.
            </p>
          </div>
        </div>
        {/* display in register page only */}
        <div className={`${text === "register" ? "" : "hidden"}`}>
          <p className="text-sm mb-10">
            Passwords must be at least 8 characters long and contain uppercase
            and lowercase letters, a number and a symbol.
          </p>
          <p className="font-extrabold py-2">Email preferences</p>
          <p className="mb-12">
            I want to hear about the latest property news, advice and new home
            developments from Zoopla and its selected partners only.
          </p>
          <div className="grid grid-cols-2 gap-2 py-3">
            <button
              onClick={() => {
                setButtonColor("yes");
              }}
              type="button"
              className={`border ${
                buttonColor === "yes" ? "bg-green-700 text-white" : ""
              } border-black text-rose-950 hover:text-white hover:bg-green-700 py-3 rounded-lg`}
            >
              Yes, Please
            </button>
            <button
              onClick={() => {
                setButtonColor("no");
              }}
              type="button"
              className={`border ${
                buttonColor === "no" ? "bg-red-700 text-white" : ""
              } border-black text-rose-950 hover:text-white hover:bg-red-700 py-3 rounded-lg`}
            >
              No Thanks
            </button>
          </div>
          <p className="font-semibold py-3">
            You can unsubscribe or update your preferences at any time.
          </p>
        </div>
        {/* above div display for register page */}
        <div className="text-center mt-4">
          <button
            type="submit"
            className="bg-purple-600 py-3 px-7 rounded-lg w-2/4 text-white capitalize"
          >
            {text}
          </button>
        </div>
        <div className={`${text === "register" ? "" : "hidden"} text-center`}>
          <p>By registering you accept our </p>
          <p>
            <Link className="underline decoration-purple-500 hover:decoration-2 font-semibold">
              Terms of Use{" "}
            </Link>
            and
            <Link className="underline decoration-purple-500 hover:decoration-2 font-semibold">
              Privacy Policy.
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
