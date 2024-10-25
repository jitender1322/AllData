import React, { useState } from 'react'

export default function ListKeyFrag() {
    const [data, setData] = useState([
        { name: "sachin", subject: "react" },
        { name: "meet", subject: "js" },
        { name: "abhi", subject: "node" },
        { name: "raj", subject: "express" }
    ])
    return (
        <>
            <h1>List Key Fragment</h1>
            {
                data ?
                    data.map((e, i) => {
                        return <ul key={i} >
                            <li>{e.name}</li>
                            <li>{e.subject}</li>
                        </ul>
                    }) :
                    <p>Loading...</p>
            }
        </>
    )
}
