import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function About() {
    const param = useParams();
    return (
        <div>
            <h1>About</h1>
            <h1>{param.data}</h1>
            <Link to={"/"}>home page</Link>
            <Link to={"/contact"}>contact page</Link>
        </div>
    )
}
