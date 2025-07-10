import React, { useEffect, useState } from "react";

export default function LocalStorage() {
  const [formdata, setFormdata] = useState({});
  const [record, setRecord] = useState([]);

  const [editIndex,setEditIndex] = useState(null)

  useEffect(() => {
    let allData = JSON.parse(localStorage.getItem("Students")) || [];
    setRecord(allData);
  }, []);

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(editIndex == null){
      let obj = { id: Date.now(), ...formdata };
      setRecord([...record, obj]);
      localStorage.setItem("Students", JSON.stringify([...record, obj]));
    }else{
      let singleData = record.find((item) => item.id == editIndex);
      singleData.name = formdata.name
      singleData.subject = formdata.subject
      localStorage.setItem("Students",JSON.stringify(record))
    }
    setEditIndex(null)
    setFormdata({
      name: "",
      subject: "",
    });
  };

  const handleDelete = (id) => {
    let newData = record.filter((item) => item.id != id);
    setRecord(newData);
    localStorage.setItem("Students", JSON.stringify(newData));
  };

  const handleEdit = (id) => {
    let singleData = record.find(item=>item.id == id)
    setFormdata({
      name : singleData.name,
      subject : singleData.subject
    })
    setEditIndex(id)
  };

  return (
    <div>
      <h1>LocalStorage</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formdata.name}
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          value={formdata.subject}
          placeholder="Enter your subject"
          onChange={handleChange}
        />
        <button type="submit">{editIndex == null ? "Submit" : "Update"}</button>
      </form>

      {record ? (
        record.map((e, i) => {
          return (
            <ul key={i}>
              <li>{i + 1}</li>
              <li>{e.id}</li>
              <li>{e.name}</li>
              <li>{e.subject}</li>
              <button onClick={() => handleDelete(e.id)}>Delete</button>
              <button onClick={() => handleEdit(e.id)}>Edit</button>
            </ul>
          );
        })
      ) : (
        <p>no data</p>
      )}
    </div>
  );
}
