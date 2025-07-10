import React, { useState } from 'react'

export default function ArrayOfObj() {

  const [name,setName] =useState('')
  const [sub,setSub]=useState('')
  const [city,setCity]=useState('')

  const [record,setRecord]=useState([])
  console.log("this is state re render");
  

  const handleBtn = ()=>{
    let obj = {name,sub,city};
    setRecord([...record,obj])
    setName('')
    setSub('')
    setCity('')
  }
  return (
    <>
      <h1>Create Here</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your subject"
        value={sub}
        onChange={(e) => setSub(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleBtn}>Create</button>


      {

        record.length > 0 ?

        record.map((e,i)=>{
          return <ul key={i}>
            <li>{e.name}</li>
            <li>{e.sub}</li>
            <li>{e.city}</li>
          </ul>
        })

        :
        <p>No Data Found</p>
      }
    </>
  );
}
