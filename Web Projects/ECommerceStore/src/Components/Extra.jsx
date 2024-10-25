import React, { useEffect, useState } from 'react'
import item1 from '../Images/Item1.png'
import item2 from '../Images/Item2.png'
import item3 from '../Images/Item3.png'

export default function Extra() {

    useEffect(() => {
        fetchApi();
    }, [])
    const [data, setData] = useState([]);

    const fetchApi = async () => {
        let respose = await fetch("https://freetestapi.com/api/v1/products")
        let res = await respose.json();
        setData(res)
    }
    return (
        <div>
            <div className='flex justify-evenly mt-16'>
                <img src={item1} alt="" />
                <img src={item2} alt="" />
                <img src={item3} alt="" />
            </div>
            <div className="flex justify-center flex-wrap">
                {data ? (
                    data.map((item, index) => {
                        return (
                            <div key={index} className="bg-white rounded-sm shadow-md w-1/4 m-5 transition-all relative">
                                <img src={item.image} class="w-full h-48 object-cover" />
                                <div class="p-5">
                                    <h2 class="text-2xl mb-3 text-gray-500">{item.name}</h2>
                                    <p class="text-xl text-pink-400 mb-3">{item.price}$</p>
                                    <p class="text-lg text-pink-500 mb-3">{item.description}</p>
                                    <p class="text-xl text-pink-500 mb-3">{item.category}</p>
                                    <div class="flex justify-between items-center" >
                                        <button class="py-3 px-8 my-5 text-white bg-dark">Add to cart </button>
                                        <button class="py-3 px-8 my-5 text-white bg-dark" >Add to fav </button>
                                    </div>
                                    <div class="absolute w-full left-0 px-6 bottom-1" >
                                        <div class="flex justify-between">
                                            <span class="text-gray-400">{item.rating}</span>
                                            <span class="text-pink-400">{item.brand}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>Loading</p>
                )}
            </div>
        </div>
    )
}
