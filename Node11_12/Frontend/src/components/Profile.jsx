import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Profile() {

    const [user,setUser] = useState({});
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if(!token){
            navigate("/login");
        }else{
            handleProfile();
        }
    },[])

    const handleProfile = async () => {
        await axios.get("http://localhost:2312/profile", {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        }).then((res)=>{
            setUser(res.data.user);
        })
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <h1 className="text-xl font-bold text-blue-600">Dashboard</h1>
                    <button className="font-medium text-gray-700 hover:text-blue-600 cursor-pointer" onClick={() => navigate("/login")}>
                        Logout
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-white rounded-2xl shadow overflow-hidden">
                    <div className="bg-blue-600 h-40"></div>

                    <div className="px-6 pb-6">
                        <div className="-mt-16 flex items-end justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center text-4xl font-bold text-blue-600 border-4">
                                    {user.name ? user.name.charAt(0).toUpperCase() : ""}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold text-white">
                                       {user.name}
                                    </h2>
                                    <p className="text-gray-500">
                                        {user.email}
                                    </p>
                                </div>
                            </div>

                            <button className="px-6 py-2 rounded-xl cursor-pointer bg-blue-600 text-white font-medium hover:bg-blue-700">
                                Edit Profile
                            </button>
                            <button onClick={()=>navigate("/changePass")} className="px-6 py-2 rounded-xl cursor-pointer bg-blue-600 text-white font-medium hover:bg-blue-700">
                                Change Password
                            </button>
                        </div>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-gray-50 rounded-xl p-6">
                                <p className="text-sm text-gray-500">User ID</p>
                                <p className="mt-1 font-semibold text-gray-800">#12345</p>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6">
                                <p className="text-sm text-gray-500">Role</p>
                                <p className="mt-1 font-semibold text-gray-800">User</p>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6">
                                <p className="text-sm text-gray-500">Status</p>
                                <p className="mt-1 font-semibold text-green-600">Active</p>
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white border rounded-xl p-6">
                                <h3 className="font-semibold text-gray-800 mb-4">
                                    Personal Information
                                </h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Full Name</span>
                                        <span className="text-gray-800">{user.name}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Email</span>
                                        <span className="text-gray-800">{user.email}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Phone</span>
                                        <span className="text-gray-800">+91 25315 85965</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border rounded-xl p-6">
                                <h3 className="font-semibold text-gray-800 mb-4">
                                    Account Details
                                </h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Joined</span>
                                        <span className="text-gray-800">Jan 10, 2024</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Plan</span>
                                        <span className="text-gray-800">Free</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Last Login</span>
                                        <span className="text-gray-800">2 hours ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}

