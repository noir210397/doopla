import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({})

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userEmail, setUserEmail] = useState('')
    const [imageURL, setImageUrl] = useState("")
    const [displayName, setDisplayName] = useState('')
    const [isLoaded, setIsLoaded] = useState(false)
    const navigate = useNavigate();
    // const [count, setCount] = useState(0)
    // setCount((prevCount) => { return prevCount + 1 })
    const createUser = async (email, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            navigate('/account')
            // const user = userCredential.user
        } catch (error) {
            console.log(error.code)
            return error.code;

        }
    }
    const signIn = async (email, password) => {
        try {
            // console.log("logging in")
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/account')
            // const user = userCredential.user
            // console.log(user.email)
        } catch (error) {
            console.log(error.code)
            return error.code

        }

    }
    useEffect(() => {
        setIsLoaded(true)
        const authState = () => {
            return onAuthStateChanged(auth, (user) => {
                // setIsLoaded(true)
                if (user) {
                    setIsLoggedIn(true)
                    setUserEmail(user.email)
                    setDisplayName(user.displayName)
                    setImageUrl(user.photoURL)
                    // console.log(user)

                }
                else {
                    setIsLoggedIn(false)
                }

            })
        }
        return () => {
            authState()
        }
    }, [])
    const googleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider()
            await signInWithPopup(auth, provider)
            navigate('/account')
            // const credential = GoogleAuthProvider.credentialFromResult(result)
            // const token = credential.accessToken;
            // const user = result.user;
            // console.log(user);
            // console.log(credential)
            // console.log(token)
        } catch (error) {
            console.log(error.message);

        }

    }
    const logOut = async () => {
        await signOut(auth)
        navigate('/')
        // console.log("logged out");
    }
    return (
        <AuthContext.Provider value={{ createUser, signIn, isLoggedIn, setIsLoggedIn, setUserEmail, userEmail, googleSignIn, displayName, imageURL, logOut, isLoaded }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;
