import React, { useState } from 'react'

export default function Filter() {
    let obj = [
        { name: "mobile", category: "electronics" },
        { name: "shirt", category: "clothing" },
        { name: "sunglasses", category: "fashion" },
        { name: "shoes", category: "footwear" },
    ]

    const [data, setData] = useState([]);
    const [inp, setInp] = useState("");

    const filterdData = obj.filter((item) => {
        return inp.includes(item.name);
    })
    return (
        <div>
            <h1>Filter</h1>
            <input type="text" placeholder='search' onChange={(e) => setInp(e.target.value)} />
            {
                filterdData.map((e, i) => {
                    return <div key={i}>
                        <p>{e.name}</p>
                    </div>
                })
            }
        </div>
    )
}
