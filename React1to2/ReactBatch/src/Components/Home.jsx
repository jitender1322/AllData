import React, { useEffect, useState } from 'react'

export default function Home() {
    const [record, setRecord] = useState(null);
    useEffect(() => {
        fetch("http://localhost:5000/posts")
            .then(response => response.json())
            .then(data => setRecord(data))
    }, [])

    const addData = () => {
        let data = { "title": "another title", "views": 200 };
        fetch("http://localhost:5000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

            .then(response => response.json())
            .then(data => setRecord([...record, data]))
    }

    const deleteData = (id) => {
        fetch(`http://localhost:5000/posts/${id}`, {
            method: "DELETE",
        })
            .then((data) => {
                let remain = record.filter((item) => item.id !== id);
                setRecord(remain)
            })
    }

    const updateData = (id) => {
        let data = { "title": "Updated title", "views": "Updated views" };
        fetch(`http://localhost:5000/posts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => {
                let updatedData = record.map((item) => item.id == id ? data : item);
                setRecord(updatedData);
            })
    }
    return (
        <div>
            <h1>Json Server Data</h1>
            {
                record
                    ?
                    record.map((e, i) => {
                        return <div key={i}>
                            <p>  {e.id} </p>
                            <p>  {e.title} </p>
                            <p>  {e.views} </p>
                            <button onClick={() => updateData(e.id)} >Update</button>
                            <button onClick={() => deleteData(e.id)}>Delete</button>
                        </div>
                    })
                    :
                    <p>Loading</p>
            }
            <button onClick={addData} >Add Data</button>
        </div>
    )
}
