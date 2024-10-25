import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Home() {
    const data = "student"
    const location = useLocation();
    return (
        <div>
            <h1>Home</h1>
            <h1>{location.state.name}</h1>
            <Link to={`/about/${data}`}>About page</Link>
            <Link to={"/contact"}>contact page</Link>
        </div>
    )
}
