import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./layout/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/register",
        Component: Register
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD6t3VrR0YPJuz_TRG5p101XqBgqoDfcrM",
//   authDomain: "private-route-auth-d77e1.firebaseapp.com",
//   projectId: "private-route-auth-d77e1",
//   storageBucket: "private-route-auth-d77e1.firebasestorage.app",
//   messagingSenderId: "656176628221",
//   appId: "1:656176628221:web:74680827befb45b7d3d994"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
