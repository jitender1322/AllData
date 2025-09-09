import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';

export default function Dashboard() {
  const [userId,setUserId] = useState()
  const [task,setTask]=useState("")
  const [priority,setPriority]=useState("")
  const [editIndex,setEditIndex]=useState(null)

  const [record,setRecord] = useState([])

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
       setUserId(user.uid)
    })
  },[])

  useEffect(()=>{
    fetchUser()
    fetchTasks()
  },[userId])

  const fetchUser = async()=>{
   if(userId){
     await getDoc(doc(db, "Users", userId)).then((res) => {
       console.log(res.data());
     });
   }
  }

  const fetchTasks = async()=>{
    await getDocs(collection(db,"Tasks")).then((res)=>{
      let detailedData = res.docs.map((item) =>({
        docId : item.id,
        ...item.data()
      }) );
     setRecord(detailedData)
    })
  }

  const handleTask = async()=>{
    if(editIndex == null){
      await addDoc(collection(db, "Tasks"), { task, priority, userId }).then(
        (res) => {
          setRecord([...record, { task, priority, userId }]);
        }
      );
    }else{
      await updateDoc(doc(db,"Tasks",editIndex),{
        task,priority,userId
      })
      fetchTasks()
    }

    setTask("")
    setPriority("")
    setEditIndex(null)
  }

  const handleDelete = async (id)=>{
   await deleteDoc(doc(db,"Tasks",id)).then((res)=>{
        fetchTasks()
   })
  }

  const handleLogOut = async()=>{
    await auth.signOut()
  }
    
  const handleEdit = (id)=>{
    let singleData  = record.find((item)=>item.docId == id)
    setTask(singleData.task)
    setPriority(singleData.priority)
    setEditIndex(id)
  }
  return (
    <div>
      <h1>Dashboard</h1>

      <input
        type="text"
        placeholder="Enter the task name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option hidden>Select the priority</option>
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>

      <button onClick={handleTask}>{editIndex == null ? "Add Task"  :"Update task"}</button>

      {
        record &&
        record.map((e,i)=>{
          return <ul key={i}>
            <li>{e.userId}</li>
            <li>{e.task}</li>
            <li>{e.priority}</li>
            <button onClick={()=>handleEdit(e.docId)}>Edit</button>
            <button onClick={()=>handleDelete(e.docId)}>Delete</button>
          </ul>
        })
      }
    </div>
  );
}
