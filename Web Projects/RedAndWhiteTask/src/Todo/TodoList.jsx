import React, { useEffect, useState } from 'react';
import { firestore, auth } from '../firebaseConfig'; // Adjust the import path as needed
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export default function TodoList() {
    const [task, setTask] = useState('');
    const [des, setDes] = useState('');
    const [priority, setPriority] = useState('');
    const [data, setData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState('');
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
                setData([]);
            }
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (user) {
            fetchTasks(user.uid);
        }
    }, [user, filter]);

    const fetchTasks = async (uid) => {
        const tasksSnapshot = await getDocs(collection(firestore, "tasks"));
        console.log(tasksSnapshot);

        const allTasks = tasksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log(allTasks);

        let userTasks = allTasks.filter(task => task.uid === uid);
        if (filter !== 'All') {
            userTasks = userTasks.filter(task => task.status === filter);
        }

        const userDataDoc = await getDoc(doc(firestore, "User", uid));
        setUserData(userDataDoc.data());
        setData(userTasks);
    };

    const handleSubmit = async () => {
        if (!user) return;

        if (editIndex === null) {
            await addDoc(collection(firestore, "tasks"), {
                task,
                des,
                priority,
                status: 'Pending',
                uid: user.uid
            });
        } else {
            const taskRef = doc(firestore, "tasks", data[editIndex].id);
            await updateDoc(taskRef, {
                task,
                des,
                priority,
                status: 'Pending',
                uid: user.uid
            });
            setEditIndex(null);
        }
        setTask('');
        setDes('');
        setPriority('');
        fetchTasks(user.uid);
    };

    const handleEdit = (index) => {
        const taskToEdit = data[index];
        setTask(taskToEdit.task);
        setDes(taskToEdit.des);
        setPriority(taskToEdit.priority);
        setEditIndex(index);
    };

    const handleDelete = async (index) => {
        const taskRef = doc(firestore, "tasks", data[index].id);
        await deleteDoc(taskRef);
        fetchTasks(user.uid);
    };

    const handleStatus = async (index) => {
        const taskRef = doc(firestore, "tasks", data[index].id);
        await updateDoc(taskRef, { status: 'Completed' });
        fetchTasks(user.uid);
    };

    return (
        <div className="container">
            <h1>Task Manager</h1>
            <h4>Welcome {userData.name}</h4>
            <div className="form">
                <input
                    type="text"
                    placeholder="Task Title"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Task Description"
                    value={des}
                    onChange={(e) => setDes(e.target.value)}
                /><br />
                <select
                    name="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    required
                >
                    <option value="" hidden>Priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select><br />
                <button onClick={handleSubmit}>{editIndex == null ? "Submit" : "Update"}</button>
            </div>

            <div className="filter">
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>

            <div className="task-table">
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th colSpan={2}>Action</th>
                            <th>Mark as Completed</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((task, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{task.task}</td>
                                <td>{task.des}</td>
                                <td>{task.priority}</td>
                                <td><button onClick={() => handleEdit(i)}>Edit</button></td>
                                <td><button onClick={() => handleDelete(i)}>Delete</button></td>
                                <td><button onClick={() => handleStatus(i)} disabled={task.status === "Completed"}>Mark as Completed</button></td>
                                <td>{task.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
