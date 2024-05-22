import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/product',
                element: <Product></Product>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Home></Home>
            },
            
        ]
    },
]);
