import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./Components/CrudWithRouting/Read";
import Create from "./Components/CrudWithRouting/Create";
import Delete from "./Components/CrudWithRouting/Delete";
import Update from "./Components/CrudWithRouting/Update";

export default function App() {
  const [record, setRecord] = useState([
    { id: 1, name: "sumit", subject: "react" },
    { id: 2, name: "rahul", subject: "node" },
    { id: 3, name: "ajay", subject: "express" },
  ]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Read data={record} />}></Route>
          <Route
            path="/create"
            element={<Create data={record} setData={setRecord} />}
          ></Route>
          <Route
            path="/delete"
            element={<Delete data={record} setData={setRecord} />}
          ></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
