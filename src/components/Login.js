import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateInput } from "../utils/validate";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseConfig } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef("");
  const password = useRef("");
  const handleButtonClick = async (e) => {
    e.preventDefault();
    const message = validateInput(password.current.value);
    setErrorMessage(message);
    if (message) return;
    const app = initializeApp(firebaseConfig);
    if (!isSignInForm) {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      const auth = getAuth(app);
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="  w-1/4 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className=" w-full p-4 my-4 bg-gray-700"
          />
        )}
        <input
          type="email"
          ref={email}
          placeholder="Email Address"
          className=" w-full p-4 my-4 bg-gray-700"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="w-full p-4 my-4 bg-gray-700"
        />
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className=" text-red-600 py-4">{errorMessage} </p>
        <p className="py-4">
          {!isSignInForm ? "Already a User? " : "New to Netflix? "}
          <button type="button" onClick={toggleSignInForm}>
            {!isSignInForm ? "Sign in" : "Sign up now"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
