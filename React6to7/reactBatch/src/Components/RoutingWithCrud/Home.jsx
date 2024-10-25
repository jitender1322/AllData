import React from 'react'

export default function Home({ record }) {
    return (
        <div>
            <h1>Home</h1>
            {
                record.map((e, i) => {
                    return <ul key={i} >
                        <li>{e.id}</li>
                        <li>{e.name}</li>
                    </ul>
                })
            }
        </div>
    )
}
