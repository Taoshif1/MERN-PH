import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // MUST IMPORT from firebase/auth
import { auth } from "../firebase/firebase.init"; // MUST IMPORT auth from firebase.init.js
import { data } from "react-router";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  
  const handleGoogleSignIn = () => {
    // console.log("Google Sign In Clicked");
    signInWithPopup(auth, googleProvider).then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log("Error: ", error);
      return;
    });
  };

  return (
    <div>
      <h1>Please LogIn</h1>
      <button onClick={handleGoogleSignIn}>Sign In With Google</button>
    </div>
  );
};

export default Login;
