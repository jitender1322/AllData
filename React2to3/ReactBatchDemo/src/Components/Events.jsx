import React, { useState } from 'react'

export default function Events() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [sub, setSub] = useState("");

    const [isVisible, setIsVisible] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("form submitted");
        let obj = {
            name: name,
            subject: sub
        }
        console.log(obj);

    }
    return (
        <div>
            <h1>onClick,onChange,onSubmit</h1>

            {
                isVisible && <h1>bye</h1>
            }

            <button onClick={() => setIsVisible(!isVisible)} >click</button>

        </div>
    )
}
