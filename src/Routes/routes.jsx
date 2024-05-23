import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Products from "../pages/Dashboard/Products/Products";
import AddProducts from "../pages/Dashboard/AddProducts/AddProducts";
import UserProfile from "../pages/Dashboard/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
import UpdateProduct from "../pages/Dashboard/UpdateProduct";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        // errorElement: <ErrorPage></ErrorPage>,
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
                path: '/details',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute ><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'products',
                element: <Products></Products>
            },
            {
                path: 'addProducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: 'updateProduct',
                element: <UpdateProduct></UpdateProduct>
            },
            {
                path: 'userProfile',
                element: <UserProfile></UserProfile>
            },

        ]
    }
]);
