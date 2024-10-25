import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Delete({ data, setData }) {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const handleDelete = () => {
        let deleteItem = data.filter((item) => item.id != id);
        setData(deleteItem);
        navigate("/")
    }
    return (
        <div>
            <h1>Delete</h1>
            <input type="text" placeholder='Enter id' onChange={(e) => setId(e.target.value)} />
            <button onClick={handleDelete} >Delete</button>
        </div>
    )
}
