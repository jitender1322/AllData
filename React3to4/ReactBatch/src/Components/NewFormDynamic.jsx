import React, { useState } from 'react'

export default function NewFormDynamic() {
    const [name ,setName]=useState("")
    const [err,setErr]=useState("")

    const handleClick = ()=>{
        const regex = /^[A-Za-z]{2,}([ -][A-Za-z]+)*$/
        
        if(!regex.test(name)){
            setErr("Name validation failed")
        }else{
            setErr("Everything is good")
        }
    }
  return (
    <div>
      <h1>NewFormDynamic</h1>
      <input type="text" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} />
      <span>{err}</span>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
