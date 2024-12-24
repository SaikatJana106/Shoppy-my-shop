import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
const Kidscloths = ({ category }) => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const handleBuy = () => {
        navigate('/allproduct', { state: { category: 'kid' } });
    };
    useEffect(() => {
        // Fetch all products from the server
        const categoryParam = category ? `?category=${category}` : '';
        fetch(`http://localhost:4000/product/allproducts${categoryParam}`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching all products:', error));
    }, []);
    return (
        <div className="p-4">
            {/* Header Section */}
            <div className="flex justify-between px-6 max-md:px-2">
                <span className="font-extrabold text-4xl max-md:text-lg">Kid's Deals</span>
                <button   onClick={handleBuy}  className="text-green-500 font-bold text-xl max-md:text-sm">
                    See more
                </button>
            </div>

            {/* Slider Section */}
            <div className="overflow-x-auto whitespace-nowrap pt-5 px-2 no-scrollbar">
                <div className="flex gap-6">
                    {products.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
                        >
                            <Link to={`/${item.id}`}>  {/*link */}
                                <img
                                    className="w-44 h-44 rounded-2xl object-cover"
                                    src={item.image}
                                    alt={item.name}
                                />
                            </Link>
                            <span className="text-center font-bold text-lg text-gray-700 block">{item.name}</span>
                            <span className="text-center font-bold text-purple-600 block text-base">Rs {item.new_price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Kidscloths
