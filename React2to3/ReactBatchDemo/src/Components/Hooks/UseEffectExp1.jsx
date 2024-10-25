import React, { useEffect, useState } from 'react'

export default function UseEffectExp1() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("use effect running");
    }, [count])
    return (
        <div>
            <h1>UseEffectExp1</h1>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)} >add</button>
        </div>
    )
}
