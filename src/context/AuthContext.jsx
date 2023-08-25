import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addDoc, doc, getDoc, setDoc } from "firebase/firestore";

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [imageURL, setImageUrl] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [searched, setSearched] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const createUser = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/account");
    } catch (error) {
      console.log(error.code);
      return error.code;
    }
  };
  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/account");
    } catch (error) {
      console.log(error.code);
      return error.code;
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoaded(true);
      if (user) {
        setIsLoggedIn(true);
        setUserEmail(user.email);
        setDisplayName(user.displayName);
        setImageUrl(user.photoURL);
        setUserId(user.uid);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    let item = JSON.parse(sessionStorage.getItem("search"));
    if (item) {
      setSearched(item[1]);
      setSearchTerm(item[0]);
    } else {
      return;
    }
  }, []);
  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/account");
    } catch (error) {
      console.log(error.message);
    }
  };
  const logOut = async () => {
    await signOut(auth);
    navigate("/");
  };
  const addProperty = async (id) => {
    const getProperty = () => {
      let obj = searched.find((item) => {
        return item.listing_id === id;
      });
      const singleProperty = {
        original_image: obj.original_image,
        price: obj.price,
        num_bathrooms: obj.num_bathrooms,
        num_bedrooms: obj.num_bedrooms,
        title: obj.title,
        listing_date: obj.listing_date,
        displayable_address: obj.displayable_address,
        bullet: obj.bullet,
        listing_id: obj.listing_id,
      };
      if (obj.rental_prices) {
        singleProperty.rental_prices = obj.rental_prices;
      }
      return singleProperty;
    };
    const property = getProperty();
    try {
      if (!isLoggedIn) {
        navigate("/sign-in");
      } else {
        const propertyRef = doc(db, "saved", userId);
        const snapShot = await getDoc(propertyRef);
        if (snapShot.exists()) {
          const newObj = snapShot.data();
          const newArr = newObj.arrayField;
          const check = newArr.find((item) => {
            return item.listing_id === id;
          });
          if (check) {
            return;
          } else {
            let array = [...newArr, property];
            let obj = {
              arrayField: array,
            };
            await setDoc(propertyRef, obj);
          }
        } else {
          let array = [property];
          let obj = {
            arrayField: array,
          };
          await setDoc(doc(db, "saved", userId), obj);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        createUser,
        signIn,
        isLoggedIn,
        setIsLoggedIn,
        setUserEmail,
        userEmail,
        googleSignIn,
        displayName,
        imageURL,
        logOut,
        isLoaded,
        searched,
        setSearched,
        searchTerm,
        setSearchTerm,
        userId,
        addProperty,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
