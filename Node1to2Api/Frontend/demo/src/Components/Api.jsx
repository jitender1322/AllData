import React, { useState } from "react";
import axios from "axios";
export default function Api() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    await axios
      .post("http://localhost:1008/register", { name, email, password })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      <h1>MERN Stack CRUD</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign up</button>
    </div>
  );
}
