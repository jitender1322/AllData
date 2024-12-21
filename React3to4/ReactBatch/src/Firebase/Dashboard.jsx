import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export default function Dashboard() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState();
  const [record, setRecord] = useState();

  const [name, setName] = useState("");
  const [sub, setSub] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setUser(data.uid);
      }
    });
  }, []);

  useEffect(() => {
    fetchUser();
    fetchData();
  }, [user]);

  const fetchUser = async () => {
    if (user) {
      await getDoc(doc(db, "Users", user)).then((data) => {
        setUserData(data.data());
      });
    }
  };

  const fetchData = async () => {
    await getDocs(collection(db, "data")).then((data) => {
      let details = data.docs.map((item) => ({
        docId: item.id,
        ...item.data(),
      }));
      setRecord(details);
    });
  };

  const handleSubmit = async () => {
    if (editIndex == null) {
      await addDoc(collection(db, "data"), { name, sub, userId: user }).then(
        (data) => {
          setRecord([...record, { name, sub, userId: user }]);
        }
      );
    } else {
      await updateDoc(doc(db, "data", editIndex), {
        name,
        sub,
        userId: user,
      });
      fetchData();
    }
    setName("");
    setSub("");
    setEditIndex(null)
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "data", id)).then((data) => {
      let remainingRecord = record.filter((item) => item.docId != id);
      setRecord(remainingRecord);
    });
  };

  const handleEdit = async (id) => {
    let singleData = record.find((item) => item.docId == id);
    setName(singleData.name);
    setSub(singleData.sub);
    setEditIndex(id);
  };

  return (
    <div>
      <h1>Welcome to Dashboard</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your subject"
        value={sub}
        onChange={(e) => setSub(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {editIndex == null ? "Add Data" : "UpdateData"}
      </button>

      {record &&
        record.map((e, i) => {
          return (
            <ul key={i}>
              <li>{e.userId}</li>
              <li>{e.docId}</li>
              <li>{e.name}</li>
              <li>{e.sub}</li>
              <li>
                <button onClick={() => handleEdit(e.docId)}>Edit</button>
              </li>
              <li>
                <button onClick={() => handleDelete(e.docId)}>Delete</button>
              </li>
            </ul>
          );
        })}
    </div>
  );
}
