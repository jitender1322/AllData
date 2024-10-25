import React, { useEffect, useState } from 'react'

export default function Fetch() {
    const [data, setData] = useState('');
    useEffect(() => {
        fetchApi()
    }, [])
    const fetchApi = async () => {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let res = await response.json();
        setData(res);
        console.log(res);
    }
    return (
        <div>
            <h1>Fetch Api</h1>
            {
                data ?
                    data.map((e, i) => {
                        return <ul key={i}>
                            <li>{e.id}</li>
                            <li>{e.username}</li>
                            <li>{e.email}</li>
                            <li>{e.address.street}</li>
                            <li>{e.address.geo.lat}</li>
                            <li>{e.address.geo.lng}</li>

                        </ul>
                    }) :
                    <p>Loading</p>
            }
        </div>
    )
}
