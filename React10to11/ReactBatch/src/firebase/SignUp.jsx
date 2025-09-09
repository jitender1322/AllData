import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db, provider } from '../../firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'

export default function SignUp() {

    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate()

    const handleSignUp = async ()=>{
        await createUserWithEmailAndPassword(auth,email,password).then((res)=>{
           setDoc(doc(db,"Users",res.user.uid),{
            name,age,email
           })
           navigate("/dashboard")
        })
    }

    const handleGoogleAuth =async ()=>{
        await signInWithPopup(auth,provider).then((res)=>{
          console.log(res);
        })
    }

  return (
    <div>
      <h1>SignUp</h1>
      <input
        type="text"
        placeholder="Enter your Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign up</button>

      <Link to={"/login"}>LogIn</Link>


      <button onClick={handleGoogleAuth}>Sign In With Google</button>
    </div>
  );
}
