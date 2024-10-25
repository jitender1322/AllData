import React from 'react'
import photo from '../Images/Photo.png'

export default function MainBanner() {
    return (
        <div className='flex h-myheight' >
            <div className='bg-light w-1/2 h-full py-28 mt-11 pl-28' >
                <h1 className='text-text-cl text-7xl mb-5 font-semibold' >Spring Sale</h1>
                <h4 className='text-text-cl text-6xl'>Up to -40%</h4>
                <button className='py-3 px-10 my-10 text-white bg-dark'>See Offer</button>
            </div>
            <div className='h-full w-1/2 mt-11' style={{ background: `url(${photo})` }} >
            </div>
        </div>
    )
}
