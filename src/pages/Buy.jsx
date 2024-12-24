import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const Buy = () => {
    const location = useLocation();
    const { product } = location.state || {};
    const [paymentType, setPaymentType] = useState('cash');
    const navigate = useNavigate();

    const handleOrder = async () => {
        try {
            const response = await fetch('http://localhost:4000/user/saveorder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authToken': localStorage.getItem('authToken'),
                },
                body: JSON.stringify({
                    orderData: product,
                    paymentType: paymentType,
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Server error: ${errorText}`);
            }

            const result = await response.json();
            console.log('Order  successfully:', result);
            navigate('/Orders');
        } catch (error) {
            console.error('Error saving order:', error);
        }
    };

    return (
        <div className='flex justify-center items-center'>
            {product ? (
                <div className="flex flex-col justify-center items-center space-y-2">
                    <h1 className='text-center font-bold text-4xl'>Checkout</h1>
                    <img src={product.image} alt={product.name} />
                    <span className='font-medium text-3xl'>{product.name}</span>
                    <span className='font-medium text-xl'>${product.price}{product.new_price}</span>
                    <div>
                        <input
                            type="radio"
                            name="payType"
                            value="cash"
                           
                            checked={paymentType === 'cash'}
                            onChange={() => setPaymentType('cash')}
                        />
                        Cash

                        <input
                            type="radio"
                            name="payType"
                            value="online"
                            checked={paymentType === 'online'}
                            onChange={() => setPaymentType('online')}
                        />
                        Online

                    </div>


                    <button onClick={handleOrder} className='bg-violet-700 hover:bg-violet-900 text-xl font-semibold text-white rounded py-1 px-6 '>Order</button>
                </div>
            ) : (
                <p>No product selected. Please go back and select a product to buy.</p>
            )}
        </div>
    );
};

export default Buy;
