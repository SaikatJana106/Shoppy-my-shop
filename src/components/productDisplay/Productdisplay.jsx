import React, { useContext } from 'react';
import star_icon from '../../media/star_icon.png';
import star_dull_icon from '../../media/star_dull_icon.png';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/Shopcontext';
// tacking props from product.jsx
const Productdisplay = ({ product }) => {
    const { addToCart } = useContext(ShopContext);
    const navigate = useNavigate();
    if (!product) {
        return <div>No product information available</div>;
    }

    const handleBuy = () => {
        navigate('/buy', { state: { product } });
    };
    return (
        <div className="flex flex-col lg:flex-row py-4 px-4 sm:px-6 md:px-10 lg:py-24">
            {/* Left Section */}
            <div className="flex flex-col-reverse lg:flex-row lg:w-1/2">
                {/* Small Images Column */}
                <div className="flex flex-row lg:flex-col space-x-4 lg:space-y-4 lg:space-x-0 w-auto overflow-x-auto">
                    {[...Array(4)].map((_, i) => (
                        <img
                            key={i}
                            src={product.image}
                            alt={`Product view ${i + 1}`}
                            className="w-20 h-20 sm:w-28 sm:h-28 object-cover cursor-pointer border border-gray-300 rounded"
                        />
                    ))}
                </div>
                {/* Large Image */}
                <div className="mb-4 lg:mt-0 lg:ml-6 lg:py-5">
                    <img
                        className="w-full max-w-xs sm:max-w-sm lg:max-w-lg h-auto object-cover rounded mx-auto"
                        src={product.image}
                        alt="Main product view"
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 flex flex-col justify-center space-y-6 mt-6 lg:mt-0">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center font-serif">{product.name}</h1>
                <h2 className="text-base sm:text-lg font-semibold text-center text-gray-600">Best selling product</h2>

                {/* Star Rating */}
                <div className="flex justify-center items-center space-x-1">
                    {[...Array(4)].map((_, i) => (
                        <img key={i} className="h-4 w-4" src={star_icon} alt="Star" />
                    ))}
                    <img className="h-4 w-4" src={star_dull_icon} alt="Star" />
                    <span className="text-sm">(122)</span>
                </div>

                {/* Price Section */}
                <div className="flex justify-center items-center space-x-4">
                    <span className="text-sm sm:text-lg font-medium line-through text-gray-500">${product.old_price}</span>
                    <span className="text-lg sm:text-2xl font-bold text-gray-900">${product.new_price}</span>
                </div>

                {/* Size Selector */}
                <div className="text-center">
                    <h3 className="text-base sm:text-lg font-medium font-mono">Select Size</h3>
                    <div className="flex justify-center gap-2 sm:gap-4 mt-2 flex-wrap">
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <span
                                key={size}
                                className="border border-gray-300 px-3 sm:px-4 py-2 cursor-pointer hover:bg-purple-200"
                            >
                                {size}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col items-center space-y-2">
                    <button onClick={() => addToCart(product.id)} className="bg-violet-600 hover:bg-violet-700 w-full sm:w-3/5 py-2 text-sm sm:text-lg font-medium text-white rounded ">
                        ADD TO CART
                    </button>
                    <button onClick={handleBuy} className="bg-violet-600 hover:bg-violet-700 w-full sm:w-3/5 py-2 text-sm sm:text-lg font-medium text-white rounded ">
                        BUY
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Productdisplay;
