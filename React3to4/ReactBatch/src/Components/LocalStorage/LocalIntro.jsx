import React, { useEffect, useState } from "react";

export default function LocalIntro() {
  const [name, setName] = useState("");
  const [sub, setSub] = useState("");
  const [city, setCity] = useState("");

  const [editIndex, setEditIndex] = useState(null);

  const [record, setRecord] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("Students")) || [];
    setRecord(data);
  }, []);

  const handleSubmit = () => {
    if (editIndex == null) {
      let obj = { id: Date.now(), name, sub, city };
      setRecord([...record, obj]);
      localStorage.setItem("Students", JSON.stringify([...record, obj]));
    } else {
      let singleData = record.find((item) => item.id == editIndex);
      singleData.id = editIndex;
      singleData.name = name;
      singleData.sub = sub;
      singleData.city = city;
      localStorage.setItem("Students", JSON.stringify(record));
    }

    setName("");
    setSub("");
    setCity("");
    setEditIndex(null);
  };

  const handleDelete = (i) => {
    let data = record.filter((item) => item.id != i);
    setRecord(data);
    localStorage.setItem("Students", JSON.stringify(data));
  };

  const handleEdit = (i) => {
    let singleData = record.find((item) => item.id == i);

    setName(singleData.name);
    setSub(singleData.sub);
    setCity(singleData.city);
    setEditIndex(i);
  };
  return (
    <div>
      <h1>Crud with Local Storage</h1>
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
      <button onClick={handleSubmit}>
        {editIndex == null ? "Submit" : "Update"}
      </button>
      <hr />

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Subject</th>
            <th>City</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {record &&
            record.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.sub}</td>
                  <td>{e.city}</td>
                  <td>
                    <button onClick={() => handleEdit(e.id)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(e.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
