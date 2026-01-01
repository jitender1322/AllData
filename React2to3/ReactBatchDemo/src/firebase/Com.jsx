import React, { useState } from 'react'

export default function Com() {
    const [name,setName] = useState("")
    const hadleTask = ()=>{
        console.log(name);
        
    }
  return (
    <div>
        <input type="text" onChange={(e)=>setName(e.target.value)} />
        <input type="text" />
        <button onClick={handl}></button>
    </div>
  )
}
