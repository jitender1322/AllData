import React, { useEffect, useState } from 'react'

export default function Api2() {
    const [record, setRecord] = useState([]);
    useEffect(() => {
        fetchApi();
    }, [])

    const fetchApi = async () => {

        let response = await fetch('https://jsonplaceholder.typicode.com/todos')
        let res = await response.json()
        setRecord(res);
    }
    return (
        <div>
            {record ?
                record.map((e, i) => {
                    return <div key={i} >
                        <p>{e.id}</p>
                        <p>{e.userId}</p>
                        <p>{e.title}</p>
                        <button style={{ backgroundColor: e.completed ? "red" : 'blue' }} >completed</button>
                    </div>
                })
                : <p>Loading</p>}
        </div>
    )
}
