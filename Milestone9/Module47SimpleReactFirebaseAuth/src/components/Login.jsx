import React from "react";
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth"; // MUST IMPORT from firebase/auth
import { auth } from "../firebase/firebase.init"; // MUST IMPORT auth from firebase.init.js
import { data } from "react-router";
import { useState } from "react";
import { signOut } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
githubProvider.addScope('user:email');  // to request email from GitHub

const Login = () => {

  const [user, setUser] = useState(null);
  
  const handleGoogleSignIn = () => {
    // console.log("Google Sign In Clicked");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
      console.log(result.user);
      setUser(result.user);
      return;
    })
    .catch((error) => {
      console.log("Error: ", error);
      return;
    });
  }

  const handleGithubSignIn = () => {
    // console.log("GitHub Sign In Clicked");
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        // console.log(result.user);
        const loggedInUser = result.user;
        if(!loggedInUser.email) {
          if(loggedInUser.providerData){
            const githubProvider = loggedInUser.providerData.find(p => 
              p.providerId === 'github.com');
              if(githubProvider && githubProvider.email){
                loggedInUser.email = githubProvider.email;
                // setUser(loggedInUser);
              }
          }
        }
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("Error: ", error);
        return;
      });
  }

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      console.log("Sign Out done, ", auth);
      setUser(null);
    }).catch(error => {
      console.log("Error: ", error);
    })
  }

  return (
    <div>
      <h1>Please Log In</h1>

      {user ? 
        <button onClick={handleSignOut}>Sign Out</button>
      : 
        <>
          <button onClick={handleGoogleSignIn}>Sign In With Google</button>
          <button onClick={handleGithubSignIn}>Sign In With GitHub</button>
        </> 
      }

      {user && (
        <div>
          <h3>Name: {user.displayName}</h3>
          <h5>Email: {user.email}</h5>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
