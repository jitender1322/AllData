import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../features/TodoSlice";

export default function CrudWithRedux() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");

  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.TodoKey.data;
  });

  const handleSubmit = () => {
    let obj = { id: Date.now(), task, priority };
    dispatch(addData(obj));
    setTask("");
    setPriority("");
  };
  return (
    <div>
      <h1>CrudWithRedux</h1>

      <input
        type="text"
        placeholder="Enter your task"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <input
        type="text"
        placeholder="Enter your priority"
        onChange={(e) => setPriority(e.target.value)}
        value={priority}
      />

      <button onClick={handleSubmit}>Submit</button>

      {data &&
        data.map((e, i) => {
          return (
            <ul key={i}>
              <li>{i + 1}</li>
              <li>{e.task}</li>
              <li>{e.priority}</li>
            </ul>
          );
        })}
    </div>
  );
}
