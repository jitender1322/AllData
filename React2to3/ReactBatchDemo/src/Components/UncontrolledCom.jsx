import React, { useRef } from 'react'

export default function UncontrolledCom() {
    const inputRef = useRef();
    const handleClick = () => {
        let value = inputRef.current.value
        alert(`input value is ${value}`)
    }
    return (
        <div>
            <h1>UncontrolledCom</h1>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>click</button>
        </div>
    )
}
