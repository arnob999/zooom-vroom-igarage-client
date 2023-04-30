import React, { useState } from 'react';

const Temp = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="online" onClick={toggleDropdown}>
                <img className='w-16 rounded-full' src="https://mui.com/static/images/avatar/1.jpg" alt="User Avatar" />
            </div>
            {isOpen && (
                <ul className="dropdown-menu w-fit bg-slate-200 rounded-lg p-2">
                    <li><a href="#">Edit Profile</a></li>
                    <li><a href="#">Change Password</a></li>
                    <li><a href="#">Log Out</a></li>
                </ul>
            )}
        </div>
    );
}

export default Temp;


<div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 text-base-content">


        {/* For Buyer */}
        {
            isAuthorized === "buyer" && <>
                <li><Link to="/dashboard/myOrder">My Order</Link></li>
            </>
        }

        {/* For Seller */}
        {
            isAuthorized === "seller" && <>
                <li><Link to="/dashboard/addProduct">Add Product</Link></li>
                <li><Link to="/dashboard/myProduct">My Product</Link></li>

            </>
        }

        {/* For Admin */}
        {
            isAuthorized === "admin" && <>
                <li><Link to="/dashboard/allSeller">All Sellers</Link></li>
                <li><Link to="/dashboard/allBuyer">All Buyers</Link></li>
                <li><Link to="/dashboard/reportedItem">Reported Item</Link></li>

            </>
        }

    </ul>

</div>