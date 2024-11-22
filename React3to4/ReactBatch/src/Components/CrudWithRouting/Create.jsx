import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create({ data, setData }) {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();
  const handelAdd = () => {
    setData([...data, { id: data.length + 1, name, subject }]);
    navigate("/", { replace: true });
  };
  return (
    <div>
      <h1>Create</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your subject"
        onChange={(e) => setSubject(e.target.value)}
      />
      <button onClick={handelAdd}>Add Data</button>
    </div>
  );
}
