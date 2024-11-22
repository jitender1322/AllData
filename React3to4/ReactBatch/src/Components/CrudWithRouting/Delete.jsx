import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Delete({ data, setData }) {
  const [id, setId] = useState();
  const navigate = useNavigate();
  const handleDelete = () => {
    let record = data.filter((item) => item.id != id);
    setData(record);
    navigate("/", { replace: true });
  };
  return (
    <div>
      <h1>Delete</h1>
      <input
        type="text"
        placeholder="Enter Id"
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
