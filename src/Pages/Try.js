import React, { useState } from 'react';

function Try() {
    const [accountType, setAccountType] = useState('buyer');

    const handleAccountTypeChange = (event) => {
        setAccountType(event.target.value);
    };

    return (
        <div className='flex justify-around mt-4'>
            <div className='flex'>
                <p className='text-lg mr-2 font-sans'>Buyer</p>
                <input
                    type="radio"
                    name="accountType"
                    value="buyer"
                    className="radio-xs my-auto radio-info"
                    checked={accountType === 'buyer'}
                    onChange={handleAccountTypeChange}
                />
            </div>

            <div className='flex'>
                <p className='text-lg mr-2 font-sans'>Seller</p>
                <input
                    type="radio"
                    name="accountType"
                    value="seller"
                    className="radio-xs my-auto radio-info"
                    checked={accountType === 'seller'}
                    onChange={handleAccountTypeChange}
                />
            </div>
        </div>
    );
}

export default Try;
