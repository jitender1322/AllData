import React, { useState } from 'react'
import "../home.css"

export default function Home() {
    const [name, setName] = useState('');
    const [sub, setSub] = useState('');
    const [email, setEmail] = useState("");

    const formHandler = (e) => {
        e.preventDefault();
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const formStyle = {
        "backgroundColor": "pink"
    }
    return (
        <div>
            <form style={formStyle} onSubmit={formHandler} >
                <input type="text" placeholder='Enter your Name' onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='Enter your Subject' onChange={(e) => setSub(e.target.value)} />
                <input type="text" placeholder='Enter your Email' onChange={(e) => handleEmail(e)} />
                <input type="submit" />
            </form>
            <p>{name}</p>
            <p>{sub}</p>
            <p>{email}</p>
        </div>
    )
}
