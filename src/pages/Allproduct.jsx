import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Allproduct = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();

    // Access the category from state
    const category = location.state?.category;

    useEffect(() => {
        const categoryParam = category ? `?category=${category}` : '';
        fetch(`http://localhost:4000/product/allproducts${categoryParam}`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, [category]);

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
            {products.map((item, index) => (
                <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-fit hover:scale-105"
                >
                    <Link to={`/${item.id}`}>
                        <img
                            className="h-full w-full object-cover"
                            src={item.image}
                            alt={item.name}
                        />
                    </Link>
                    <div className="p-4">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">{item.name}</h2>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-lg font-bold text-violet-600">${item.new_price}</span>
                            <span className="text-sm text-gray-500 line-through">${item.old_price}</span>
                        </div>
                        <button
                            className="w-full py-2 px-4 text-white bg-violet-600 rounded hover:bg-violet-700 transition-colors duration-200"
                        >
                            Buy
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Allproduct;
