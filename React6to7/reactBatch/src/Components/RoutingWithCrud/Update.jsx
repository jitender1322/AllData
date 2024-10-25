import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Update({ record, setRecord }) {
    const [num, setNum] = useState(null);
    const [names, setNames] = useState("");
    const navigate = useNavigate();
    const handleUpdate = () => {
        console.log(record);
        let data = record.map((item) => {
            if (item.id == num) {
                item.id = num,
                    item.name = names
            } else {
                item
            }
        })
    }
    return (
        <div>
            <h1>Update</h1>
            <input type="number" placeholder='enter id' onChange={(e) => setNum(e.target.value)} />
            <input type="text" placeholder='enter name' onChange={(e) => setNames(e.target.value)} />
            <button onClick={handleUpdate}>update</button>
        </div>
    )
}
