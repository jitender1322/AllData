import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from "../../../firebaseConfig"
import { Link, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

export default function SignUp() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [age, setAge] = useState("");
    const [sub, setSub] = useState("");
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");

    const navigate = useNavigate();

    const signUp = () => {
        createUserWithEmailAndPassword(auth, mail, pass)
            .then((user) => {
                console.log(user.user.uid);
                setDoc(doc(firestore, "users", user.user.uid), {
                    fname, lname, age, sub, mail
                })
                navigate("/dashboard")
            }).catch((err) => {
                console.log(err);
            })
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <input type="text" placeholder='enter you First Name' onChange={(e) => setFname(e.target.value)} />
            <input type="text" placeholder='enter you Last Name' onChange={(e) => setLname(e.target.value)} />
            <input type="text" placeholder='enter you Age' onChange={(e) => setAge(e.target.value)} />
            <input type="text" placeholder='enter you Subject' onChange={(e) => setSub(e.target.value)} />
            <input type="text" placeholder='enter you email' onChange={(e) => setMail(e.target.value)} />
            <input type="text" placeholder='enter you password' onChange={(e) => setPass(e.target.value)} />
            <button onClick={signUp} >Sign Up</button>
            <Link to="/login" >Log In</Link>
        </div>
    )
}
