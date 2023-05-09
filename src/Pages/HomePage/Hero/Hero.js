import React from 'react';
import banner from '../../../assets/banner.jpg'
const Hero = () => {
    return (
        <div className="hero h-[650px]" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" text-white">
                    <h1 className="mb-5 text-5xl font-serif font-bold">Welcome to Zooom Vrooom iGarage</h1>

                    <button className="btn text-white shadow-lg btn-primary">Start a tour</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;