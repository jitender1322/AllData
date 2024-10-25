import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './01Project/Login'
import Admin from './01Project/Admin'
import UserLogin from './01Project/UserLogin'
import UserDashboard from './01Project/UserDashboard'
import AdminDashboard from './01Project/AdminDashboard'
import AddPost from './01Project/AddPost'
import Messenger from './01Project/Messenger'


export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} ></Route>
                    <Route path='/admin' element={<Admin />} ></Route>
                    <Route path='/userLogin' element={<UserLogin />} ></Route>
                    <Route path='/userDashboard' element={<UserDashboard />} ></Route>
                    <Route path='/adminDashboard' element={<AdminDashboard />} ></Route>
                    <Route path='/addPost' element={<AddPost />}></Route>
                    <Route path='/messenger' element={<Messenger />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
