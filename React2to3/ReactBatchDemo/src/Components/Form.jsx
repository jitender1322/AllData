import React, { useState } from 'react'

export default function Form() {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [category, setCategory] = useState("")

    const [nameErr, setNameErr] = useState("");
    const [subjectErr, setSubjectErr] = useState("");
    const [emailErr, setEmailErr] = useState("");

    const handelSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            console.log("name required");
            setNameErr("name required")
        } else {
            setNameErr("")
        }
        if (!subject) {
            console.log("subject required");
            setSubjectErr("subject required")
        } else {
            setSubjectErr("")
        }
        if (!email) {
            console.log("email required");
            setEmailErr("email required")
        } else if (!email.includes("@")) {
            setEmailErr("email is not valid")
        } else if (!/^ [\w -\.] + @([\w -] +\.) +[\w -]{ 2, 4 }$/.test(email)) {
            setEmailErr("email is not regex valid")
        } else {
            setEmailErr("")
        }
    }
    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={(e) => handelSubmit(e)} >
                <input required type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} />
                <span>{nameErr}</span>
                <input type="text" placeholder='Enter Your Subject' onChange={(e) => setSubject(e.target.value)} />
                <span>{subjectErr}</span>
                <input type="text" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
                <span>{emailErr}</span>
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="">category</option>
                    <option value="electric">Electric</option>
                    <option value="clothing">Clothing</option>
                </select>
                {
                    category == "electric" && <input type="text" placeholder='Enter warranty' />
                }
                {
                    category == "clothing" && <input type="text" placeholder='Enter return period' />
                }
                <br />
                <button type='submit' style={{ margin: "20px 0" }} >Submit</button>
            </form>
        </div>
    )
}
