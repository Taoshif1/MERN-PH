//! DANGER!! Don't share your apiKey and other credentials in a public repository

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import getAuth from firebase docs to use Firebase Authentication from "firebase/auth"
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6t3VrR0YPJuz_TRG5p101XqBgqoDfcrM",
  authDomain: "private-route-auth-d77e1.firebaseapp.com",
  projectId: "private-route-auth-d77e1",
  storageBucket: "private-route-auth-d77e1.firebasestorage.app",
  messagingSenderId: "656176628221",
  appId: "1:656176628221:web:74680827befb45b7d3d994",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);