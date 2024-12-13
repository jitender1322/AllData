import React, { useReducer } from "react";

export default function UseReducerExp() {
  const initialstate = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "inc1":
        return (state += 1);
      case "inc10":
        return (state += 10);
      case "inc100":
        return (state += 100);
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialstate);

  return (
    <div>
      <h1>UseReducerExp</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch("inc1")}>1</button>
      <button onClick={() => dispatch("inc10")}>10</button>
      <button onClick={() => dispatch("inc100")}>100</button>
    </div>
  );
}
