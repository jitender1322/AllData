import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/Slice";

export default function CounterRedux() {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.CounterKey;
  });

  return (
    <div>
      <h1>CounterRedux</h1>
      <h2>{data.count}</h2>
      <h2>{data.num}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
