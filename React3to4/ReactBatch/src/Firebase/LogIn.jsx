import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseconfig";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    let user = await signInWithEmailAndPassword(auth, email, password).then(
      (data) => {
        navigate("/dashboard", { replace: true });
      }
    );
  };
  return (
    <div>
      <h1>LogIn</h1>
      <input
        type="text"
        placeholder="Enter your Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>LogIn</button>
      <span>
        <Link to={"/"}>Sign Up ?</Link>
      </span>
    </div>
  );
}
