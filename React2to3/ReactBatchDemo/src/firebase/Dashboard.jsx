import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseconfig'
import { onAuthStateChanged } from 'firebase/auth'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { all } from 'axios';

export default function Dashboard() {
    const [user,setUser]=useState(null);
    const [record,setRecord]=useState([]);

    const [task,setTask]=useState("");
    const [priority,setPriority]=useState("");

    const [editIndex,setEditIndex]=useState(null);

   useEffect(()=>{
    let subscribe = onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
            setUser(currentUser)
        }
    })
   },[])

   useEffect(()=>{
    if(user){
        fetchUser()
        fetchData();
    }
   },[user])

   const fetchUser = ()=>{
        console.log(user.uid);
        getDoc(doc(db,"users",user.uid))
        .then(data=>{
            console.log(data.data());
        })
   }

   const fetchData = async ()=>{
    let allData = await getDocs(collection(db,"Todos"))
    let newData = allData.docs.map((data)=>({docId:data.id,...data.data()}));
    console.log(newData);
    setRecord(newData)
   }

   const handleTask =async ()=>{   
    let obj = {uid:user.uid,task,priority};

    if(editIndex == null){
        let addData = await addDoc(collection(db,"Todos"),obj)
        .then(data=>{
            setRecord([...record,obj])
        })
    }else{
        let updateData = await updateDoc(doc(db,"Todos",editIndex),{
            id : user.uid, task, priority
        })
        fetchData()
    }

    setTask("");
    setPriority("");
    setEditIndex(null);
   }

   let handelDelete = async (id)=>{
    let deleteData = await deleteDoc(doc(db,"Todos",id));
    fetchData();
   }

   let handelEdit = (id)=>{
    let singleData = record.find(item=>item.docId == id);
    setTask(singleData.task);
    setPriority(singleData.priority)
    setEditIndex(id);
   }

  return (
    <div>
        <h1>Dashboard</h1>
        <input type="text" placeholder='Enter your task' value={task} onChange={(e)=>setTask(e.target.value)} />
        <input type="text" placeholder='Enter priority' value={priority} onChange={(e)=>setPriority(e.target.value)} />
        <button onClick={handleTask} >{editIndex == null ? "Add Task" : "Update Task"}</button>

        {
            record &&
            record.map((e,i)=>{
                return <ul key={i}>
                    <li>{e.task}</li>
                    <li>{e.priority}</li>
                    <button onClick={()=>handelEdit(e.docId)}>Edit</button>
                    <button onClick={()=>handelDelete(e.docId)} >Delete</button>
                </ul>
            })
        }
    </div>
  )
}
