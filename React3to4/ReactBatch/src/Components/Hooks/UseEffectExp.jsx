import React, { useEffect, useState } from 'react'

export default function UseEffectExp() {
    const [num, setNum] = useState(0)
    useEffect(() => {
        // mounting
        return console.log("mounting");
    }, [num])
    return (
        <div>
            <h1>UseEffectExp</h1>
            <h1>{num}</h1>
            <button onClick={() => setNum(num + 1)} >+</button>
        </div>
    )
}
