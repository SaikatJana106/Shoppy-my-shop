import React from 'react';
import banner1 from '../../media/winter_img.png';
import banner2 from '../../media/baner2.png';

const Middlebanner = () => {
    return (
        <div className="flex flex-wrap  p-2">
            {/* Banner 1 */}
            <div className="w-1/2 p-2 max-lg:w-full">
                <div className="bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl relative overflow-hidden p-4 max-md:p-0 max-lg:p-5">
                    <div className="w-1/2 p-4 ">
                        <h1 className="text-gray-100 font-bold text-3xl  max-md:text-xl max-lg:text-5xl">Winter is here</h1>
                        <h1 className="text-gray-100 font-bold text-xl ">Don't miss out offers</h1>
                        <button className="bg-gray-100 rounded-full px-4 py-1 mt-4">View more</button>
                    </div>
                    <img
                        className="object-contain absolute top-0  right-0 w-1/2  max-md:top-10"
                        src={banner1}
                        alt="Winter Offers"
                    />
                </div>
            </div>

            {/* Banner 2 */}
            <div className="w-1/2 p-2 max-lg:w-full">
                <div className="bg-gradient-to-r from-fuchsia-600 to-pink-400 rounded-2xl relative overflow-hidden p-10 max-md:p-4 max-lg:p-5">
                    <div className="w-1/2 p-4">
                        <h1 className="text-gray-100 font-bold text-3xl max-md:text-xl max-lg:text-5xl">
                            Don't miss out  Deals
                        </h1>
                    </div>
                    <img
                        className="object-contain absolute top-0 right-0 w-1/2 max-md:top-8"
                        src={banner2}
                        alt="Grocery Deals"
                    />
                </div>
            </div>
        </div>
    );
};

export default Middlebanner;
