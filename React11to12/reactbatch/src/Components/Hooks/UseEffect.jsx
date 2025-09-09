// This is a important hook used to peform side effects in functional component like
// data fetching and api calling.

// We can also perform life cycle methods in functional component using useEffect hook.



import React, { useEffect, useState, useTransition } from 'react'

export default function UseEffect() {
    // Mounting
    // useEffect(()=>{
    //     console.log("hello");
    // },[])

    // Updating

    // const [count,setCount]=useState(0)

    // useEffect(() => {
    //   console.log("hello");
    // }, [count]);

    // Unmounting

    // useEffect(()=>{
    //     return //statement get execute on unmounting
    // },[])


  return (
    <div>
      <h1>UseEffect</h1>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  );
}
