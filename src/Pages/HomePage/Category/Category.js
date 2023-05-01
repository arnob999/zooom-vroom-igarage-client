import React, { useEffect, useState } from 'react';
import CatCard from '../../../component/CatCard/CatCard';
const Category = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("https://zooom-vroom-i-garage-server.vercel.app/category")
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])
    return (
        <div className="mt-8 w-full">
            <div className='flex justify-center'>
                <h1 className='text-5xl font-serif font-bold mb-3'>
                    Categories
                </h1>
            </div>
            <div className='w-full mainCard grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                {
                    categories.map(category => <CatCard key={category._id} category={category} />)
                }
            </div>



        </div>
    );
};

export default Category;