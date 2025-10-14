import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './layout/Root.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/Home/Home.jsx'
import Register from './components/Register/Register.jsx'
import Login from './components/Login/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Root></Root>,
    // element: <h1>Hello World</h1>,
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "register",
        Component: Register
      },
      {
        path: "login",
        Component: Login
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
