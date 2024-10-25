import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';

export default function LogIn() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const handleLogIn = () => {
        signInWithEmailAndPassword(auth, email, pass)
            .then(data => {
                navigate("/dashboard")
            })
    }
    return (
        <div>
            <h1>LogIn</h1>
            <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='password' onChange={(e) => setPass(e.target.value)} />
            <button onClick={handleLogIn} >LogIn</button>
            <Link to={"/"} >SignUp</Link>
        </div>
    )
}
