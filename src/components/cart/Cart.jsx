import React, { useContext } from 'react';
import { ShopContext } from '../context/Shopcontext';
import { PackageMinus } from 'lucide-react';
import axios from 'axios';

const Cart = () => {
    const { getTotalAmount, all_product, cartItem, removeFromCart } = useContext(ShopContext);

    const handleBuy = async () => {
        try {
            await axios.post('/updatecart', { cartData: cartItem }, {
                headers: { 'authToken': localStorage.getItem('token') }
            });
            // Navigate to checkout or order page
        } catch (error) {
            console.error("Error updating cart:", error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between mb-4 text-lg font-semibold text-gray-700 max-md:text-sm max-md:font-medium">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((product) => {
                if (cartItem[product.id] > 0) {
                    return (
                        <div key={product.id} className="flex justify-between items-center border-b py-4">
                            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover max-md:w-10 max-md:h-10" />
                            <p className="max-md:text-sm">{product.name}</p>
                            <p>${product.new_price}</p>
                            <p>{cartItem[product.id]}</p>
                            <p>${cartItem[product.id] * product.new_price}</p>
                            <PackageMinus
                                onClick={() => removeFromCart(product.id)}
                                className="cursor-pointer text-red-500"
                            />
                        </div>
                    );
                }
                return null;
            })}
            {/* Commented-out cart totals section */}
            {/* <div className="cartitems-down mt-4">
                <div className="cartitems-total bg-gray-100 p-4 rounded-md shadow-md">
                    <h1 className="text-2xl font-semibold mb-4">Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-iteam flex justify-between py-2">
                            <p>Subtotal</p>
                            <p>${getTotalAmount}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-iteam flex justify-between py-2">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-iteam flex justify-between py-2 font-semibold">
                            <h3>Total</h3>
                            <h3>${getTotalAmount}</h3>
                        </div>
                    </div>
                    <button 
                        onClick={handleBuy} 
                        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Buy
                    </button>
                </div>
            </div> */}
        </div>
    );
};

export default Cart;
