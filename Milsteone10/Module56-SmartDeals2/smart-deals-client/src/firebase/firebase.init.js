// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7j-m_esaS1N5fFe3XQRSVph3HbgKdBZE",
  authDomain: "smart-deals-37b05.firebaseapp.com",
  projectId: "smart-deals-37b05",
  storageBucket: "smart-deals-37b05.firebasestorage.app",
  messagingSenderId: "218486306111",
  appId: "1:218486306111:web:2b629fb6f9dc483bd3cf8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);