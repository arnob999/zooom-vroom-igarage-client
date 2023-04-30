import React, { useEffect, useState } from 'react';
import Card from '../../../component/Card/Card';

const HotProducts = () => {

    const [advertisedProducts, setAdvertisedProducts] = useState([])
    console.log(advertisedProducts.length)
    useEffect(() => {
        fetch("http://localhost:5000/advertised")
            .then(res => res.json())
            .then(data => {
                setAdvertisedProducts(data.slice(0, 3))
            })
    }, [])

    if (advertisedProducts.length === 0) {
        return null;
    }

    return (
        <div>
            <div className='mt-20'>
                <div className='flex justify-center'>
                    <h1 className='lg:text-5xl xl:text-5xl text-3xl font-serif font-bold mb-3'>
                        Advertised Products
                    </h1>
                </div>
                <div className='mt-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                    {
                        advertisedProducts.map(advertisedProduct => <Card
                            key={advertisedProduct._id}
                            advertisedProduct={advertisedProduct}></Card>)
                    }
                </div>
            </div>
        </div>

    );
};

export default HotProducts;