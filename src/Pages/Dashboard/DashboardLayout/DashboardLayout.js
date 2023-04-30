import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Navbar from '../../Shared/Navbar/Navbar';
import useAuthorization from "../../../hooks/useAuthorization/useAuthorization";
import brandLogo from "../../../assets/icon.png";
import nullAvatar from "../../../assets/avatarNull.webp"
const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAuthorized] = useAuthorization(user?.email)
    console.log(user)
    console.log(isAuthorized)
    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <aside class="flex flex-col w-64 h-3/4 px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
                    <Link to={"/dashboard"} class="mx-auto">
                        <img className='rounded-xl' src={brandLogo} alt="brandLogo" />
                    </Link>

                    <div class="flex flex-col items-center mt-6 -mx-2">
                        <img class="object-cover w-24 h-24 mx-2 rounded-full" src={user.photoURL ? user.photoURL : nullAvatar} alt="avatar" />
                        <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">{user.displayName}</h4>
                        <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{user.email}</p>
                    </div>

                    <div class="flex flex-col justify-between flex-1 mt-6">
                        <nav>
                            {/* For Buyer */}
                            {
                                isAuthorized === "buyer" && <Link to={"/dashboard/myOrder"} className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200 mt-3" >
                                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <span class="mx-4 font-medium">My Order</span>
                                </Link>
                            }
                            {/* For Seller Dashboard */}
                            {
                                isAuthorized === "seller" && <>
                                    <Link to={"/dashboard/addProduct"} className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200 mt-3" >
                                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        <span class="mx-4 font-medium">Add Product</span>
                                    </Link>

                                    <Link to={"/dashboard/myProduct"} className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200 mt-3" >
                                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        <span class="mx-4 font-medium">My Product</span>
                                    </Link>
                                </>
                            }


                            {/* For Admin Dashboard */}
                            {
                                isAuthorized === "admin" && <>
                                    <Link to={"/dashboard/allSeller"} className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200 mt-3" >
                                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        <span class="mx-4 font-medium">All Seller</span>
                                    </Link>

                                    <Link to={"/dashboard/allBuyer"} className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200 mt-3" >
                                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        <span class="mx-4 font-medium">All Buyers</span>
                                    </Link>

                                    <Link to={"/dashboard/reportedItem"} className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200 mt-3" >
                                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        <span class="mx-4 font-medium">Reported Item</span>
                                    </Link>
                                </>
                            }
                        </nav>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default DashboardLayout;