import React, { useEffect, useState } from 'react'

export default function Api() {
    const [record, setRecord] = useState([]);
    useEffect(() => {
        fetchApi();
    }, [])

    const fetchApi = async () => {

        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let res = await response.json()
        setRecord(res);
    }
    console.log(record);
    return (
        <div>
            {
                record.length == 0 ? <p>no Data found</p> :
                    record.map((e, i) => {
                        return <div key={i}>
                            <p>{e.id}</p>
                            <p>{e.name}</p>
                            <p>{e.username}</p>
                            <p>{e.email}</p>
                            <p>{e.address.street}</p>
                            <p>{e.address.suite}</p>
                            <p>{e.address.city}</p>
                            <p>{e.address.zipcode}</p>
                            <p>{e.address.geo.lat}</p>
                            <p>{e.address.geo.lng}</p>
                            <p>{e.phone}</p>
                            <p>{e.website}</p>
                            <p>{e.company.name}</p>
                            <p>{e.company.catchPhrase}</p>
                            <p>{e.company.bs}</p>
                        </div>
                    })
            }
        </div>
    )
}
