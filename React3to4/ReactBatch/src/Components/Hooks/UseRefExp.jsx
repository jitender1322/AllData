import React, { useRef } from 'react'

export default function UseRefExp() {
    const inputRef = useRef();
    const handleClick = () => {
        setTimeout(() => {
            inputRef.current.value;
        }, 2000);
    }
    return (
        <div>
            <h1>UseRefExp</h1>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick} >click</button>
        </div>
    )
}
