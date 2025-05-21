import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
    const [name,setName] = useState("")
    const [city,setCity] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate()

    const handleRegister = async ()=>{
        await axios.post("http://localhost:1008/register",{name,city,email,password})
        .then((res)=>{
            alert(res.data.msg)
            navigate("/")
        })
    }
  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Enter your Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your City"
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <br />
      <button onClick={handleRegister}>Register</button>
      <br /><br />
      <Link to={'/'}>Login ?</Link>
    </div>
  );
}
