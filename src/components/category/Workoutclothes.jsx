import React from 'react'
import food from '../../media/kelos.png'
const Workoutclothes = () => {
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
    <div>
      {/* Header Section */}
      <div className="flex justify-between px-10 max-md:px-2">
        <span className="font-extrabold text-4xl max-md:text-lg">Workout wears</span>
        <button className="text-green-500 font-bold text-xl max-md:text-sm">See more</button>
      </div>

      {/* Slider Section */}
      <div className="overflow-x-auto whitespace-nowrap pt-5 px-2 no-scrollbar">
        <div className="flex gap-6">
          {bestsellers.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 p-4 rounded-lg"
            >
              <div className="bg-gray-200 w-44 h-44 rounded-2xl overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <span className="font-bold mt-2 block">{item.name}</span>
              <span className="font-semibold text-green-500 block">Rs {item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Workoutclothes
