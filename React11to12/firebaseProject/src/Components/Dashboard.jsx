import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [userId,setUserId] = useState(null)
  const [userData,setUserData]=useState(null)

  const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        setUserId(user.uid)
    })
  },[])

  useEffect(()=>{
    if(userId){
      fetchUser()
    }
  },[userId])


  const fetchUser = async ()=>{
    await getDoc(doc(db,"Users",userId)).then((res)=>{
      setUserData(res.data())
    })
  }

  const handleLogout = async ()=>{
    await auth.signOut()
    navigate("/")
  }


  return (
    <div>
      <h1>Dashboard</h1>
      <h1>{userData && userData.name}</h1>
      <img
        src={
          userData?.photo
            ? userData.photo
            : "https://static.thenounproject.com/png/5100711-200.png"
        }
        alt=""
      />{" "}
      <br />
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
