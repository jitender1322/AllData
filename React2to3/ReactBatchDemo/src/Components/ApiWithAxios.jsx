import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ApiWithAxios() {
    const [record, setRecord] = useState([])

    useEffect(() => {
        fetchApi()
    }, [])

    const fetchApi = async () => {
        let response = await axios.get("http://localhost:5000/posts")
        console.log(response.data);
        setRecord(response.data)
    }

    const addData = async () => {
        let addResponse = await axios.post("http://localhost:5000/posts", { "id": "5", "title": "another title", "views": 500 })
        console.log(addResponse);
        setRecord([...record, addResponse.data])
    }
    const deleteData = async (id) => {
        console.log(id);
        // let deleteResponse = await axios.delete(`http://localhost:5000/posts/${id}`)
    }
    const upadateData = async () => {
        let deleteResponse = await axios.put(`http://localhost:5000/posts/${id}`, {})
    }

    return (
        <div>
            <h1>ApiWithAxios</h1>
            <button onClick={addData} >Add Data</button>

            {
                record &&
                record.map((e, i) => {
                    return <ul key={i}>
                        <li>{e.id}</li>
                        <li>{e.title}</li>
                        <li>{e.views}</li>
                        <li><button onClick={() => deleteData(e.id)}>Delete</button></li>
                        <li><button>Edit</button></li>
                    </ul>
                })
            }
        </div>
    )
}
