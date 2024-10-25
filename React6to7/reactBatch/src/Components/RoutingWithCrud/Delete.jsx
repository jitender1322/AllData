import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Delete({ record, setRecord }) {
    const [num, setNum] = useState(null);
    const navigate = useNavigate();
    const handleDelete = () => {
        let data = record.filter((item) => item.id != num);
        setRecord(data);
        navigate("/")
    }
    return (
        <div>
            <input type="number" placeholder='enter id' onChange={(e) => setNum(e.target.value)} />
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}
