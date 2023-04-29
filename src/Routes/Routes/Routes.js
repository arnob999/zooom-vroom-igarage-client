import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import NotFound from "../../Pages/NotFound/NotFound";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import Home from "../../Pages/HomePage/Home/Home";
import Products from "../../Pages/Products/Products";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Try from "../../Pages/Try";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import DashboardLayout from "../../Pages/Dashboard/DashboardLayout/DashboardLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/login',
                element: <Login />
            },

            {
                path: '/signup',
                element: <SignUp />
            },

            {
                path: '/category/:id',
                element: <PrivateRoute>
                    <Products />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },

            {
                path: '*',
                element: <NotFound />
            },
            {
                path: '/try',
                element: <Try />
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>

        </PrivateRoute>,
        errorElement: <DisplayError />,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute>
                    <DashboardLayout />
                </PrivateRoute>,
                children: [
                    {

                    }
                ]
            }

        ]
    }

])

export default router;