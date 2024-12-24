import React from 'react';
import food from '../../src/media/product_18.png';

const Seemore = () => {
    const bestsellers = [
        { id: 1, name: 'Vanilla Flavor Calose', price: 30, image: food },
        { id: 2, name: 'Chocolate Delight', price: 50, image: food },
        { id: 3, name: 'Strawberry Blast', price: 40, image: food },
        { id: 4, name: 'Mango Tango', price: 35, image: food },
        { id: 5, name: 'Blueberry Bliss', price: 45, image: food },
        { id: 6, name: 'Pineapple Pop', price: 30, image: food },
        { id: 7, name: 'Vanilla Flavor Calose', price: 30, image: food },
        { id: 8, name: 'Chocolate Delight', price: 50, image: food },
        { id: 9, name: 'Strawberry Blast', price: 40, image: food },
        { id: 10, name: 'Mango Tango', price: 35, image: food },
        { id: 11, name: 'Blueberry Bliss', price: 45, image: food },
        { id: 12, name: 'Pineapple Pop', price: 30, image: food },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 p-4 items-center justify-center gap-4 ">
            {bestsellers.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col items-center text-center space-y-2"
                >
                    <img className="h-80 w-64 object-contain" src={item.image} alt={item.name} />
                    <div className="font-semibold text-xl whitespace-nowrap overflow-hidden text-ellipsis max-md:text-base">
                        {item.name}
                    </div>

                    <div className="text-gray-700 font-medium">${item.price}</div>
                    <button className="w-3/4 py-2  bg-orange-500 text-white rounded-md font-semibold ">Buy now</button>
                </div>
            ))}
        </div>

    );
};

export default Seemore;
