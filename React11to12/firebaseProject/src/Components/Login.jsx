import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";

export default function Login() {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({});

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    await signInWithEmailAndPassword(
      auth,
      formdata.email,
      formdata.password
    ).then((res) => {
      navigate("/dashboard");
    });
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        placeholder="Enter your password"
        onChange={handleChange}
      />
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
      <br />
      <br />
      <Link to={"/register"}>Register ?</Link>
    </div>
  );
}
