import React from 'react';
import kid_toy from '../../media/kids_toy.png';

const Newarrivals = () => {
    return (
        <div className="space-y-6 md:space-y-8 p-4">
            
            {/* Kid's Toy Section */}
            <div className="flex flex-wrap md:flex-nowrap bg-gradient-to-r from-orange-300 to-yellow-400 rounded-2xl relative overflow-hidden p-28  max-md:p-0 max-lg:p-5 items-center max-xl:p-10">
                <div className="w-1/2">
                    <h1 className="text-gray-100 font-bold text-5xl pb-3 max-md:text-xl ">
                        Keep an eye on kids' fun  coming soon...
                    </h1>
                    <button className="bg-gray-100 text-orange-500 rounded-full px-6 py-2 max-lg:px-2 max-lg:py-1 transition duration-300 hover:bg-gray-200">
                        View More
                    </button>
                </div>
                <div className="object-contain absolute top-0  right-0 w-1/2  max-md:top-10">
                    <img
                        className=""
                        src={kid_toy}
                        alt="Kid's Toy"
                    />
                </div>
            </div>
        </div>
    );
};

export default Newarrivals;
