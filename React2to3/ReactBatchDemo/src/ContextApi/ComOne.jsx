import React, { createContext, useState } from 'react'
import ComTwo from './ComTwo'

export const myContext = createContext();

export default function ComOne() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>ComOne</h1>
            <myContext.Provider value={count} >
                <ComTwo  />
            </myContext.Provider>
        </div>
    )
}
