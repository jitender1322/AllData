import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseconfig';

export default function Signin() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    const handleSignin = ()=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(user=>{
            navigate("/dashboard")
        })
    }
  return (
    <div>
        <h1>Signin</h1>
        <input type="text" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleSignin} >Sign in</button>
        <Link to={"/"} >Sign up</Link>
    </div>
  )
}
