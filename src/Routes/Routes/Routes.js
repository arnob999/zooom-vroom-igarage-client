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
import MyOrder from "../../Pages/Dashboard/BuyerDashboard/MyOrder/MyOrder"
import AddProduct from "../../Pages/Dashboard/SellerDashBoard/AddProduct/AddProduct"
import MyProduct from "../../Pages/Dashboard/SellerDashBoard/MyProduct/MyProduct"
import AllSeller from "../../Pages/Dashboard/AdminDashboard/AllSeller/AllSeller"
import AllBuyer from "../../Pages/Dashboard/AdminDashboard/AllBuyer/AllBuyer"
import ReportedItem from "../../Pages/Dashboard/AdminDashboard/ReportedItem/ReportedItem"


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
                        path: '/dashboard/myOrder',
                        element: <MyOrder />
                    },
                    {
                        path: '/dashboard/addProduct',
                        element: <AddProduct />
                    },
                    {
                        path: '/dashboard/myProduct',
                        element: <MyProduct />
                    },
                    {
                        path: '/dashboard/allSeller',
                        element: <AllSeller />
                    },
                    {
                        path: '/dashboard/allBuyer',
                        element: <AllBuyer />
                    },
                    {
                        path: '/dashboard/reportedItem',
                        element: <ReportedItem></ReportedItem>
                    },
                ]
            }

        ]
    }

])

export default router;