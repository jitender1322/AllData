import React, { useEffect, useState } from 'react'

export default function Crud() {

    useEffect(() => {
        let existingData = JSON.parse(localStorage.getItem("Students")) || [];
        setData(existingData)
    }, [])

    const [name, setName] = useState("");
    const [sub, setSub] = useState("");
    const [editIndex, setEditIndex] = useState(null)

    const [data, setData] = useState([]);

    const handleSubmit = () => {
        let obj = {
            name: name,
            subject: sub
        }
        if (editIndex) {
            let singleData = data[editIndex];
            singleData.name = name
            singleData.subject = sub

            localStorage.setItem("Students", JSON.stringify([...data]))
            setEditIndex(null)
        } else {
            setData([...data, obj])
            localStorage.setItem("Students", JSON.stringify([...data, obj]))
        }
        setName("")
        setSub("")
    }
    const handleDelete = (index) => {
        let remainingData = data.filter((e, i) => i !== index);
        setData(remainingData);
        localStorage.setItem("Students", JSON.stringify(remainingData))
    }

    const handleEdit = (index) => {
        let singleData = data[index]
        setName(singleData.name)
        setSub(singleData.subject)

        setEditIndex(index);
    }
    return (
        <div>
            {/* Crud - create read update delete */}

            <input type="text" placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='Enter Subject' value={sub} onChange={(e) => setSub(e.target.value)} />
            <button onClick={handleSubmit}>{editIndex ? "Update" : "Submit"}</button>
            <table border="1" width="80%" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Subject</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data ?
                            data.map((e, i) => {
                                return <tr key={i} >
                                    <td>{e.name}</td>
                                    <td>{e.subject}</td>
                                    <td><button onClick={() => handleEdit(i)} >Edit</button></td>
                                    <td><button onClick={() => handleDelete(i)} >Delete</button></td>

                                </tr>
                            }) :
                            <p>Data not found</p>
                    }
                </tbody>
            </table>

        </div>
    )
}
