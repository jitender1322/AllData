import React, { useState } from 'react'

export default function FormHandling() {

  const [formdata, setFormdata] = useState({
    name: "",
    subject: "",
    age: "",
    city: "",
    gender: "",
  });
  const [err,setErr]=useState({})

  const [record,setRecord]=useState([])

  const handleChange = (e)=>{
    setFormdata({
      ...formdata,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    setRecord([...record,formdata])
    setFormdata({
      name:"",
      subject:"",
      age:"",
      city:"",
      gender:""
    })
  }

  return (
    <div>
      <h1>FormHandling</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formdata.name}
          onChange={handleChange}
          required
        />
        <span>{err.nameErr}</span>
        <input
          type="text"
          name="subject"
          value={formdata.subject}
          placeholder="Enter your subject"
          onChange={handleChange}
        />
        <span>{err.subErr}</span>
        <input
          type="text"
          value={formdata.age}
          name="age"
          placeholder="Enter your age"
          onChange={handleChange}
        />
        <span></span>
        <input
          type="radio"
          name="gender"
          value={"male"}
          checked={formdata.gender == "male" && true}
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value={"female"}
          checked={formdata.gender == "female" && true}
          onChange={handleChange}
        />
        Female
        <select value={formdata.city} name="city" onChange={handleChange}>
          <option value="rajkot">rajkot</option>
          <option value="surat">surat</option>
          <option value="amreli">amreli</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      {record.map((e, i) => {
        return (
          <ul key={i}>
            <li>{e.name}</li>
            <li>{e.age}</li>
            <li>{e.subject}</li>
            <li>{e.city}</li>
            <li>{e.gender}</li>
          </ul>
        );
      })}
    </div>
  );
}
