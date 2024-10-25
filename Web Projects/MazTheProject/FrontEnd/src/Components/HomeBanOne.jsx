import React from 'react'

export default function HomeBanOne() {
    return (
        <>
            <div className='relative my-16'>
                <div className='flex w-9/12 m-auto my-16 gap-5 font-inter' >
                    <div className='w-1/2'>
                        <h1 className='text-7xl font-semisemibold mt-10' >Hotel, car & experiences </h1>
                        <p className='mt-10 text-textColor'>Accompanying us, you have a trip full of experiences. With Chisfis, booking accommodation, resort villas, hotels</p>
                        <button className='py-2 px-4 text-white mt-5 bg-bgColor rounded-xl' ><i class="fa-solid fa-magnifying-glass mr-2"></i>  Start your search</button>
                    </div>
                    <div className='w-1/2'>
                        <img src="HomeBanOne.png" className='w-11/12' alt="" />
                    </div>
                </div>
                <div className='absolute items-center top-3/4 left-[17%] flex rounded-full bg-white shadow-xl justify-between my-5 w-8/12 m-auto px-10 py-2'>
                    <div className='flex gap-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clipRule="evenodd" />
                        </svg>
                        <div>
                            <h4 className='font-semibold' >Location</h4>
                            <span className='text-light text-sm'>Where are you going?</span>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z" clipRule="evenodd" />
                        </svg>
                        <div>
                            <h4 className='font-semibold' >Check in</h4>
                            <span className='text-light text-sm'>Add Date</span>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z" clipRule="evenodd" />
                        </svg>
                        <div>
                            <h4 className='font-semibold' >Check out</h4>
                            <span className='text-light text-sm'>Add Date</span>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                            <path d="M8.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 13c.552 0 1.01-.452.9-.994a5.002 5.002 0 0 0-9.802 0c-.109.542.35.994.902.994h8ZM12.5 3.5a.75.75 0 0 1 .75.75v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0v-1h-1a.75.75 0 0 1 0-1.5h1v-1a.75.75 0 0 1 .75-.75Z" />
                        </svg>
                        <div>
                            <h4 className='font-semibold' >Guests</h4>
                            <span className='text-light text-sm'>Add guests</span>
                        </div>
                    </div>
                    <div className='flex items-center justify-center  text-white w-10 h-10 rounded-full bg-bgColor'>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
