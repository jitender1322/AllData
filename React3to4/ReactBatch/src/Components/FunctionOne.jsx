import React, { useState } from 'react'
import FunctionTwo from './FunctionTwo'

export default function FunctionOne() {
    const [num, setNum] = useState(0)
    return (
        <div>
            <h1>FunctionOne</h1>
            <button onClick={() => setNum(num + 1)} >+</button>
            <FunctionTwo num={num} name={"rahul"} />
        </div>
    )
}
