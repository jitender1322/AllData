import React, { useState } from 'react'

export default function ConditionalRendering() {
    const [visible,setVisible]=useState(false)
  return (
    <div>
      {visible ? <h1>Conditonal Rendering</h1> : <h1>Not Conditonal Rendering</h1>}
      <button onClick={()=>setVisible(!visible)}>Show/Hide</button>
    </div>
  );
}
