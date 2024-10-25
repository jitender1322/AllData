import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from "../firebaseconfig"

export default function Login() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        let subscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            }
        })
    }, [])

    const handleLogin = async () => {
        let user = await signInWithPopup(auth, provider);
        console.log(user);
        setUser(user.user);
    }

    const handleSignOut = async () => {
        await signOut(auth);
        setUser(null)
    }

    return (
        <div>
            {
                user ?
                    <div>
                        <h1>Welcome {user.displayName}</h1>
                        <h1>Welcome {user.email}</h1>
                        <img src={user.photoURL} width="20%" alt="" />
                        <button onClick={handleSignOut} >Sign out</button>
                    </div>
                    :
                    <button onClick={handleLogin} >Log In</button>
            }
        </div>
    )
}
