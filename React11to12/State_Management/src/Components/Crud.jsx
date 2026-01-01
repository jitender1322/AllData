import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, updateData } from '../features/TodoSlice'

export default function Crud() {

  const [editIndex,setEditIndex]=useState(null)

    const dispatch = useDispatch()

    const data = useSelector((state)=>{
        return state.TodoKey.record
    })

    const [formdata,setFormdata] =useState({})

    const handleChange = (e)=>{
        setFormdata({
            ...formdata,
            id : Date.now(),
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
       if(editIndex==null){
         dispatch(addData(formdata));
       }else{
        dispatch(updateData({ id: editIndex ,data : formdata}));
       }

        setFormdata({
            name : "",
            age : ""
        })

        setEditIndex(null)
    }   

    const handleDelete = (id)=>{
      dispatch(deleteData(id))
    }

    const handleEdit = (id)=>{
      let singleData = data.find((item)=>item.id ==id)
      setFormdata({
        name : singleData.name,
        age :singleData.age,
      })
      setEditIndex(id)
    }

  return (
    <div>
      <h1>Crud</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="enter your name"
          onChange={handleChange}
          value={formdata.name}
        />
        <input
          type="text"
          name="age"
          placeholder="enter your age"
          onChange={handleChange}
          value={formdata.age}
        />
        <button type="submit">{editIndex==null ? "AddData": "UpdateData"}</button>
      </form>

      {
        data.map((e,i)=>{
            return <ul key={i}>
                <li>{e.id}</li>
                <li>{e.name}</li>
                <li>{e.age}</li>
                <li><button onClick={()=>handleEdit(e.id)}>Edit</button></li>
                <li><button onClick={()=>handleDelete(e.id)}>Delete</button></li>
            </ul>
        })
      }
    </div>
  );
}
