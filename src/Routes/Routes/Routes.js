import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import NotFound from "../../Pages/NotFound/NotFound";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import Home from "../../Pages/HomePage/Home/Home";
import Products from "../../Pages/Products/Products";


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
                element: <Products />,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },

            {
                path: '*',
                element: <NotFound />
            },

        ]
    },

])

export default router;