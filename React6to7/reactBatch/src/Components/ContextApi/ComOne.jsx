import React, { createContext } from 'react'
import ComThree from './ComThree';

export const myContext = createContext()

export default function ComOne() {
    let data = "student";
    return (
        <div>
            <h1>ComOne</h1>
            <myContext.Provider value={data} >
                <ComThree />
            </myContext.Provider>
        </div>
    )
}
