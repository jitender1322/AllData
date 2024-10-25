import React from 'react'
import { Link } from 'react-router-dom'

export default function Home({ data }) {
    return (
        <div>
            <h1>Home</h1>
            <Link to={"/create"} >create</Link>
            <Link to={"/delete"} >delete</Link>
            <Link to={"/update"} >update</Link>
            <table border="1" width="50%">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Subject</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data &&
                        data.map((e, i) => {
                            return <tr key={i}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.subject}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
