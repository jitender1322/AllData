import React, { useState } from 'react'

export default function Home() {
    const [name, setName] = useState('')
    const [sub, setSub] = useState('')
    const [record, setRecord] = useState([]);

    const [editIndex, setEditIndex] = useState(null);

    const handleSubmit = () => {
        let obj = { name, sub };
        if (editIndex == null) {
            setRecord([...record, obj]);
        } else {
            let oldRecord = record[editIndex];
            oldRecord.name = name;
            oldRecord.sub = sub;
        }

        setName('');
        setSub('');
    }

    const handleDelete = (index) => {
        let newRecord = record.filter((e, i) => i != index);
        setRecord(newRecord);
    }

    const handleEdit = (index) => {
        let oldRecord = record[index];
        setName(oldRecord.name);
        setSub(oldRecord.sub);
        setEditIndex(index);
    }

    return (
        <div>
            <input value={name} type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)} />
            <input value={sub} type="text" placeholder='Enter Subject' onChange={(e) => setSub(e.target.value)} />
            <button onClick={handleSubmit}>{editIndex !== null ? 'Update' : 'Submit'}</button>

            {record ?
                record.map((e, i) => {
                    return <div key={i}>
                        <h4>{e.name}</h4>
                        <h4>{e.sub}</h4>
                        <button onClick={() => handleEdit(i)} >Edit</button>
                        <button onClick={() => handleDelete(i)} >Delete</button>
                    </div>
                })
                : <p>Loading</p>}
        </div>
    )
}
