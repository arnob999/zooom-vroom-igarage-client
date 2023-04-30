import React from 'react';
import verify from "../../assets/verify.png"
const VerificationBadge = () => {
    return (
        <div className='bg-blue-500 ml-1 pl-1 pr-[6px] py-1 flex rounded-lg text-xs'>
            <img className='w-4 h-4 mr-1' src={verify} alt="" />
            <span className="font-semibold">
                Verified
            </span>
        </div>
    );
};

export default VerificationBadge;