import React, { useState } from 'react'

export default function Events() {
  const [name,setName] = useState("")
  const [subject,setSubject]=useState("")
  const [city,setCity]=useState("")

  const [dark,setDark]=useState(false)

  const [record,setRecord]=useState([])

  const handleClick = ()=>{
    console.log("dsfjs");
    
    let obj = {name,city,subject}
    setRecord([...record,obj])
    setName("")
  }

  return (
    <div style={{background:dark?'black':'white'}}>
      <h1>Events</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="Enter your subject"
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
      />
      <input
        type="text"
        placeholder="Enter your city"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button onClick={handleClick}>Submit</button>
      <button onClick={()=>setDark(!dark)}>light/dark</button>

      {
       record.length>0  ?
       record.map((e,i)=>{
        return <ul key={i}>
          <li>{e.name}</li>
          <li>{e.city}</li>
          <li>{e.subject}</li>
        </ul>
      }) : <p>No record</p>
      }
    </div>
  );
}
