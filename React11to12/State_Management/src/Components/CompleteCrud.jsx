import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addData,
  deleteData,
  fetchData,
  updateData,
} from "../features/ApiSliceComplete";

export default function CompleteCrud() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [editIndex, setEditIndex] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const data = useSelector((state) => {
    return state.ApiKey.record;
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editIndex == null) {
      dispatch(addData({ ...formData}));
    } else {
      dispatch(updateData({editIndex,formData}));
    }
    setEditIndex(null);

    dispatch(fetchData());

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  const handleEdit = (id) => {
    let singleData = data.find((item) => item.id === id);
    setFormData({
      name: singleData.name,
      email: singleData.email,
      password: singleData.password,
    });

    setEditIndex(id);
  };

  return (
    <div>
      <h1>CRUD with Redux + JSON Server</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <button type="submit">{editIndex ? "Update Data" : "Add Data"}</button>
      </form>

      <h2>Users List</h2>
      {data.map((e, i) => {
        return (
          <ul key={i}>
            <li>{e.id}</li>
            <li>{e.name}</li>
            <li>{e.email}</li>
            <li>{e.password}</li>
            <li>
              <button onClick={() => handleEdit(e.id)}>Edit</button>
            </li>
            <li>
              <button onClick={() => handleDelete(e.id)}>Delete</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
