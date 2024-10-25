import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Components/firebase/SignUp'
import Login from './Components/firebase/Login'
import Dashboard from './Components/firebase/Dashboard'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={SignUp} ></Route>
          <Route path='/login' Component={Login} ></Route>
          <Route path='/dashboard' Component={Dashboard} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
