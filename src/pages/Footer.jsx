import React from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Footerpage = () => {
    const navigate = useNavigate();
    const gotoContactUs=()=>{
        navigate('/contactus')
    }
    return (
        <div className='border border-t-2 flex justify-between px-10 py-8 max-md:flex max-md:flex-col max-md:items-start max-md:px-2'>
            <div className='flex flex-col items-start'>
                <span className='text-green-400 font-bold underline'>+91 5689752314</span>
                <span className='font-semibold'>Monday to Saturday: 9:00 to 5:00</span>
                <span className='font-semibold'>ramdas@gmail.com</span>
                <span className='font-semibold'>Dankuni,Chanditala</span>
                <NavLink className='font-bold underline'>Show on map</NavLink>
            </div>
            <div className='flex flex-col items-start'>
                <span className='font-bold text-lg underline'>Store Policy</span>
                <NavLink className="font-semibold">Information</NavLink>
                <NavLink className="font-semibold">Privecy</NavLink>
                <NavLink className="font-semibold">Refund</NavLink>
                <NavLink className="font-semibold">Shipping policy</NavLink>
                <NavLink className="font-semibold">Service</NavLink>
            </div>
            <div className='flex flex-col items-start'>
                <span className='font-bold text-lg underline'>Quick links</span>
                <NavLink className="font-semibold">About Us</NavLink>
                <NavLink className="font-semibold" onClick={gotoContactUs}>Contact Us</NavLink>
                <NavLink className="font-semibold">FAQs</NavLink>
                <NavLink className="font-semibold">Compare</NavLink>
                <NavLink className="font-semibold">Wishlist</NavLink>
            </div>
            <div className='flex flex-col items-start'>
                <span className="font-bold text-lg underline">About Us</span>
                <NavLink className="font-semibold">Our service </NavLink>
                <NavLink className="font-semibold">Salary</NavLink>
                <NavLink className="font-semibold">Carrers</NavLink>
                <NavLink className="font-semibold">Compare</NavLink>
                <NavLink className="font-semibold">Compare</NavLink>
            </div>
            <div className='flex flex-col items-start'>
                <span className='font-bold text-lg underline'>Collection</span>
                <NavLink className="font-semibold">Healthy chocolets</NavLink>
                <NavLink className="font-semibold">Breakfast & Cereals</NavLink>
                <NavLink className="font-semibold">Healthy snacks</NavLink>
                <NavLink className="font-semibold">Workout wears</NavLink>
                <NavLink className="font-semibold">Medicine and suppliment</NavLink>
            </div>
        </div>
    )
}

export default Footerpage
