import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Axios() {
    const [data, setData] = useState(null);
    useEffect(() => {
        axiosApi();
    }, [])

    const axiosApi = async () => {
        let response = await axios.get("https://fakestoreapi.com/products");
        console.log(response);
        let res = await response.data
        setData(res)
    }
    return (
        <div>
            <h1>Axios Api</h1>
            {
                data ?
                    data.map((e, i) => {
                        return <ul key={i}>
                            <li>{e.id}</li>
                        </ul>
                    }) :
                    <p>Loading</p>
            }
        </div>
    )
}
