import React, { useEffect, useState } from 'react'

export default function LocalIntro() {
  const[name,setName]=useState("")
  const[sub,setSub]=useState("")
  const[city,setCity]=useState("")

  const [record,setRecord] = useState([]);

  useEffect(()=>{
    let data = JSON.parse(localStorage.getItem("Students"));
    setRecord(data);
  },[]);

  const handleSubmit = ()=>{
    let obj = {id : Date.now(),name,sub,city};
    setRecord([...record,obj]);
    localStorage.setItem("Students",JSON.stringify([...record,obj]));
  }
  return (
    <div>
      <h1>Crud with Local Storage</h1>
      <input type="text" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} />
      <input type="text" placeholder='Enter your subject' onChange={(e)=>setSub(e.target.value)} />
      <input type="text" placeholder='Enter your city' onChange={(e)=>setCity(e.target.value)} />
      <button onClick={handleSubmit} >Submit</button>
      <hr />

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Subject</th>
            <th>City</th>
            <th colSpan={2} >Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            record &&

            record.map((e,i)=>{
              return <tr key={i}>
                <td>{i+1}</td>
                <td>{e.name}</td>
                <td>{e.sub}</td>
                <td>{e.city}</td>
                <td><button>Edit</button></td>
                <td><button>Delete</button></td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}
