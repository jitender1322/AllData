import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function App() {
  const [name, setName] = useState();
  const dispatch = useDispatch();

  const addData = () => {
    let obj = { id: Date.now(), name };
    dispatch(addData);
  };
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button>Add Data</button>
    </div>
  );
}
