import React, { useState } from 'react'

export default function ControlledCom() {
    const [name, setName] = useState("");
    const [sub, setSub] = useState("");
    const [city, setCity] = useState("");

    const [data, setData] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = { name, sub, city }
        setData([...data, obj])
        setName("");
        setSub("")
        setCity("")
    }

    return (
        <div>
            <h1>ControlledCom</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder='enter name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='enter subject' value={sub} onChange={(e) => setSub(e.target.value)} />
                <input type="text" placeholder='enter city' value={city} onChange={(e) => setCity(e.target.value)} />
                <button type='submit' > submit</button>
            </form>
            <table border='1' width="90%" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data &&
                        data.map((e, i) => {
                            return <tr key={i} >
                                <td>{e.name}</td>
                                <td>{e.sub}</td>
                                <td>{e.city}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
