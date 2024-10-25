import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate();
    const param = useParams();

    const handelBtn = () => {
        navigate("/", { state: { name: "student" } })
    }
    return (
        <div>
            <h1>About</h1>
            <h1>{param.id}</h1>
            <button onClick={handelBtn} >Go to Home</button>
            <Link to={"/"} >Home</Link>
            <Link to={"/Contact"} >Contact</Link>
        </div>
    )
}
