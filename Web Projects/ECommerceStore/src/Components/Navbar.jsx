import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav >
                <div className='flex justify-between px-10 py-1'>
                    <h2 className='m-0 p-0 font-bold text-3xl '>SHOP<span className='font-semibold' >Here</span> </h2>
                    <ul className='flex gap-5 items-center' >
                        <li><a className='text-sm' href="#">0371 525 777</a></li>
                        <li><a className='text-sm' href="#">Help</a></li>
                        <li><a className='text-sm' href="#">Account</a></li>
                    </ul>
                </div>
                <div className='flex justify-between px-10 py-1 mt-5'>
                    <ul className='flex gap-5 items-center' >
                        <li><a className='text-base' href="#">Shops</a></li>
                        <li><a className='text-base' href="#">Offers</a></li>
                        <li><a className='text-base' href="#">About Us</a></li>
                        <li><a className='text-base' href="#">Contact</a></li>
                    </ul>
                    <ul className='flex gap-5 items-center' >
                        <li><a className='text-base' href="#"><i className="fa-regular fa-heart"></i></a></li>
                        <li><a className='text-base' href="#"><i className="fa-solid fa-cart-shopping"></i></a></li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}
