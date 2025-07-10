import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function About() {

  const naviagate = useNavigate()

  const student = useParams()
  console.log(student);
  

  const handleBtn = ()=>{
    naviagate("/",{ replace : true, state:{name:"rahul"} })
  }
  return (
    <div>
      <h1>About</h1>
      <button onClick={handleBtn}>Go to Home</button>
    </div>
  );
}
