import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export default function Dashboard() {
    const [user, setUser] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");

    const [record, setRecord] = useState([])
    const [editIndex, setEditIndex] = useState(null)


    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log(currentUser);
                setUser(currentUser.uid)
            } else {
                setUser("guest")
            }
        })

    }, [])

    useEffect(() => {
        fetchUser()
        fetchData()
    }, [user])

    const fetchUser = async () => {
        if (user) {
            let data = await getDoc(doc(db, "users", user))
        }
    }

    const fetchData = async () => {
        let data = await getDocs(collection(db, "Users"))
        console.log(data);
        let newData = data.docs.map((item) => ({ docId: item.id, ...item.data() }))
        console.log(newData);
        setRecord(newData)
    }

    const addData = async () => {
        if (editIndex == null) {
            await addDoc(collection(db, "Users"), {
                name, subject
            })
        } else {
            await updateDoc(doc(db, "Users", editIndex), { name, subject })
        }
        fetchData()
        setEditIndex(null)
        setName("")
        setSubject("")
    }

    const deleteData = async (docId) => {
        await deleteDoc(doc(db, "Users", docId));
        let deleteRecord = record.filter((item) => item.docId != docId);
        setRecord(deleteRecord)
    }

    const editData = (docId) => {
        let singleData = record.find((item) => item.docId == docId);
        setName(singleData.name)
        setSubject(singleData.subject)
        setEditIndex(docId)
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
            <button onClick={addData} >{editIndex == null ? "Add" : "Update"}</button>
            {
                record &&
                record.map((e, i) => {
                    return <ul key={i}>
                        <li>{e.name}</li>
                        <li>{e.subject}</li>
                        <li><button onClick={() => editData(e.docId)} >Edit</button></li>
                        <li><button onClick={() => deleteData(e.docId)} >Delete</button></li>
                    </ul>
                })
            }
        </div>
    )
}
