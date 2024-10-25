import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    axios.get('http://localhost:1080/api/users')
      .then((res) => {
        console.log(res);
        setUsers(res.data)
      })
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:1080/api/users', { name, email, password })
      .then((user) => {
        console.log(user);
        setUsers([...users, user.data])
      })
    setName('');
    setEmail('');
    setPassword('');
  };


  const deleteData = async (id) => {
    axios.delete(`http://localhost:1080/api/deleteUser?id=${id}`)
      .then((res) => {
        console.log(res);
        // setUsers(res.data)
      })
  }
  return (
    <div>
      <h1>User List</h1>

      {users.map((user, i) => {
        return <ul key={i} >
          <li key={user._id}>{user.name} - {user.email} - {user.email} </li>
          <button>edit</button>
          <button onClick={() => deleteData(user._id)} >delete</button>
        </ul>
      })}


      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  )
}
