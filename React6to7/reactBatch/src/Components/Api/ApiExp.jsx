import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ApiExp() {
    const [record, setRecord] = useState([])
    const [title, setTitle] = useState("")
    const [view, setView] = useState("")

    useEffect(() => {
        fetchApi();
    }, [])


    const fetchApi = async () => {
        let response = await axios.get("http://localhost:5000/posts");
        console.log(response);
        setRecord(response.data)
    }
    // const fetchApi = async () => {
    //     let response = await fetch("https://fakestoreapi.com/products");
    //     console.log(response);
    //     let res = await response.json();
    //     console.log(res);
    //     setRecord(res);
    // }
    const handleAdd = async () => {
        let addData = await axios.post("http://localhost:5000/posts", { id: record.length + 1, title: title, views: view })
        console.log(addData);
        setRecord([...record, addData.data])
    }
    const handleDelete = async (id) => {
        let deleteData = await axios.delete(`http://localhost:5000/posts/${id}`);
        console.log(deleteData);
    }
    return (
        <div>
            <h1>ApiExp</h1>
            <input type="text" placeholder='title' onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder='views' onChange={(e) => setView(e.target.value)} />
            <button onClick={handleAdd} >Add Data</button>
            {
                record ?
                    record.map((e, i) => {
                        return <div key={i}>
                            <p>{e.title}</p>
                            <p>{e.views}</p>
                            <button onClick={() => handleDelete(e.id)} >delete</button>
                            <button>edit</button>
                        </div>
                    })
                    : <p>Loading</p>
            }
        </div>
    )
}
