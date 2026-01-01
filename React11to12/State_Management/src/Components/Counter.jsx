import React from 'react'
import { useSelector } from 'react-redux';

export default function Counter() {

    const count = useSelector((state)=>{
        return state.CounterKey.count
    })

  return (
    <div>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button>+</button>
      <button>-</button>
    </div>
  );
}
