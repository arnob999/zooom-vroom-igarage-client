import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsCard from '../../component/DetailsCard/DetailsCard';

const Products = () => {
    const products = useLoaderData();


    return (
        <div>
            {
                products.map(product => <DetailsCard product={product}></DetailsCard>)
            }
        </div>
    );
};

export default Products;