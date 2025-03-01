import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Api() {
  const [record, setRecord] = useState([]);
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    let data = await axios.get("http://localhost:5000/posts");
    console.log(data);
    setRecord(data.data);
  };

  const addData = async () => {
    let obj = {
      id: String(record.length + 1),
      title: "another title",
      views: "500",
    };
    let sendData = await axios.post("http://localhost:5000/posts", obj);
    setRecord([...record, obj]);
  };

  const deleteData = async (id) => {
    let deleteRecord = await axios.delete(`http://localhost:5000/posts/${id}`);
    fetchApi();
  };
  return (
    <div>
      <h1>Api</h1>

      <button onClick={addData}>Add Data</button>

      {record &&
        record.map((e, i) => {
          return (
            <ul key={i}>
              <li>{e.id}</li>
              <li>{e.title}</li>
              <li>{e.views}</li>
              <button>Edit</button>
              <button onClick={() => deleteData(e.id)}>Delete</button>
            </ul>
          );
        })}
    </div>
  );
}
