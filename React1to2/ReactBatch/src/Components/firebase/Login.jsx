import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");

    const navigate = useNavigate();

    const login = () => {
        signInWithEmailAndPassword(auth, mail, pass)
            .then((user) => {
                console.log(user);
                navigate("/dashboard")
            }).catch((err) => {
                console.log(err);
            })
    }
    return (
        <div>
            <h1>Login</h1>

            <input type="text" placeholder='enter you Email' onChange={(e) => setMail(e.target.value)} />
            <input type="text" placeholder='enter you Password' onChange={(e) => setPass(e.target.value)} />
            <button onClick={login} >Sign Up</button>
            <Link to={"/"} >Sign up</Link>
        </div>
    )
}
