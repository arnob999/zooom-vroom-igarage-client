import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const products = useLoaderData();

    console.log(products)
    return (
        <div>
            {name}
        </div>
    );
};

export default Products;