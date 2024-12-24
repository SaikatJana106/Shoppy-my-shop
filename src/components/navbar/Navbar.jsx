import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X ,ShoppingCart} from 'lucide-react';
import { ShopContext } from '../context/Shopcontext';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const { getTotalCartItems } = useContext(ShopContext);
    const [mobileMenuActive, setMobileMenuActive] = useState(false);

    const totalCartItems = getTotalCartItems();
    // Check login status
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        setIsLoggedIn(!!token); // Set to true if token exists
    }, []);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        // Clear auth token or any session storage
        localStorage.removeItem('authToken');

        // Update login state
        setIsLoggedIn(false);

        // Redirect to the login/signup page
        navigate('/loginsignup');
    };

    return (
        <nav className="bg-green-500 flex justify-between items-center mx-auto w-full p-4 overflow-hidden">
            {/* Logo */}
            <span className="text-5xl text-slate-200 font-bold max-md:text-xl">Shoppy</span>

            {/* Search Bar */}
            <input
                className="bg-transparent border-b border-b-slate-900 text-slate-200 placeholder-slate-200 focus:outline-none font-medium max-md:w-1/3"
                placeholder="Search here"
                type="search"
            />

            {/* Hamburger Menu Icon */}
            <div className="md:hidden" onClick={toggleNavbar}>
                {isOpen ? <X /> : <Menu />}
            </div>

            {/* Background Blur and Sliding Menu */}
            <div
                className={`${isOpen ? 'block' : 'hidden'
                    } fixed inset-0 z-20 bg-black bg-opacity-30 backdrop-blur-sm transition-all duration-300`}
                onClick={toggleNavbar}
            />

            <div
                className={`${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } fixed top-0 right-0 w-2/3 bg-transparent h-full z-30 transition-all duration-300`}
            >
                {/* Navigation Links */}
                <div className="flex flex-col items-center justify-start h-full space-y-6 p-6 pt-10">
                    {/* Home Link */}
                    <Link to="/" className="text-white text-lg">
                        Home
                    </Link>

                    <Link to="/orders" className="text-white text-lg">
                        Order
                    </Link>
                    <Link to="/map" className="text-white text-lg">
                        Map
                    </Link>

                    {/* Login or Logout */}
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-300"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to="/loginsignup"
                            className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Login
                        </Link>
                    )}

                    {/* Icons */}
                    <Link to="/cart" onClick={toggleNavbar} className="flex items-center space-x-2">
                        <ShoppingCart className="text-white" />
                        {totalCartItems > 0 && (
                            <span className="bg-red-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center">
                                {totalCartItems}
                            </span>
                        )}
                    </Link>
                    

                </div>
            </div>

            {/* Desktop View Links */}
            <div className="hidden md:flex md:items-center md:space-x-6">
                <Link to="/" className="text-white text-lg">
                    Home
                </Link>
                <Link to="/orders" className="text-white text-lg">
                    Order
                </Link>
                <Link to="/map" className="text-white text-lg">
                    Map
                </Link>
                <Link to="/cart" className="relative flex items-center text-white space-x-2">
                    <ShoppingCart className="text-white" />
                    {totalCartItems > 0 && (
                        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {totalCartItems}
                        </span>
                    )}
                </Link>
                {/* Login or Logout */}
                {isLoggedIn ? (
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-300"
                    >
                        Logout
                    </button>
                ) : (
                    <Link
                        to="/loginsignup"
                        className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </Link>
                    
                )}

                
            </div>
        </nav>
    );
};

export default Navbar;
