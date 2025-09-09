import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData, updateData } from "../features/TodoSlice";

export default function TodoRedux() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  const [editIndex,setEditIndex]=useState(null)

  const dispatch = useDispatch()

  const data = useSelector((state) => {
    return state.todoKey.data
  });
  


  const handleAddData = ()=>{
   if(editIndex==null){
     let obj = { id: Date.now(), name, subject };
     dispatch(addData(obj));
   }else{
    dispatch(updateData())
   }
    setName("")
    setSubject("")
    setEditIndex(null)
  }

  const handleDelete = (id)=>{
    dispatch(deleteData(id))
  }
  const handleEdit = (id)=>{
    let singleData = data.find((item)=>item.id == id)

    setName(singleData.name)
    setSubject(singleData.subject)
    setEditIndex(id)
  }

  return (
    <div>
      <h1>TodoRedux</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="Enter your subject"
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
      />
      <button onClick={handleAddData}>{editIndex == null ?"Add Data":"UpdateData"}</button>

      {data &&
        data.map((e, i) => {
          return (
            <ul key={i}>
              <li>{i + 1}</li>
              <li>{e.name}</li>
              <li>{e.subject}</li>
              <button onClick={() => handleEdit(e.id)}>Edit</button>
              <button onClick={() => handleDelete(e.id)}>Delete</button>
            </ul>
          );
        })}
    </div>
  );
}
