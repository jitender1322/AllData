import React, { useRef } from 'react'

export default function UseRef() {
    const nameRef = useRef()
    const handleClick = ()=>{
        console.log(nameRef.current.value); 
    } 
    console.log("this is ref ");
    
  return (
    <div>
      <h1>UseRef</h1>
      <input type="text" ref={nameRef} placeholder='enter your name'/>
      <button onClick={handleClick}>click</button>
    </div>
  );
}
