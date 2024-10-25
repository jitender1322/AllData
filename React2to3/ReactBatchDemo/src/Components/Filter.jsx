import React, { useState } from 'react'

export default function Filter() {
    const [name, setName] = useState('');
    const arr = [
        { name: "sachin", subject: "react" },
        { name: "puneet", subject: "react" },
        { name: "vivek", subject: "react" },
        { name: "khushal", subject: "react" },
        { name: "rutul", subject: "react" },
        { name: "rahul", subject: "react" },
        { name: "ruchit", subject: "react" },
    ]

    const data = arr.filter((item) => item.name.includes(name));

    return (
        <div>
            <h1>Filter</h1>
            <input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
            {
                data &&
                data.map((e, i) => {
                    return <ul key={i} >
                        <li>{e.name}</li>
                        <li>{e.subject}</li>
                    </ul>
                })
            }
        </div>
    )
}
