import React from 'react';
import './Category.css'
import cityCar from "../../../assets/CarCategory/cityCar.png"
import sportsCar from "../../../assets/CarCategory/sportsCar.png"
import evCar from "../../../assets/CarCategory/evCar.png"
const Category = () => {
    return (
        <div className="mt-8 w-auto">
            <div className='flex justify-center'>
                <h1 className='text-5xl font-serif font-bold mb-3'>
                    Categories
                </h1>
            </div>
            <div className='mainCard grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3'>
                <div className="card1 h-full">
                    <img className='mx-auto' src={cityCar} alt="" />
                    <h3 className='my-3 font-bold'>City</h3>
                    <p>These city cars have good fuel economy, bigger boot space & put less on your pocket</p>
                    <button className="py-2 mt-5 px-4 shadow-md no-underline rounded-full  text-white font-sans font-semibold text-sm border-blue btn-secondary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">Browse More</button>
                </div>

                <div className="card2">
                    <img className='mx-auto' src={sportsCar} alt="Eiffel Tower" />
                    <h3 className='my-3 font-bold'>Sports</h3>
                    <p>Sports car have emmens engine power. Offering fun ride.</p>
                    <button className="py-2 mt-5 px-4 shadow-md no-underline rounded-full  text-white font-sans font-semibold text-sm border-blue btn-secondary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">Browse More</button>
                </div>

                <div className="card3">
                    <img className='mx-auto' src={evCar} alt="" />
                    <h3 className='my-3 font-bold'>EV</h3>
                    <p>New gen electric vehicle. Economy at its best. Good for your daily rides</p>
                    <button className="py-2 mt-5 px-4 shadow-md no-underline rounded-full  text-white font-sans font-semibold text-sm border-blue btn-secondary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">Browse More</button>
                </div>
            </div>



        </div>
    );
};

export default Category;