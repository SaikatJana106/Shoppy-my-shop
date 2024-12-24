import React from 'react'
const Contactus = () => {
    return (
        <div className=''>
            <div className='bg-sky-400 h-48'></div>
            <div className='absolute top-16 right-96 bg-white p-10 shadow-lg'>
                    <h1 className='font-bold text-4xl pl-40'>Get in Touch</h1>
                    <p className='text-slate-400 p-2 pl-44'>Let's make a revelution</p>
                    <div className='flex justify-between p-2'>
                        <div className='flex flex-col p-2 w-1/2'>
                            <span className='text-gray-500'>First Name</span>
                            <input className='border border-gray-300 rounded-sm p-1 ' placeholder='Enter your first name' type="text" />
                        </div>
                        <div className='flex flex-col p-2 w-1/2'>
                            <span className='text-gray-500'>Last Name</span>
                            <input className='border border-gray-300 rounded-sm p-1' placeholder='Enter your last name' type="text" />
                        </div>
                    </div>
                    <div className='flex justify-between p-2'>
                        <div className='flex flex-col p-2 w-1/2'>
                            <span className='text-gray-500'>Email</span>
                            <input className='border border-gray-300 rounded-sm p-1' placeholder='Enter your email' type="mail" />
                        </div>
                        <div className='flex flex-col p-2 w-1/2'>
                            <span className='text-gray-500'>Phone number</span>
                            <input className='border border-gray-300 rounded-sm p-1' placeholder='Enter your phone number' type="tel" />
                        </div>
                    </div>
                    <div className='flex flex-col p-2'>
                        <span className='text-gray-500'>What Do You Have In Mind</span>
                        <textarea
                            className='w-full h-40 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:top-0 placeholder:text-left'
                            placeholder='Please enter your query'
                            id=""
                        ></textarea>
                    </div>

                    <button className='bg-sky-500 px-60 py-2 mt-8 text-gray-100 font-bold'> Submit</button>
                </div>

            </div>
    )
}

export default Contactus
