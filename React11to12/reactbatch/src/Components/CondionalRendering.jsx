import React, { useState } from 'react'

export default function CondionalRendering() {
    const [choice,setChoice] = useState(false)
  return (
    <div style={{backgroundColor:choice&&"blue"}}>
      <h1>CondionalRendering</h1>
      <button onClick={()=>setChoice(!choice)}>click</button>
      {choice && <h1>Hello</h1>}
    </div>
  );
}
