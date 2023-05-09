import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const CheckoutForm = ({ booking }) => {
    // const { productName, price, pic, buyerName, buyerEmail, productId, payment, } = booking
    const { price, buyerName, buyerEmail, productId } = booking
    const stripe = useStripe()
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [processing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState('')
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intents', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ price })
        })
            .then((res) => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [price])
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }


        const card = elements.getElement(CardElement)

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError('')
        }

        //
        setSuccess('')
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: buyerEmail,
                    }
                }
            }
        );


        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }
        if (paymentIntent.status === "succeeded") {
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email: buyerEmail,
                bookingId: productId
            }
            //u should store payment info to database
            fetch("http://localhost:5000/payments", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `bearrer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedid) {
                        setSuccess('Congrats! Your payment is completed')
                        setTransactionId(paymentIntent.id)
                    }
                })


            fetch(`http://localhost:5000/payment/success/${productId}`, {
                method: 'PUT',
                headers: {
                    authorization: `bearrer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success("Payment Successfull")
                        navigate('/dashboard/myOrder')
                    }
                })


        }

        //syncinc with booking db
        setProcessing(false)
    }
    return (
        <div className=''>

            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='flex justify-center'>
                    <button className='btn btn-sm my-11 text-center bg-violet-500 hover:bg-violet-600 text-white rounded-xl' type="submit" disabled={!stripe || !clientSecret || processing}>
                        Payment with Stripe
                    </button>
                </div>

            </form>

            <p className="text-red-500">{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your TrxID: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
            <p className='text-lg mt-7 font-serif'>Go to <Link to={'/dashboard/myOrder'} className='btn btn-sm bg-blue-600 text-white rounded-xl'>My Order</Link></p>

        </div>

    );
};

export default CheckoutForm;