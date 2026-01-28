import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "../App";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home> ,
  },
]);

export default router;