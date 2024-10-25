import React, { useEffect, useState } from 'react'

export default function Crud() {

    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [city, setCity] = useState("");

    const [record, setRecord] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("Student")) || [];
        setRecord(data)
    }, [])


    const handleAdd = () => {
        let user = { id: Date.now(), name, subject, city }
        let oldRecord = JSON.parse(localStorage.getItem("Student")) || []
        if (editIndex) {
            let singleData = record.find((item) => item.id == editIndex);
            singleData.id = editIndex
            singleData.name = name
            singleData.subject = subject
            singleData.city = city
            localStorage.setItem("Student", JSON.stringify(record))
            setEditIndex(null)
        } else {
            oldRecord.push(user)
            setRecord(oldRecord)
            localStorage.setItem("Student", JSON.stringify(oldRecord))
        }
        setName("");
        setSubject("");
        setCity("");
    }

    const handleDelete = (id) => {
        let deleteData = record.filter((item) => item.id != id);
        setRecord(deleteData)
        localStorage.setItem("Student", JSON.stringify(deleteData));
    }

    const handleEdit = (id) => {
        let singleData = record.find((item) => item.id == id);
        setName(singleData.name);
        setSubject(singleData.subject)
        setCity(singleData.city)
        setEditIndex(id)
    }

    sessionStorage.setItem("student", "sumit")

    return (
        <div>
            <h1>CRUD With Local Storage</h1>

            <input type="text" value={name} placeholder='enter name' onChange={(e) => setName(e.target.value)} />
            <input type="text" value={subject} placeholder='enter subject' onChange={(e) => setSubject(e.target.value)} />
            <input type="text" value={city} placeholder='enter city' onChange={(e) => setCity(e.target.value)} />

            <button onClick={handleAdd} >{editIndex ? "Update data" : "Add Data"}</button>

            <table border='1' width="50%" >
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>subject</th>
                        <th>city</th>
                        <th colSpan={2} >Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record ?
                            record.map((e, i) => {
                                return <tr key={i} >
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.subject}</td>
                                    <td>{e.city}</td>
                                    <td><button onClick={() => handleEdit(e.id)}  >Edit</button></td>
                                    <td><button onClick={() => handleDelete(e.id)} >Delete</button></td>
                                </tr>
                            })
                            :
                            ""
                    }
                </tbody>
            </table>
        </div>
    )
}
