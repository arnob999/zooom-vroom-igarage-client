import React from 'react';
import Card from '../../../component/Card/Card';

const HotProducts = () => {
    const car = {
        name: "hagu"
    }
    return (
        <div className='mt-20'>
            <div className='flex justify-center'>
                <h1 className='lg:text-5xl xl:text-5xl text-3xl font-serif font-bold mb-3'>
                    Advertised Products
                </h1>
            </div>
            <div className='mt-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                <Card car={car} />
                <Card car={car} />
                <Card car={car} />
            </div>
        </div>
    );
};

export default HotProducts;