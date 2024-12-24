import React, { useEffect, useState } from 'react';

const UserOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('http://localhost:4000/user/getorder', {
                    headers: {
                        'authToken': localStorage.getItem('authToken'),
                    },
                });
                const data = await response.json();
                console.log("Fetched Orders:", data);
                setOrders(data);
            } catch (error) {
                console.error('Error fetching order data:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className='flex justify-center'>
            <div className='p-6 w-full sm:w-3/4 lg:w-2/3 mt-10 max-h-screen overflow-y-scroll bg-gray-50 shadow-lg rounded-md no-scrollbar'>
                <h1 className='text-2xl font-bold mb-4 text-center text-gray-700'>Your Orders</h1>
                {orders.length === 0 ? (
                    <p className='text-center text-gray-500'>No orders found.</p>
                ) : (
                    <div className='space-y-4'>
                        {orders.map((item, index) => (
                            <div
                                key={index}
                                className='flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow'
                            >
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-20 h-20 object-cover rounded-md border border-gray-200" 
                                />
                                <div className='ml-4 flex-1'>
                                    <h2 className='font-medium text-lg text-gray-800'>{item.name}</h2>
                                    <p className='text-sm text-gray-500'>${item.new_price}</p>
                                </div>
                                <button 
                                    className='px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'>
                                    Track Order
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserOrder;
