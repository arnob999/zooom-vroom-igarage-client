import React from 'react';
import Card from '../../../component/Card/Card';

const HotProducts = () => {
    const car = {
        name: "hagu"
    }
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
            <Card car={car} />
            <Card car={car} />
            <Card car={car} />
        </div>
    );
};

export default HotProducts;