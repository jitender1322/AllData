import React, { useEffect, useState } from 'react'

export default function LocalCrud() {

    const [formdata,setFormdata]=useState({})
    const [record,setRecord]=useState([])

    const [editIndex,setEditIndex]=useState(null)

    useEffect(()=>{
        let allData = JSON.parse(localStorage.getItem("record")) || []
        setRecord(allData)
    },[])
 
    const handleForm = (e)=>{
        setFormdata({
            ...formdata,
            id:Date.now(),
            [e.target.name]:e.target.value
        })
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()

        if(editIndex==null){
          setRecord([...record,formdata])
          localStorage.setItem("record",JSON.stringify([...record,formdata]))
        }else{
          let singleData = record.find((item)=>item.id == editIndex)
          singleData.name = formdata.name
          singleData.age = formdata.age
          singleData.city = formdata.city
          localStorage.setItem("record",JSON.stringify([...record]))
        }

        setEditIndex(null)

        setFormdata({
          name : "",
          age : "",
          city : ""
        })
    }


    const handleDelete = (id)=>{
      let newdata = record.filter((item)=>item.id!=id)
      setRecord(newdata)
      localStorage.setItem("record",JSON.stringify(newdata))
    }

    const handelEdit = (id)=>{
      let singleData = record.find((item)=>item.id==id)
      setFormdata({
        name : singleData.name,
        age : singleData.age,
        city:singleData.city
      })
      setEditIndex(id)
    }

  return (
    <div>
      <h1>LocalCrud</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formdata.name}
          onChange={handleForm}
        />
        <input
          type="text"
          placeholder="Enter your age"
          name="age"
          value={formdata.age}
          onChange={handleForm}
        />
        <select name="city" value={formdata.city} onChange={handleForm}>
          <option hidden>Enter your City</option>
          <option value="rajkot">rajkot</option>
          <option value="surat">surat</option>
          <option value="amreli">amreli</option>
          <option value="ahemdabad">ahemdabad</option>
        </select>
        <button type="submit">{editIndex==null ? "Add Data" : "Update Data"}</button>
      </form>

      <table border={"1"} width={"100%"}>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Age</td>
                <td>City</td>
                <td colSpan={"2"}>Actions</td>
            </tr>
        </thead>
        <tbody>
            {
                record ?
                record.map((e,i)=>{
                    return (
                      <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.city}</td>
                        <td>
                          <button onClick={()=>handelEdit(e.id)}>Edit</button>
                        </td>
                        <td>
                          <button onClick={() => handleDelete(e.id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                }):
                <p>Loading ....</p>
            }
        </tbody>
      </table>
    </div>
  );
}
