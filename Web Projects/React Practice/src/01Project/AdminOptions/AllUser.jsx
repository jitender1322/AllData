import { collection, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { firestore } from '../../firebaseConfig';
import Loader from '../Loader';
import './Dashboard.css'

export default function AllUser() {
    const [record, setRecord] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const snapshot = await getDocs(collection(firestore, 'User'));
        const userData = [];
        snapshot.forEach((doc) => {
            userData.push({ uid: doc.id, ...doc.data() });
        });
        setRecord(userData);
    }
    const handleDelete = async (uid) => {
        await deleteDoc(doc(firestore, "User", uid));
        let newdata = record.filter(user => user.uid !== uid);
        setRecord(newdata);
    }
    return (
        <div className="task-table">
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Profile Photo</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record ?
                            record.map((e, i) => {
                                return <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{e.picture ? <img src={e.picture} width='70' height='70' style={{ borderRadius: '15px' }} /> : <img src="https://cdn3d.iconscout.com/3d/premium/thumb/user-6332708-5209354.png?f=webp" width='70' height='70' />}</td>
                                    <td>{e.fname}</td>
                                    <td>{e.lname}</td>
                                    <td>{e.email}</td>
                                    <td><button onClick={() => handleEdit()}>Edit</button></td>
                                    <td><button onClick={() => handleDelete(e.uid)}>Delete</button></td>
                                </tr>
                            })
                            :
                            <Loader />
                    }
                </tbody>
            </table>
        </div>
    )
}
