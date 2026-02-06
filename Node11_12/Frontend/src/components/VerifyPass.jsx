import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function VerifyPass() {
    const navigate = useNavigate()

    const [formdata, setFormdata] = useState({})
    const token = localStorage.getItem("token");

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:2312/verifyPass",formdata).then((res)=>{
            console.log(res);
        })
    }
    return (
        <>
            <form class="max-w-md mt-[200px] mx-auto" onSubmit={handleSubmit}>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" onChange={handleChange} name="otp" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                    <label for="floating_email" class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">OTP</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="password" onChange={handleChange} name="newPass" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                    <label for="floating_password" class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">New Password</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="password" onChange={handleChange} name="confirmPass" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                    <label for="floating_repeat_password" class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Confirm password</label>
                </div>
                <button type="submit" class="text-black bg-brand box-border border  hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
            </form>

        </>
    )
}
