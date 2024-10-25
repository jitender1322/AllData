import React, { useState } from 'react'
import { useEffect } from 'react'
import { auth, firestore } from '../../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';

export default function Dashboard() {
    const [user, setUser] = useState("")
    const [name, setName] = useState("")
    const [sub, setSub] = useState("")
    const [editIndex, setEditIndex] = useState("")

    const [record, setRecord] = useState(null);
    useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            } else {
                setUser("guest")
            }
        })
    }, [])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let querySnapshot = await getDocs(collection(firestore, "Students"))
        console.log(querySnapshot);
        let allData = querySnapshot.docs.map((doc) => ({ docId: doc.id, ...doc.data() }))
        setRecord(allData)
    }

    const handleSubmit = async () => {
        console.log(editIndex);

        if (!editIndex || editIndex < 0) {
            await addDoc(collection(firestore, "Students"), {
                id: user.uid, name, sub
            })
        } else {
            await updateDoc(doc(firestore, "Students", record[editIndex].docId), {
                name: name,
                sub: sub
            })
        }
        setName("");
        setSub("");
        fetchData();
        setEditIndex(null)
    }

    const handleDelete = async (index) => {
        await deleteDoc(doc(firestore, "Students", record[index].docId))
        let remainingData = record.filter((e, i) => i !== index);
        console.log(remainingData);

        setRecord(remainingData)
    }

    const handleEdit = (index) => {
        let singleData = record[index];
        setName(singleData.name)
        setSub(singleData.sub)
        setEditIndex(index)
    }
    return (
        <div>
            <h1>Welcome</h1>

            <input type="text" placeholder='enter name' onChange={(e) => setName(e.target.value)} value={name} />
            <input type="text" placeholder='enter subject' onChange={(e) => setSub(e.target.value)} value={sub} />
            <button onClick={handleSubmit}>{editIndex ? "Update" : "Submit"}</button>

            <table border='1' width="60%" >
                <thead>
                    <th>Uid</th>
                    <th>name</th>
                    <th>subject</th>
                    <th colSpan={2} >action</th>
                </thead>
                <tbody>
                    {
                        record ?
                            record.map((e, i) => {
                                return <tr key={i} >
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.sub}</td>
                                    <td><button onClick={() => handleEdit(i)} >Edit</button></td>
                                    <td><button onClick={() => handleDelete(i)} >Delete</button></td>
                                </tr>
                            })
                            : <p>Loading</p>
                    }
                </tbody>
            </table>
        </div>
    )
}
