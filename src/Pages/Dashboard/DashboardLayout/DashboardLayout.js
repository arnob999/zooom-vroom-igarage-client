import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useAdmin from "../../../hooks/useAuthorization"
import Navbar from '../../Shared/Navbar/Navbar';
const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
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

                        {/* 
                        buyers:
                        My Orders 
                        
                        Sellers: Add A Product
                        My Products
                        */}
                        {
                            isAdmin && <>
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