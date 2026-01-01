import React, { useRef } from 'react'

export default function UseRef() {
    const userRef = useRef() 

    const handleClick = ()=>{
        console.log(userRef.current.value);
    }
  return (
    <div>
        <h1 ref={userRef2} ></h1>
      <h1>UseRef : This is a hook used to create mutable reference with dom
        elements and it does not cause re-render.
      </h1>
      <input type="text" ref={userRef} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
