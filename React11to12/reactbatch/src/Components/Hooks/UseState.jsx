import React, { useState } from 'react'

export default function UseState() {
    const [count,setCount]=useState(0)

    const increment = ()=>{
       setCount(count+1)
    }
  
  return (
    <div>
      <h1>UseState</h1>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
      <button onClick={()=>setCount(100)}>Reset</button>
    </div>
  );
}
