import React from 'react';
import banner from '../../../assets/banner.jpg'
const Hero = () => {
    return (
        <div className="hero h-[650px]" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" text-white">
                    <h1 className="mb-5 text-5xl font-bold">Weolcome to Zooom Vrooom iGarage</h1>
                    <p className="mb-5 text-lg mx-auto w-2/4">Find your dream car here with the price your pocket could carry.....</p>
                    <button className="btn btn-primary">Start a tour</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;