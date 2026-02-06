import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgetPass() {

  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({})

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const sendOtp = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:2312/forgetPass",formdata).then((res)=>{
      navigate("/verifyPass")
    })
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-200'>
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Forget Password
        </h2>

        <form onSubmit={sendOtp}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send OTP
          </button> <br /><br />
        </form>
      </div>
    </div>
  )
}
