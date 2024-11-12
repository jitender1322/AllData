import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseconfig'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore';

export default function Dashboard() {
    const [user,setUser]=useState(null);
   useEffect(()=>{
    let subscribe = onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
            setUser(currentUser)
        }
    })
   },[])

   useEffect(()=>{
    if(user){
        console.log("hello");
        fetchUser()
    }
   },[user])

   const fetchUser = ()=>{
        
   }

  return (
    <div>
        <h1>Dashboard</h1>
    </div>
  )
}
