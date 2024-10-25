import React, { useState } from 'react'

export default function FormHandling() {
    const [name, setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("form submitted");

    }
    return (
        <div>
            <h1>FormHandling</h1>
            <h1>{name}</h1>
            <button onClick={() => setName("student")} >click</button>
            <form onSubmit={(event) => handleSubmit(event)} >
                <input type="text" />
                <input type="text" />
                <input type="submit" />
            </form>
        </div>
    )
}
