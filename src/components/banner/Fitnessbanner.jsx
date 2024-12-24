import React from 'react';
import running2 from '../../media/running2.png';
import streach from '../../media/streach.png';

const Fitnessbanner = () => {
    return (
        <div className="p-4">
            <div className="bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl relative overflow-hidden p-20 max-md:p-6 max-lg:p-5">
                <div className="w-1/2">
                    <h1 className="text-gray-100 font-bold text-5xl pb-3 max-md:text-xl ">
                        Don't miss out Workout Wears
                    </h1>
                    <button className="bg-gray-100 rounded-full px-4 py-1 mt-4">View more</button>
                </div>
                <img
                    className="absolute top-0 right-20 max-md:right-0 max-lg:h-48 max-lg:hidden"
                    src={running2}
                    alt="Person running"
                />
                <img
                    className="absolute -top-7 -right-20 max-md:top-0"
                    src={streach}
                    alt="Person stretching"
                />
            </div>
        </div>
    );
};

export default Fitnessbanner;
