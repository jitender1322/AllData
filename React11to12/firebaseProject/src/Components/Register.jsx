import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, db, provider } from '../../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

export default function Register() {
  const navigate = useNavigate()
  const [formdata,setFormdata]=useState({})

  const handleChange = (e)=>{
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = async ()=>{
    await createUserWithEmailAndPassword(auth,formdata.email,formdata.password).then((res)=>{
      setDoc(doc(db,"Users",res.user.uid),formdata)
      navigate("/")
    })
  }

  const handleSignIn = async()=>{
    await signInWithPopup(auth,provider).then((res)=>{
      setDoc(doc(db, "Users", res.user.uid), {name : res.user.displayName,email : res.user.email,photo:res.user.photoURL});
      navigate("/dashboard")
    })
  }
   
  return (
    <div>
      <h1>Register</h1>
      <input type="text" name="name"  placeholder='Enter your name' onChange={handleChange}/>
      <input type="text" name="email" placeholder='Enter your email' onChange={handleChange}/>
      <input type="text" name="password" placeholder="Enter your password" onChange={handleChange}/><br /><br />
      <button onClick={handleRegister}>Register</button><br /><br />
      <Link to={"/"}>Login ?</Link><br /><br />

      <button onClick={handleSignIn}>SignIn with Google</button>
    </div>
  );
}
