import {createBrowserRouter} from "react-router"; 
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const Router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children:[
                {
                    path: "",
                    element: <Home></Home>,
                },
                {
                    path: "/category/:id",
                    element: <CategoryNews></CategoryNews> ,
                },
            ]
        },
        {
            path: "/auth",
            element: <h2>Auth Layout</h2>
        },
        {
            path: "/news",
            element: <h2>News Layout</h2>
        },
        {
            path: "/*",
            element: <h2>404 Error</h2>
        },
    ]
);

export default Router;