import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)

const Payment = () => {

    const booking = useLoaderData();
    console.log(booking)
    const { productName, price, pic } = booking

    return (
        <div className='flex justify-center'>
            <div>
                <h3 className='text-3xl text-center'>Payment for {productName}</h3>
                <p className='text-xl text-center'>Please pay <strong>$ {price}</strong> for your booking</p>

                <div className='w-96 my-6'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm booking={booking} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;