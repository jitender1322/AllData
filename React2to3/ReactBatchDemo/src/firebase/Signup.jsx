import React from 'react'
import { useState } from 'react'
import {auth, db} from "../../firebaseconfig"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [city,setCity]=useState("");
    const [hobby,setHobby]=useState("");

    const navigate = useNavigate("")

    const handleSubmit = ()=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(data=>{
            setDoc(doc(db,"users",data.user.uid),{
                name,email,city,hobby
            })
            console.log("added");
            navigate("/dashboard")
        })
    }

  return (
    <div>
        <h1>Signup</h1>
        <input type="text" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)}/>
        <input type="text" placeholder='Enter your city' onChange={(e)=>setCity(e.target.value)}/>
        <input type="text" placeholder='Enter your hobby' onChange={(e)=>setHobby(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
        <Link to={"/signin"} >Sign In</Link>
    </div>
  )
}
