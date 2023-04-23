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
