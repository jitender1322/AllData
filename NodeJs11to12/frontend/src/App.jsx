import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
  const [formdata,setFormdata] = useState({})

  const handleChange = (e)=>{
    setFormdata({
      ...formdata,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    await axios.post("http://localhost:1008/addData",formdata).then((res)=>{
      alert(res.data.msg)
      setFormdata({
        name : "",
        age:"",
        city:""
      })
    })
  }

  return (
    <div>
      <h1>CRUD WITH MERN</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formdata.name}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter your age"
          name="age"
          value={formdata.age}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your city"
          name="city"
          value={formdata.city}
          onChange={handleChange}
        />
        <button type='submit'>Add Data</button>
      </form>
    </div>
  );
}
 