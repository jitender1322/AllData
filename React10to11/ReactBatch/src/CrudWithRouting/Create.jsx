import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create() {

    const navigate = useNavigate()

    const [taskName,setTaskName]=useState("")
    const [priority,setPriority] =useState("")

    const handleTask = ()=>{
       let obj = {id:Date.now(),taskName,priority}
       let oldData = JSON.parse(localStorage.getItem("Tasks")) || []
       localStorage.setItem("Tasks",JSON.stringify([...oldData,obj]))

       setTaskName("")
       setPriority("")

       navigate("/")
    }

  return (
    <div>
      <h1>Create</h1>

      <input
        type="text"
        value={taskName}
        placeholder="Enter task name"
        onChange={(e) => setTaskName(e.target.value)}
      />
      <select onChange={(e) => setPriority(e.target.value)} value={priority}>
        <option hidden>Select Priority</option>
        <option value={"Low"}>Low</option>
        <option value={"Medium"}>Medium</option>
        <option value={"High"}>High</option>
      </select>
      <button onClick={handleTask}>Add Task</button>
    </div>
  );
}
