import React from 'react';
import verify from "../../assets/verify.png"

const DetailsCard = ({ product }) => {
    const { description, date, location, name, orgPrice, rePrice, pic, sellerName } = product;
    console.log(product);

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
            <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: `url(${pic})` }}></div>

            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-80 dark:bg-gray-800">
                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{name}

                </h3>

                <div className="px-3 flex justify-center py-2 bg-gray-200 dark:bg-gray-700">
                    <div className=''>
                        <span className='font-bold text-gray-800 dark:text-gray-200'>Price: </span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">{rePrice}</span>
                        <span className=" line-through font-medium text-sm text-slate-500 ml-1">{orgPrice}</span>
                    </div>
                </div>

                <div className=' text-gray-800 dark:text-gray-200'>
                    <div className='px-3 py-2'>
                        <p className='font-semibold underline text-center'>Description</p>
                        <p className='text-center w-full'>
                            {
                                description.slice(0, 199)
                            }
                        </p>
                    </div>
                </div>

                <div className='px-3 py-2   text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-700'>
                    <p className='justify-center flex'>Posted By: {sellerName} <img className='w-5 h-5' src={verify} alt="" /></p>
                    <div className='flex justify-between px-2'>
                        <p className=''>
                            On: {date}
                        </p>
                        <p>Location : {location}</p>
                    </div>
                </div>

                <div className='px-5 py-2  text-gray-800 dark:text-gray-200 flex justify-evenly'>
                    <button class="px-2 py-1 text-xs font-semibold text-white  transition-colors duration-300 transform bg-emerald-600 rounded hover:bg-emerald-500 dark:hover:bg-emerald-500">Book Now</button>

                    <button class="px-2 py-1 text-xs font-semibold text-white  transition-colors duration-300 transform bg-red-700 rounded hover:bg-emerald-500 dark:hover:bg-red-600">Report</button>

                </div>
            </div>

        </div>
    );
};

export default DetailsCard;
