import React, { useState } from 'react'

export default function Validation() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [error, setError] = useState("");
    const [error2, setError2] = useState("");


    const handelSubmit = (e) => {
        e.preventDefault();
        if (name == "") {
            setError("input feild is empty")
        } else {
            setError("")
        }
        if (!email.includes("@")) {
            setError2("email is not valid")
        } else {
            setError2("")
        }
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
                <span>{error}</span>
                <input type="text" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
                <span>{error2}</span>
                <input type="submit" />
            </form>
        </div>
    )
}
