import React from 'react'
import manpic from '../../media/product_18.png'
import womanpic from '../../media/product_4.png'
import kidpic from '../../media/product_28.png'
const Categoryoption = () => {
    return (
        <div className='flex flex-col items-center'>
            <h1 className='font-bold text-4xl underline'>Choose By Category</h1>
            <div className='flex w-full p-4 justify-center '>
                <div className='mr-7 flex flex-col items-center'>
                    <img className='rounded-full object-cover h-28 w-28 max-sm:h-24 max-sm:w-24' src={manpic} alt="" />
                    <span className='font-semibold'>Man</span>
                </div>
                <div className='mr-7 flex flex-col items-center'>
                    <img className='rounded-full object-cover h-28 w-28  max-sm:h-24 max-sm:w-24' src={womanpic} alt="" />
                    <span className='font-semibold'>Woman</span>
                </div>
                <div className='mr-7 flex flex-col items-center'>
                    <img className='rounded-full object-cover h-28 w-28  max-sm:h-24 max-sm:w-24' src={kidpic} alt="" />
                    <span className='font-semibold'>Kid</span>
                </div>
            </div>
        </div>
    )
}

export default Categoryoption
