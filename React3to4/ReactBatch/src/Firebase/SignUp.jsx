import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    let user = await createUserWithEmailAndPassword(auth, email, password).then(
      (data) => {
        console.log(data);
      }
    );
  };

  return (
    <div>
      <h1>SignUp</h1>
      <input
        type="text"
        placeholder="Enter your Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your City"
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your Age"
        onChange={(e) => setAge(e.target.value)}
      />
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
      <button onClick={handleSignup}>Sign Up</button>
      <span>
        <Link to={"/login"}>LogIn ?</Link>
      </span>
    </div>
  );
}
