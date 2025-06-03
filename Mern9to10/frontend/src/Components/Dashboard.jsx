import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Dashboard() {

  const navigate = useNavigate()
  const token = localStorage.getItem("token");

  useEffect(()=>{
    if(!token){
      navigate("/")
    }else{
      fetchAllAdmin()
    }
  },[])


  const fetchAllAdmin = async ()=>{
    await axios.get("http://localhost:1008/allAdmin",{
      headers : {
        Authorization : token
      }
    }).then((res)=>{
      console.log(res);
    })
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={()=>navigate("/")}>LogOut</button>
    </div>  
  );
}
