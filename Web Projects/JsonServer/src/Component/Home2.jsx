import React, { useEffect, useState } from 'react'

export default function Home2() {
    const [record, setRecord] = useState(null);
    useEffect(() => {
        fetch("http://localhost:5000/posts")
            .then(response => response.json())
            .then(data => setRecord(data));
    }, [])

    const addData = () => {
        let obj = { "title": "New Added Post", "content": "This is a new added post." }
        fetch("http://localhost:5000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(data => setRecord([...record, data]));
    }
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/posts/${id}`, {
            method: "DELETE"
        }).then(() => {
            const reamining = record.filter((item) => item.id !== id);
            setRecord(reamining)
        })
    }

    const updateData = (id) => {
        let obj = { "title": "New Updated Post", "content": "This is a new updated post." }
        fetch(`http://localhost:5000/posts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then((data) => {
                const updatedData = record.map((e, i) => e.id == id ? data : e);
                setRecord(updatedData)
            })
    }

    return (
        <div>
            <h1>Json server</h1>
            {
                record ?
                    record.map((e, i) => {
                        return <ul key={i}>
                            <li> {e.id} </li>
                            <li> {e.title} </li>
                            <li> {e.content} </li>
                            <li><button onClick={() => handleDelete(e.id)} >Delete</button></li>
                            <li><button onClick={() => updateData(e.id)} >Update</button></li>
                        </ul>
                    })
                    :
                    <p>Loading</p>
            }
            <button onClick={addData} >AddData</button>
        </div>
    )
}
