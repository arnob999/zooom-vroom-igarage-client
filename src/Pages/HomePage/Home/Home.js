import React from 'react';
import Hero from '../Hero/Hero';
import NewsLetter from '../NewsLetter/NewsLetter';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Hero />
            <div>
                <Category />
            </div>
            <NewsLetter />
        </div>
    );
};

export default Home;