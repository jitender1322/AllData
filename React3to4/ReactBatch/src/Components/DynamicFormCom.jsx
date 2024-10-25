import React, { useState } from 'react'

export default function DynamicFormCom() {
    const [cat, setCat] = useState("")

    const [name, setName] = useState("");
    const [pass, setPass] = useState("")
    const [mail, setMail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [error, setError] = useState("")

    const phoneRegex = /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!phoneRegex.test(phoneNumber)) {
            setError("Phone number is incorrect")
        } else {
            setError("")
        }
    }

    return (
        <div>
            <h1>DynamicFormCom</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder='enter your name' onChange={(e) => setName(e.target.value)} />
                <input type="password" placeholder='enter your password' onChange={(e) => setPass(e.target.value)} />
                <input type="email" placeholder='enter your email' onChange={(e) => setMail(e.target.value)} />
                <input type="text" placeholder='enter your phone number' onChange={(e) => setPhoneNumber(e.target.value)} />
                {error && <span style={{ color: "red" }} >{error}</span>}
                <select onChange={(e) => setCat(e.target.value)} >
                    <option hidden>Category</option>
                    <option value={"clothes"} >Cloths</option>
                    <option value={"shoes"} >Shoes</option>
                    <option value={"electronics"}>Electronics</option>
                </select>
                {cat == "clothes" && <input type="text" placeholder='enter return period' />}
                <button type='submit' >submit</button>
            </form>
        </div>
    )
}
