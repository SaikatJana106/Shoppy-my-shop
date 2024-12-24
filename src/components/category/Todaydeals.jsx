import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Todaydeals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products from the server
    fetch('http://localhost:4000/product/allproducts')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching all products:', error));
  }, []);

  return (
    <div className="p-4">
      {/* Header Section */}

      <span className="font-extrabold text-4xl max-md:text-lg text-gray-800">Best Sells</span>


      {/* Slider Section */}
      <div className="overflow-x-auto whitespace-nowrap pt-5 px-2 no-scrollbar">
        <div className="flex gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
            >
              <Link to={`/${item.id}`}>
                <img
                  className="w-48 h-48 rounded-xl object-cover mx-auto"
                  src={item.image}
                  alt={item.name}
                />
              </Link>
              <div className="text-center mt-3">
                <span className="font-bold text-lg text-gray-700 block">{item.name}</span>
                <span className="font-bold text-purple-600 block text-base">Rs {item.new_price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todaydeals;
