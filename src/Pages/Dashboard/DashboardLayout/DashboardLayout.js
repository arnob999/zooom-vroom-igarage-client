import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Navbar from '../../Shared/Navbar/Navbar';
import useAuthorization from "../../../hooks/useAuthorization";


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAuthorized] = useAuthorization(user?.email)

    console.log(isAuthorized)
    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {/* <li><Link to="/dashboard">My Appointments</Link></li> */}

                        {/* For Buyer */}
                        {
                            isAuthorized == "buyer" && <>
                                <li><Link to="/dashboard/myOrder">My Order</Link></li>

                            </>
                        }

                        {/* For Seller */}
                        {
                            isAuthorized == "seller" && <>
                                <li><Link to="/dashboard/addProduct">Add Product</Link></li>
                                <li><Link to="/dashboard/myProduct">My Product</Link></li>

                            </>
                        }

                        {/* For Admin */}
                        {
                            isAuthorized == "admin" && <>
                                <li><Link to="/dashboard/allSeller">All Sellers</Link></li>
                                <li><Link to="/dashboard/allBuyer">All Buyers</Link></li>
                                <li><Link to="/dashboard/reportedItem">Reported Item</Link></li>

                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;