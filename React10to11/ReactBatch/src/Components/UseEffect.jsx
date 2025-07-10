import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count,setCount] = useState(0)

    // useEffect(()=>{
    //     console.log("hello");
    // },[])

    useEffect(() => {
      console.log("hello");
    }, [count]);
    
  return (
    <div>
      <h1>UseEffect</h1>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  );
}
