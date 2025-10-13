// DO NOT send firebase to public repository
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp-X5-IQ9rq7dyL5RMWDWZHRaaKS-r1zE",
  authDomain: "simple-firebase-auth-a043e.firebaseapp.com",
  projectId: "simple-firebase-auth-a043e",
  storageBucket: "simple-firebase-auth-a043e.firebasestorage.app",
  messagingSenderId: "785256998973",
  appId: "1:785256998973:web:45d02754c921300f99a254",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
