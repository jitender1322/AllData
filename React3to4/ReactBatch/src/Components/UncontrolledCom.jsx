import React, { useRef, useState } from 'react'

export default function UncontrolledCom() {
    const [data, setData] = useState([])
    const nameRef = useRef();
    const cityRef = useRef();
    const subRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value, cityRef.current.value, subRef.current.value);
        setData([...data, nameRef.current.value, cityRef.current.value, subRef.current.value])
    }

    return (
        <div>
            <h1>Uncontrolled Component</h1>
            <form onSubmit={(e) => handleSubmit(e)} >
                <input type="text" placeholder='Enter your name' ref={nameRef} />
                <input type="text" placeholder='Enter your city' ref={cityRef} />
                <input type="text" placeholder='Enter your subject' ref={subRef} />
                <button type='submit' >Submit</button>
            </form>
            {
                data.map((e, i) => {
                    return <p key={i} > {e}</p>
                })
            }
        </div>
    )
}
