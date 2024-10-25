import React from 'react'

export default function ListKey() {
    const arr = ["apple", "mango", "graps", "banana", "watermelon"];
    return (
        <>
            <h1>ListKey</h1>
            {
                arr.map((e, i) => {
                    return <p key={i} >{e}</p>
                })
            }
        </>
    )
}
