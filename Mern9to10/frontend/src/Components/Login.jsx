import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    await axios.post("http://localhost:1008/logIn", { email, password })
      .then((res) => {
        alert(res.data.msg);
        if(res.data.code == 100){
          navigate("/register")
        }else if(res.data.code == 200){
          localStorage.setItem("token",res.data.token)
          navigate("/dashboard");
        }else{
          navigate("/");
        }
      });
  };
  return (
    <div>
      <h1>Login</h1>
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
      <br />
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
      <br />
      <br />
      <Link to={"/register"}>Register ?</Link>
    </div>
  );
}
