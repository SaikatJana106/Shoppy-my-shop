import React from 'react'
import { Link } from 'react-router-dom';
const Slide = (props) => {
    // const bestsellers = [
    //     { id: 1, name: 'Vanilla Flavor Calose', price: 30, image: food },
    //     { id: 2, name: 'Chocolate Delight', price: 50, image: food },
    //     { id: 3, name: 'Strawberry Blast', price: 40, image: food },
    //     { id: 4, name: 'Mango Tango', price: 35, image: food },
    //     { id: 5, name: 'Blueberry Bliss', price: 45, image: food },
    //     { id: 6, name: 'Pineapple Pop', price: 30, image: food },
    //     { id: 7, name: 'Vanilla Flavor Calose', price: 30, image: food },
    //     { id: 8, name: 'Chocolate Delight', price: 50, image: food },
    //     { id: 9, name: 'Strawberry Blast', price: 40, image: food },
    //     { id: 10, name: 'Mango Tango', price: 35, image: food },
    //     { id: 11, name: 'Blueberry Bliss', price: 45, image: food },
    //     { id: 12, name: 'Pineapple Pop', price: 30, image: food },
    // ];
    return (
        <div className=''>


            <div className="bg-gray-200 w-44 h-44 rounded-2xl overflow-hidden">
                <Link to={`/product/${props.id}`}>
                    <img onClick={() => window.scrollTo(0, 0)} variant="top" src={props.image} />
                </Link>
            </div>
            <span className="font-bold mt-2 block">{props.name}</span>
            <span className="font-semibold text-green-500 block">Rs {props.price}</span>



        </div>
    )
}

export default Slide
