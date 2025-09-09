import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';

export default function LogIn() {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      
      const navigate = useNavigate()
      const handleLogIn = async () => {
        await signInWithEmailAndPassword(auth,email,password).then((res)=>{
           navigate("/dashboard")
        })
      };

  return (
    <div>
      <h1>LogIn</h1>
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
      <button onClick={handleLogIn}>Log In</button>
      <Link to={"/"}>SignUp</Link>
    </div>
  );
}
