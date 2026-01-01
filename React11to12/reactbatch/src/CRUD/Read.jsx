import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

export default function Read() {
  const navigate = useNavigate()

  const [record,setRecord] = useState([])

  useEffect(()=>{
    let allRecord = JSON.parse(localStorage.getItem("record"))||[]
    setRecord(allRecord)
  },[])

  const handleDelete = (id)=>{
    let filteredData = record.filter((item)=>item.id != id)
    localStorage.setItem("record",JSON.stringify(filteredData))
    setRecord(filteredData)
    toast.success("Successfully toasted!");
  }

  const addToCart = (id)=>{
    let singleData = record.find((item)=>item.id==id)
    let oldCartData = JSON.parse(localStorage.getItem("cart")) ||[]
    localStorage.setItem("cart",JSON.stringify([...oldCartData,singleData]))
  }

  const handleEdit = (id)=>{
    navigate("/add",{state:{stid:id}})
  }
  return (
    <div>
      <Toaster position="top-center" reverseOrder={true} />
      <h1>Read</h1>
      <Link to={"/add"}>
        <button>ADD DATA</button>
      </Link>

      {record ? (
        record.map((e, i) => {
          return (
            <ul key={i}>
              <li>{i + 1}</li>
              <li>{e.name}</li>
              <li>{e.age}</li>
              <li>
                <button onClick={() => handleEdit(e.id)}>Edit</button>
              </li>
              <li>
                <button onClick={() => handleDelete(e.id)}>Delete</button>
              </li>
              <li>
                <button onClick={() => addToCart(e.id)}>AddToCart</button>
              </li>
            </ul>
          );
        })
      ) : (
        <p>NO RECORD</p>
      )}
    </div>
  );
}
