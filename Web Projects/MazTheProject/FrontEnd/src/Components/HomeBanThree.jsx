import React from 'react'

export default function HomeBanThree() {
    return (
        <>
            <div className='flex w-9/12 gap-5 pt-16 m-auto font-inter'>
                <div className='w-7/12' >
                    <img src="./HomeBanThree.png" alt="" /></div>
                <div className='w-5/12 ml-16' >
                    <span className='text-sm text-gray-400'>BENEFITS</span>
                    <h2 className='text-3xl font-semibold my-3'>Happening cities</h2>
                    <div className='mt-8'>
                        <button className='px-3 text-sm py-1 my-2 bg-green-100 text-green-800 rounded-2xl font-medium' >Advertising</button>
                        <h4 className='font-semibold text-xl text-gray-800'>Cost-effective advertising</h4>
                        <p className='text-gray-500 mt-1'>With a free listing, you can advertise your rental with no upfront costs</p>
                    </div>
                    <div className='mt-5'>
                        <button className='px-3 text-sm py-1 my-2 bg-blue-100 text-blue-800 rounded-2xl font-medium' >Exposure </button>
                        <h4 className='font-semibold text-xl text-gray-800'>Reach millions with Chisfis</h4>
                        <p className='text-gray-500 mt-1'>Millions of people are searching for unique places to stay around the world</p>
                    </div>
                    <div className='mt-5'>
                        <button className='px-3 text-sm py-1 my-2 bg-pink-100 text-pink-800 rounded-2xl font-medium' >Secure </button>
                        <h4 className='font-semibold text-xl text-gray-800'>Secure and simple</h4>
                        <p className='text-gray-500 mt-1'>A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online</p>
                    </div>
                </div>
            </div>
        </>
    )
}
