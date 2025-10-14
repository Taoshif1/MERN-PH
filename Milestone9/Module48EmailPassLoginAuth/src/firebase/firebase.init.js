//!DANGER - DO NOT SHARE YOUR FIREBASE CONFIGURATION IN PUBLIC

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxjUsENZgRgJgIxBKl2l64HJAw5PhZP7g",
    authDomain: "email-password-auth-6e7e5.firebaseapp.com",
    projectId: "email-password-auth-6e7e5",
    storageBucket: "email-password-auth-6e7e5.firebasestorage.app",
    messagingSenderId: "111459884653",
    appId: "1:111459884653:web:da87aed1981c60e0a1e964",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);