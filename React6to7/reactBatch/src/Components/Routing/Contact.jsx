import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Contact() {
    const navigate = useNavigate();
    const name = "sumit"
    const handleClick = () => {
        navigate("/", { state: { name } });
    }
    return (
        <div>
            <h1>Contact</h1>
            <Link to={"/"}>home page</Link>
            <Link to={"/about"}>about page</Link>
            <button onClick={handleClick} >go to home</button>
        </div>
    )
}
