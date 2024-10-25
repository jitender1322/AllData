import React, { useEffect, useRef } from 'react'

export default function UseRefExp1() {
    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            inputRef.current.focus();
        }, 3000)
    }, [])

    return (
        <div>
            <h1>UseRefExp1</h1>
            <input type="text" ref={inputRef} />
        </div>
    )
}
