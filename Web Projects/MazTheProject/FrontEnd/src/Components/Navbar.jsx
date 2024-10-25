import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className='w-full flex justify-around px-16 items-center h-20 bg-white'  >
                <div className='flex gap-7 items-center' >
                    <a href=""><img src="./Logo.png" className='w-5/6' alt="" /></a>
                    <ul className='flex gap-8 font-inter text-textColor'>
                        <li><a className='text-black font-medium bg-Color px-3 py-2 rounded-md' href="">Home</a></li>
                        <li><a href="">Life Style</a></li>
                        <li><a href="">Template</a></li>
                        <li><a href="">Archive Page</a></li>
                        <li><a href="">Other Page</a></li>
                    </ul>
                </div>
                <div className='flex gap-8 items-center' >

                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    </a>
                    <a href="">
                        <button className='bg-bgColor font-inter text-white rounded-xl px-5 py-2 '  >Get Started</button>
                    </a>
                </div>
            </nav>
        </>
    )
}
