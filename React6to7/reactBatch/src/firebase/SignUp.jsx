import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, db } from '../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
    const [city, setCity] = useState("")

    const navigate = useNavigate();

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then(data => {
                setDoc(doc(db, "users", data.user.uid), {
                    name, city, email
                })
                navigate("/dashboard")
            })
    }
    return (
        <div>
            <h1>SignUp</h1>
            <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='city' onChange={(e) => setCity(e.target.value)} />
            <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='password' onChange={(e) => setPass(e.target.value)} />
            <button onClick={handleSignUp} >Sign Up</button>
            <Link to={"/login"} >LogIn</Link>
        </div>
    )
}
