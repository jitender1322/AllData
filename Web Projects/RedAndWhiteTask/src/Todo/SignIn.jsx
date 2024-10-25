import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, firestore } from '../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
export default function SignIn() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);
        await setDoc(doc(firestore, "User", user.uid), {
            name: name,
            email: email,
            gender: gender
        })
        navigate('/todo')
    };
    return (
        <div className='sign-in-container' >
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Gender:</label>
                    <select
                        name="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign In</button>
                <span onClick={() => navigate('/')} >Login?</span>
            </form>

        </div>
    )
}
