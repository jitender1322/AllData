import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({})

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    let res = await axios.post("http://localhost:2312/login", formdata,{withCredentials:true})
    if (res.data.auth) {
      alert(res.data.msg);
      localStorage.setItem("token", res.data.token);  
      navigate("/dashboard")
    } else {
      navigate("/login")
    }
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-200'>
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button> <br /><br />
        </form>
          <button onClick={()=>navigate("/forgetPass")} className='border p-2'>Forgot Password ?</button>
      </div>
    </div>
  )
}
