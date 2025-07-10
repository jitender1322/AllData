import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Dispaly() {
    const naviagte = useNavigate()

    const [record,setRecord]=useState(null)

    useEffect(()=>{
        let allData = JSON.parse(localStorage.getItem("Tasks")) || []
        setRecord(allData)
    },[])

  return (
    <div>
      <h1>Dispaly</h1>
      <button onClick={()=>naviagte("/create")}>Create</button>

      {
        record ? 
        record.map((e,i)=>{
            return <ul key={i}>
                <li>{i+1}</li>
                <li>{e.taskName}</li>
                <li>{e.priority}</li>
                <button>Edit</button>
                <button>Delete</button>
            </ul>
        }) : <p>No Data</p>
      }
    </div>
  );
}
